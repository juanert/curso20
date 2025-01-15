import propTypes from 'prop-types';

function Button({ texto = "Presioname" }){
  return(
    <button className='bg-red-600 text-white'>{texto}</button>
  )
}

Button.propTypes = {
  texto: propTypes.string
}

export default Button;