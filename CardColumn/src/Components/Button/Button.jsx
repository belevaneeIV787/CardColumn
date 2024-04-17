import '../Button/Button.css'

const Button = ({text, color}) => {
    return(
          <button className='btn' color={{color:color}}>{text}</button>
    )
}
export default Button