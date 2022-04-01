function main() {
    // let a = document.createElement('button');
    // a.innerHTML = 'TOP';
    // a.setAttribute('id', 'go-to-top');
    // document.body.appendChild(a)
    const myButton = document.getElementById('go-to-top');

    const scrollBtnDisplay = function () {
        window.scrollY > window.innerHeight
            ? myButton.classList.add("show")
            : myButton.classList.remove("show");
    };
    window.addEventListener("scroll", scrollBtnDisplay);

    const scrollWindow = function () {
        if (window.scrollY != 0) {
            setTimeout(function () {
                window.scrollTo(0, window.scrollY - 40);
                scrollWindow();
            }, 10);
        }
    }

    myButton.addEventListener("click", scrollWindow);
}
document.addEventListener('DOMContentLoaded', main);