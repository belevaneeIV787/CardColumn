import '../Cards/Caixa.css'
import Button from '../Button/Button'

const Caixa = ({texto, pezinho, imagem, textBtn}) => {
    return(
        <div className='Caixa'>
            <img className='imgg' src={imagem}/>
            <h1 className='texto'>{texto}</h1>
            <p className='p'>{pezinho}</p>
            <Button
            text={textBtn}/>
        </div>
    )
}
export default Caixa