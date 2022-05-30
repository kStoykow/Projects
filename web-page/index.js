function main() {
    const myButton = document.getElementById('go-to-top');
    myButton.addEventListener("click", function scrollWindow() {
        if (window.scrollY != 0) {
            setTimeout(function () {
                window.scrollTo(0, window.scrollY - 40);
                scrollWindow();
            }, 10);
        }
    });

    const hiddenElems = document.querySelectorAll('.trainers>div');
    Array.from(hiddenElems).map(elem => {
        elem.addEventListener('mouseenter', function show(e) {
            e.target.firstElementChild.firstElementChild.classList.remove('hidden');
            e.target.firstElementChild.style.filter = 'brightness(80%)';
        });
        elem.addEventListener('mouseleave', function show(e) {
            e.target.firstElementChild.firstElementChild.classList.add('hidden');
            e.target.firstElementChild.style.filter = 'brightness(100%)';
        });
    });


    const newsletterBtn = document.getElementById('newsletter-btn');
    newsletterBtn.addEventListener('click', function onSubmit(e) {
        e.preventDefault();
    });

    const bmiCalcBtn = document.getElementById('bmi-calc');
    bmiCalcBtn.addEventListener('click', function onBmi(e) {
        const weight = document.getElementById('bmi-weight');
        const height = document.getElementById('bmi-height');
        const age = document.getElementById('bmi-age');
        const gender = document.getElementById('bmi-gender');
        const bmiParentElem = document.querySelector('.bmi-inputs');
        let healthParser = '';

        if (weight.value != '' && isNaN(Number(weight.value)) == false && height.value != '' && isNaN(Number(height.value)) == false) {
            while (bmiParentElem.lastChild.id != 'bmi-calc') {
                bmiParentElem.removeChild(bmiParentElem.lastChild);
            }

            const BMI = Number(weight.value) / ((Number(height.value) / 100) ** 2);
            if (BMI < 18.5) {
                healthParser = 'underweight';
            } else if (BMI < 24.9) {
                healthParser = 'normal';
            } else {
                healthParser = 'overweight';
            }

            const resultElem = document.createElement('input');
            resultElem.classList.add('inputs');
            resultElem.style["margin-left"] = '2rem';
            resultElem.style.width = '61.7%';
            resultElem.readOnly = true;
            resultElem.value = `${BMI.toFixed(2)}% BMI, considered ${healthParser}.`;
            bmiParentElem.appendChild(resultElem);
            weight.value = '';
            height.value = '';
            age.value = '';
            gender.value = 'Gender';
        }else{
            while (bmiParentElem.lastChild.id != 'bmi-calc') {
                bmiParentElem.removeChild(bmiParentElem.lastChild);
            }
        }
    });
}
document.addEventListener('DOMContentLoaded', main);