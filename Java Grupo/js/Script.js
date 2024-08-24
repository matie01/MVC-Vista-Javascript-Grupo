const form = document.getElementById('comentarioForm');
const comentariosContainer = document.getElementById('comentariosContainer');
const comentarioInput = document.getElementById('comentario');
const contador = document.getElementById('contador');

comentarioInput.addEventListener('input', () => {
    const caracteresRestantes = 200 - comentarioInput.value.length;
    contador.textContent = `${caracteresRestantes} caracteres restantes`;
});

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const comentario = comentarioInput.value;

    if (nombre && comentario) {

        const nuevoComentario = document.createElement('div');
        nuevoComentario.classList.add('comentario');
        nuevoComentario.innerHTML = `
            <h4>${nombre}</h4>
            <p>${comentario}</p>
            <span class="eliminar">Eliminar</span>
        `;

        comentariosContainer.appendChild(nuevoComentario);

        form.reset();
        contador.textContent = "200 caracteres restantes";

        const eliminarBtn = nuevoComentario.querySelector('.eliminar');
        eliminarBtn.addEventListener('click', function() {
            nuevoComentario.remove();
        });
    }
});
