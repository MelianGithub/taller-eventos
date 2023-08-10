const div = document.getElementById("div")
div.addEventListener('click', () => {
    alert('Hola, soy un div');

})


const saludar = document.getElementById("saludar")
saludar.addEventListener('click', (e) => {
    alert('Hola!');
    e.stopPropagation();
})

