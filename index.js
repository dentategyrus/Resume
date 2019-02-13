
function toggleText(event) {
    const idName = event.target.nextElementSibling.id;
    const idElement = document.getElementById(idName);

    if (idElement.style.display === 'none') {
        idElement.style.display = 'block';
    } else {
        idElement.style.display = 'none';
    }
}

const classList = document.getElementsByClassName('toggle-text');

for(let i = 0; i < classList.length; i++){
    classList[i].addEventListener('click', function(event) {
        toggleText(event);
    });
}