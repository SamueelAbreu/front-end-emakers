import React from "react";
import "./home.css";

function TelaHome() { 
     return (
          <div> {/*estrutura da tela de home */}
          <div class="body">
               <header className="header-home">
                    <nav className="navbar">
                         <img src="src/img/logocomprido.png" alt="Logo Comprido" className="logo-comprido"
                              draggable="false" />
                         <ul>
                              <li><a href="#"><i className="bi bi-search"></i></a></li>
                              <li><a href="#"><i className="bi bi-people-fill"></i></a></li>
                              <li><a href="#"><img src="src/img/icon.png" alt="home" /></a></li>
                         </ul>
                         <div className="mobile-menu">
                              <i className="bi bi-list"></i>
                         </div>
                    </nav>
               </header>

               <main className="main-home">
                    <section className="profile">
                              <img src="src/img/icon.png" alt="Icon" className="icon" draggable="false" />
                         <h1 className="nome">Caio Henrique Noronha, 19</h1>
                         <h3 className="biografia">
                              Exemplo de bio;<br />
                              Lorem ipsum dolor sit amet;<br />
                              Aenean in cursus dolor.<br />
                              Aliquam vel tortor non justo pulvinar placerat a nec ex.
                         </h3>

                    </section>
               </main>
               <footer className="footer-home">
                    <img src="src/img/icon.png" alt="Icon" className="icon" draggable="false" />
                    <img src="src/img/finn1.png" alt="Finn1" className="finn-1" draggable="false" />
                    <img src="src/img/finn2.png" alt="Finn2" className="finn-2" draggable="false" />
               </footer>
          </div>
          </div>
     );
}
export default TelaHome;