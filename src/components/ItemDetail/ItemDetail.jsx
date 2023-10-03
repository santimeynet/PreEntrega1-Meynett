import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'

const ItemDetail = ({id, nombre, img, category, precio, cantidad}) => {


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
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Precio: ${precio} USD
                </p>
                <p className="Info">
                    Stock disponible: {cantidad}
                </p>
            </section>
            <footer className="ItemFooter">
            <ItemCount initial={1} cantidad={cantidad} onAdd={(quantity) => console.log('Cantidad agregada:', quantity)} />
            </footer>
        </article>
    )
}


export default ItemDetail;