import './Card.css'
import Button from '../Button/Button'

const Caixa = ({text, footer, imagem, btnText}) => {
    return(
        <div className='Caixa'>
            <img className='imgg' src={imagem}/>
            <h1 className='texto'>{text}</h1>
            <p className='p'>{footer}</p>
            <Button
            text={btnText}/>
        </div>
    )
}
export default Caixa