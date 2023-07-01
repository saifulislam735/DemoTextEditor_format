document.getElementById('bold-icon').addEventListener('click', function () {
    document.getElementById('text-area').style.fontWeight = 'bold';
})
document.getElementById('bold-icon').addEventListener('dblclick', function () {
    document.getElementById('text-area').style.fontWeight = 'normal';
})
document.getElementById('italic-icon').addEventListener('click', function () {
    document.getElementById('text-area').style.fontStyle = 'italic';
})
document.getElementById('italic-icon').addEventListener('dblclick', function () {
    document.getElementById('text-area').style.fontStyle = 'normal';
})
document.getElementById('underline-icon').addEventListener('click', function () {
    document.getElementById('text-area').style.textDecoration = 'underline';
})
document.getElementById('underline-icon').addEventListener('dblclick', function () {
    document.getElementById('text-area').style.textDecoration = 'none';
})