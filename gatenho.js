const cat = document.getElementById('cat');

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    // Centralize a imagem do gatinho em relação ao cursor
    const offsetX = -50; // Metade da largura da imagem do gatinho
    const offsetY = -50; // Metade da altura da imagem do gatinho

    cat.style.transform = `translate(${x + offsetX}px, ${y + offsetY}px)`;
});