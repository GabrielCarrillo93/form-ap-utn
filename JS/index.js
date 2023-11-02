const select = document.getElementById("estado");
const estadoSeleccionado = document.getElementById("estadoSeleccionado");

select.addEventListener("change", () => {
    cambiarEstado(select.value);
});

const cambiarEstado = (estado) =>{
    estadoSeleccionado.textContent = estado;
} 