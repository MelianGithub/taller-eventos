const div = document.getElementById("div")
div.addEventListener('click', () => {
    alert('Hola, soy un div');

})


const saludar = document.getElementById("saludar")
saludar.addEventListener('click', (e) => {
    e.stopPropagation();
    alert('Hola!');
})

