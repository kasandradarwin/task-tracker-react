import PropTypes from 'prop-types'
import '../index.css'


export const Button = (props) => {

  return (
    <button 
    // onClick={onClick}
    style={{ backgroundColour: props.colour }}
     className="btn">
        {props.text}
        </button>
  )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string, 
    color:PropTypes.string,
    onClick: PropTypes.func,

}
