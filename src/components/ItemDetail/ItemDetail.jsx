import CartContext from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'
import { useContext, useState } from "react"
import { Link } from "react-router-dom"

const ItemDetail = ({id, nombre, img, category, precio, cantidad}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, precio
        }

        addItem(item, quantity)
    }


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
            {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Button'>Terminar Compra</Link>
                    ) : (
                        <ItemCount initial={1} cantidad={cantidad} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )
}


export default ItemDetail;