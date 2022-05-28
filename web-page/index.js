function main() {
    const myButton = document.getElementById('go-to-top');
    const scrollWindow = function () {
        if (window.scrollY != 0) {
            setTimeout(function () {
                window.scrollTo(0, window.scrollY - 40);
                scrollWindow();
            }, 10);
        }
    }
    myButton.addEventListener("click", scrollWindow);

    const hiddenElems = document.querySelectorAll('.trainers>div');
    Array.from(hiddenElems).map(elem => {
        elem.addEventListener('mouseenter', function show(e) {
            e.target.firstElementChild.firstElementChild.classList.remove('hidden');
        });
        elem.addEventListener('mouseleave', function show(e) {
            e.target.firstElementChild.firstElementChild.classList.add('hidden');
        });
    })

}
document.addEventListener('DOMContentLoaded', main);