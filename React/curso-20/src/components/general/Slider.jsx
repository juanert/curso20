function Slider() {
  return (
    <section>
      <Card />
      <Card />
      <Card />
    </section>
  );
}

/*
  Componente local
  Este componente se puede utilizar solo en este archivo
*/
function Card(){
  return (
    <div>
      <h2>Titulo</h2>
      <p>Parrafo</p>
    </div>
  );
}

export default Slider;

/*
  Practica de componentes
  Crea una pagina llamada test.jsx
  Esta debe contener una barra de navegación que contenga
  - Logo
  - Textos de navegación (Home, About, Contact)
  - Botón de inicio de sesión

  Además debe contener un blog con una imagen, un título 
  y parrafos de texto. E incluir además la información de quien
  redacta el blog y su imagen.

  Fecha de entrega: 16/01/25


*/
