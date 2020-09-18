console.log("this is magic papa");
import * as UI from "./interfaz.js";
import API from "./api.js";

UI.formBusqueda.addEventListener("submit", buscarCancion);

function buscarCancion(e) {
  e.preventDefault();

  //obtener datos del formulario
  const cancion = document.querySelector("#cancion").value;
  const artista = document.querySelector("#artista").value;

  if (artista === "" || cancion === "") {
    //el usuario dejo al menos un campo vacio
    UI.divError.textContent = "Error... campo vacio";
    UI.divError.classList.add("alert-danger");
    //remuevo el mensaje luego de 3 segundos
    setTimeout(() => {
      UI.divError.textContent = "";
      UI.divError.classList.remove("alert-danger");
    }, 3000);

    return;
  }

  //consultar api

  const busqueda = new API(artista, cancion);
  busqueda.consultarAPI();
}
