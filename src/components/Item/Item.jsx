import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({id, nombre, img, precio, cantidad}) => {


    return (
        <article className="CardItems">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg" />
            </picture>
            <section className='ItemContainer'>
                <p className="Info">
                    Precio: ${precio}USD
                </p>
                <p className="Info">
                    Stock disponible: {cantidad}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item;