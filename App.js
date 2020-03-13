	import React from 'react';
	import Foto from './Frasco-Florescer.svg'
	import './App.css';


	function App() {
	  return (
	   <div className="container-fluid p-0">
			<nav className="navbar navbar-expand-md navbar-light">
			 <div className="navbar-nav"> 


			   <button className="navbar-toggler" type="button" data-toggle ="collapse" data-target="#navbarMainToggler" aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggler navigation">
			  <span className="navbar-toggler-icon"></span>
			  </button>

			  <section className="collapse navbar-collapse" id="navbarMainToggler">
			  <a className="nav-item nav-link" href="#">HOME</a>
			  <a className="nav-item nav-link" href="#">FLORESÇA</a>
			  <a className="nav-item nav-link" href="#">ONDE ENCONTRAR</a>
			  <a className="nav-item nav-link" href="#">CONTATO</a>

			  </section>
			  </div>  
			  </nav> 

		  <footer className="footer p-2 text-center bg-light d-flex justify-content-around">

		  <i class="fab fa-facebook"></i>&nbsp;&nbsp;
		  <i class="fab fa-instagram"></i>&nbsp;&nbsp;
		  <i class="fab fa-linkedin-in"></i>&nbsp;&nbsp;
		  <small><small>Todos os direitos reservados à Mádolim © - Copy Right | 2020</small></small>

		  </footer>


		</div>
	  );
	}
	export default App;
