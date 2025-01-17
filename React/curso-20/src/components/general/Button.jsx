import propTypes from 'prop-types';

/**
 * @component Button
 * @description Componente botón
 * @param {String} texto Texto del botón
 * @param {String} estilos Clases adicionales para el botón
 */
function Button({ texto = "Presioname", estilos = "text-white bg-red-600" }){
  return(
    <button className={`p-2 rounded-md ${estilos}`}>{texto}</button>
  )
}

Button.propTypes = {
  texto: propTypes.string,
  estilos: propTypes.string
}

export default Button;