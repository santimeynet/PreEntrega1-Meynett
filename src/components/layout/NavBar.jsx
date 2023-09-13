import CartWidget from "../common/CartWidget";

const NavBar = () =>{

    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="s">Kitchen Gadgets</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="s">Inicio</a>
                            <a class="nav-link" href="s">Lo mas buscado!</a>
                            <a class="nav-link" href="s">Ofertas!</a>
                        </div>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
        </div>
    )

}

export default NavBar;