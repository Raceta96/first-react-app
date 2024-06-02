const Button = ({
                    className, text = 'кнопка', onClick
                }) =>
    <button onClick={onClick} className={className}>{text}</button>


export default Button