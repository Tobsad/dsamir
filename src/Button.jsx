import PropTypes from 'prop-types'

export function Button({text, name}){
    console.log(text)
    if(!text){
        console.error("texto es requerido")
    }
    return <button>
        {text}-{name}
    </button>
}
Button.protTypes = {
    text: PropTypes.string.isRequired
}
Button.defaultProps={
    name:'Some User'
}