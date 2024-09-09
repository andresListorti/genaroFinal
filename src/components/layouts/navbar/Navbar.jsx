import CartWidget from "../../common/cardWidget/CartWidget";
import Logo from "../../common/logo/Logo";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      {/* Logo o nombre empresa */}
      {/* Listado de categorias clickeables */}
      {/* cart + widget A la derecha */}
      <header>
        <Logo />
        <nav className="nav">
          <ul>
            <li>
              <a href="#colecciones">Colecciones</a>
            </li>
            <li>
              <a href="./pages/acceso.html">Acceso</a>
            </li>
            <li>
              <a href="./pages/contacto.html">Contacto</a>
            </li>
            <li className="cart">
              <a href="./pages/carro.html">
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
            </li>
            <CartWidget />
          </ul>
        </nav>
        {/* <nav className="nav__burger">
          <i className="fa-solid fa-bars"></i>
          <div className="select__wrapper">
            <div id="nav-select" className="nav-links">
              <section>
                <a href="#colecciones">Colecciones</a>
              </section>
              <section>
                <a href="./pages/acceso.html">Acceso</a>
              </section>
              <section>
                <a href="./pages/contacto.html">Contacto</a>
              </section>
              <section className="cart">
                <a href="./pages/carro.html">Carrito</a>
              </section>
            </div>
          </div>
        </nav> */}
      </header>
    </div>
  );
};

export default Navbar;
