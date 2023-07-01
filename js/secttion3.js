document.getElementById('color-picker').addEventListener('input', function (event) {
    document.getElementById('text-area').style.color = event.target.value;
})
document.getElementById('font-size').addEventListener('input', function (event) {
    document.getElementById('text-area').style.fontSize = event.target.value +"px";
})
document.getElementById('lowerToUpper').addEventListener('click', function () {
    const text = document.getElementById('text-area')
    const textString = text.value;
    const textToUp = textString.toUpperCase();
    text.value = textToUp;
})
document.getElementById('lowerToUpper').addEventListener('dblclick', function () {
    const text = document.getElementById('text-area')
    const textString = text.value;
    const textToUp = textString.toLowerCase();
    text.value = textToUp;
})

