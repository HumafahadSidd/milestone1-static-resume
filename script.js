var toggleButton = document.getElementById('toggle-button');
var skillsSections = document.getElementById('Skills');
toggleButton.addEventListener('click', function () {
    if (skillsSections.style.display === 'none') {
        skillsSections.style.display = 'block';
    }
    else {
        skillsSections.style.display = 'none';
    }
});
