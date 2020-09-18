import * as UI from "./interfaz.js";

class API {
  constructor(artista, cancion) {
    this.artista = artista;
    this.cancion = cancion;
  }
  consultarAPI() {
    const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => {
        if (resultado.lyrics) {
          //destructuro lyrics
          const { lyrics } = resultado;
          //inserto la letra de la cancion y la muestro en el div correspondiente
          UI.divResultado.textContent = lyrics;
          UI.divTitulo.textContent = ` Titulo : ${this.artista} Canción: ${this.cancion}`;
        } else {
          UI.divResultado.textContent = "la cancion con existe";
          UI.divError.classList.add("error");
          //elimino el mensaje de error luego de 3 segundos
          setTimeout(() => {
            UI.divResultado.textContent = "";
            UI.divError.classList.remove("error");
          }, 3000);
        }
      });
  }
}
export default API;
