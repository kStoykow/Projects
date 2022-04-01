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
}
document.addEventListener('DOMContentLoaded', main);