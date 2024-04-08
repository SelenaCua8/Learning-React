import PropTypes from 'prop-types'

export function Button({text, name }){

    if(!text){
        console.log('El texto es requerido')
    }
    return <button>
        {text} - {name}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired //para convertirlo en string
}

//defaultProps : valor por defecto
Button.defaultProps = {
    name: 'Some user'

}