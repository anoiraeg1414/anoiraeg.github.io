const first = document.getElementById("hi");
const second = document.getElementById("ho");
const choice = document.getElementById("choice");
choice.addEventListener("change", function () {
    const selectedOptionId = choice.value;
    switch (selectedOptionId) {
        case '1':
            first.placeholder = "Enter USD";
            second.placeholder = "Enter DHS";
            first.onkeyup = function () {
                second.value = first.value * 10;
            };
            second.onkeyup = function () {
                first.value = second.value / 10;
            };
            break;
        case '2':
            first.placeholder = "Enter DHS";
            second.placeholder = "Enter USD";
            first.onkeyup = function () {
                second.value = first.value / 10;
            };
            second.onkeyup = function () {
                first.value = second.value * 10;
            };
            break;
        case '3':
            first.placeholder = "Enter EUR";
            second.placeholder = "Enter DHS";
            first.onkeyup = function () {
                second.value = first.value * 13;
            };
            second.onkeyup = function () {
                first.value = second.value / 13;
            };
            break;
        case '4':
            first.placeholder = "Enter EUR";
            second.placeholder = "Enter USD";
            first.onkeyup = function () {
                second.value = first.value * 1.08;
            };
            second.onkeyup = function () {
                first.value = second.value / 1.08;
            };
            break;
        case '5':
            first.placeholder = "Enter USD";
            second.placeholder = "Enter EUR";
            first.onkeyup = function () {
                second.value = first.value / 1.08;
            };
            second.onkeyup = function () {
                first.value = second.value * 1.08;
            };
            break;
            default:
                first.placeholder = "Enter X";
                second.placeholder = "Enter Y";
                first.onkeyup = null;
                second.onkeyup = null;
    }
});