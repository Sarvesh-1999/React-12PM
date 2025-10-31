import style from "./card.module.css"
import Example from "./Example"

const Card = () => {
  return (
    <div id={style.container}>
        <h1>Card</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <button className={style.btn}>
            Click me
        </button>
    
        <hr />
        <Example/>
    </div>
  )
}

export default Card