<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="description" content="MyApuesta.com empresa que brinda seguridad y confianza en apuestas deportivas online, cumpliendo con sus premios los mejores tipos de jugadas combinadas">
    <meta name="keywords" content="parley, parlay, apuestas, deporte, deportes, futbol, beisbol, basket, apostar, ganar dinero, incrementa tus ingresos, apostar al parlay, apuestas deportivas, gana en dolares,logros, logros del dia, juegos, juegos del dia, calculadora de parley, calculadora de parlay, calcula tu parley, quiero vender parley, myapuesta, banca de parley, banca de parlay">
    <title>MyApuesta.com :: Tu sitio de apuestas de parley en la web.</title>
    <link type="text/css" rel="stylesheet" href="css/estilo.css">
    <link type="text/css" rel="stylesheet" href="css/pruebas.css">
    <link type="text/css" rel="stylesheet" href="css/owl.carousel.css">
    <link type="text/css" rel="stylesheet" href="css/owl.carousel.min.css">
    <link type="text/css" rel="stylesheet" href="css/owl.theme.default.min.css">
    <link type="text/css" rel="stylesheet" href="css/bootstrap-registro.css">
    <script type="application/ecmascript" src="js/jquery-1.12.4.js"></script>
    <script type="application/ecmascript" src="js/owl.carousel.min.js"></script>
	<script src="/js/jquery.leanModal.min.js"></script>
    <script type="application/ecmascript" src="js/funcion.js"></script>
	<!--<script src="https://www.google.com/recaptcha/api.js" async="" defer=""></script>-->
<style>
	#header-paises ul {list-style: none; width: 100%;}
	#header-paises ul li {display: inline-block;}
</style>
</head>
<body id="cuerpo">
    <header>
     <div id="header-nav" class="header-nav" style="display: block;">
            <div id="header-pais">
                <div id="header-mapa"></div>
                <a href="#" class="header-pais">VEN &#9660;</a>
				<div id="header-paises">
           			<ul>
						<li>ARG</li>
          				<li>COL</li>
          				<li>ECU</li>
          				<li>MEX</li>
						<li>PAN</li>
						<li>VEN</li>          				
           			</ul>
           		</div>
            </div>
            <div id="header-sesion">
                <a href="#" class="sesion-logo"></a>
                <a href="#" class="sesion-texto">iniciar sesión</a> 
            </div>
           	<div id="header-sesion-cuadro" class="header-sesion-cuadro">
				<div id="header-sesion-cuadro-margin">
					<div id="header-sesion-cuadro-usuario">
						  <h2>Clientes registrados</h2>
						  <form method="POST" onSubmit="return validaringreso();">
								<input type="text" id="usuario" name="usuario" placeholder="USUARIO" autocomplete="off">
								<input type="password" id="clave" name="clave" placeholder="CLAVE" autocomplete="off">
								<input class="boton-rojo carandache" type="submit" value="Entrar" id="Entrar">
						  </form>
					</div>
					<div id="header-sesion-cuadro-clave">
						<h2>¿OLVIDASTE TU CONTRASEÑA?</h2>
						<h4>Recupera tu codigo de validacion ingresando tu cuenta de correo electronico o tu Usuario.</h4>
						<form method="POST" onSubmit="return validarcodeval();">
							<input name="email" id="emailcodeval" placeholder="CORREO ELECTRÓNICO" value="" type="email" size="30">
							<input class="carandache boton-rojo" type="submit" id="codeval-btn" value="RECUPERAR CÓDIGO">
						</form>
					</div>
				</div>
           	</div>
        </div>
        <div id="header-nav-fija" class="header-nav-fija" style="display: none;">
			<ul class="header-nav-ul">
                <li id="header-nav-t" class="header-nav-li">
                    <a>tutoriales</a>
                </li>
                <li id="header-nav-n" class="header-nav-li">
                    <a>tipo de negocios</a>
                </li>
                <li id="header-nav-r" class="header-nav-li" onMouseEnter="BloqScroll('ocultar')" onMouseLeave="BloqScroll('mostrar')">
                    <a>registrarse</a>
                    <?php require("registrarse.php"); ?>
                </li>
                <li id="header-nav-d" class="header-nav-li">
                    <a>descargas</a>
                </li>
                <li id="header-nav-c" class="header-nav-li">
                    <a>contacto</a>
                </li>
			</ul>
        </div>
        <div id="header-banner" class="owl-carousel owl-theme owl-dots">
          <!--<div class="item"><img alt="" src="imagenes/1.jpg" width="999" height="520"></div>-->
          <div class="item"><img alt="" src="imagenes/2.jpg" width="100%" height="520"></div>
          <div class="item"><img alt="" src="imagenes/3.jpg" width="100%" height="520"></div>
          <!--<div class="item"><img alt="" src="imagenes/4.jpg" width="999" height="520"></div>-->
        </div>
        <div id="header-op">
            <ul class="header-op-ul">
                <li id="header-op-t" class="header-op-li">
                    <a>tutoriales</a>
                </li>
                <li id="header-op-n" class="header-op-li">
                    <a>tipo de negocios</a>
                </li>
                <li id="header-op-r" class="header-op-li" onMouseEnter="BloqScroll('ocultar')" onMouseLeave="BloqScroll('mostrar')">
                    <a>registrarse</a>
                    <?php require("registrarse.php"); ?>
                </li>
                <li id="header-op-d" class="header-op-li">
                    <a>descargas</a>
                    <div id="header-descargas" class="header-registrarse">
                    dfdfdf
                    </div>
                </li>
                <li id="header-op-c" class="header-op-li">
                    <a>contacto</a>
                </li>
            </ul>
        </div>
	</header>
    <main>
    	<div id="main-nosotros">
        	<h2>Nosotros</h2>
            <p class="textos">Somos un grupo de profesionales dedicados al mundo de las apuestas de Parlay, estamos ubicados en Venezuela y en la actualidad poseemos clientes todo el territorio nacional e internacional.<br><br>Nuestra mision es ofrecerle un servicio optimo y calidad, donde el cliente se sienta seguro a la hora de invertir su dinero. Nuestra vision es ser una de las mas importantes casas de apuestas OnLine de parlay a nivel nacional e internacional.<br><br>Nuestro compromiso es ofrecerles responsabilidad y seriedad en el momento del pago de sus apuestas.<br><br>Te invitamos a suscribirte a nuestra plataforma, donde podras disfrutar todas nuestras opciones de apuestas y estar actualizado con todos los logros del dia.<br><br>Contactanos a traves del siguiente formulario.</p>
        </div>
        <div id="main-parley">
        	<h2>El Parley</h2>
            <span class="textos">
            	<span style="text-align: justify">Es una selección de más de 2 equipos sin ningún orden en particular. Todas las selecciones deben de ganar. Entre más selecciones, mayor el monto a ganar. El monto a ganar se calcula haciendo uso de una fórmula matemática usando las cuotas/precios de cada una de las selecciones.</span><br><br>
                <span>Ejemplo 1:</span><br>
                <span style="font-weight: bold">Combinada de 3 equipos:</span><br>
                <ul>
                  <li>Zaragoza +600</li>
                  <li>Olympique Marsella +300</li>
                  <li>Inter de Milan -180</li>
                </ul>
                <span style="text-align: justify"><span style="font-weight: bold;">Para 3 selecciones</span>, el pago final de esta jugada de 100 es de 4.246. En caso de que haya un empate o se cancele alguna de las selecciones, la jugada pasa a ser una apuesta combinada 2 equipos (siguiente nivel inferior), excepto en una apuesta combinada de 2 selecciones en la que se pasa a una apuesta directa.</span><br><br>
                <span>Ejemplo 2:</span><br>
                <span style="font-weight: bold">Combinada de 2 equipos:</span>
                <ul>
                  <li>Portland Trail Blazers +4</li>
                  <li>San Antonio Spurs -10</li>
                </ul>
                <span style="text-align: justify"><span style="font-weight: bold">Para 2 selecciones</span>, el pago final de esta jugada de 100 es de 264. En caso de que haya un empate o se cancele alguna de las selecciones, la jugada pasa a ser una apuesta combinada de un nivel inferior, excepto en una apuestsa combinada de 2 selecciones en la que se pasa a una apuesta directa.</span>
            </span>
        </div>
        <div id="main-calculadora">
            <h2>Calculadora de Parley</h2>
            <div class="calc-large">
                <span class="icon-date"></span>
                <input placeholder="Monto de Jugada" id="monto_jugada" type="number" min="0" onkeyup="calcular_parley(event);">
            </div>
            <div style="clear:both"></div>
            <div id="rows">
                <table class="row-calc" cellpadding="0" cellspacing="0">
                    <tbody><tr>
                        <td>
                          <span class="icon-date"></span>
                            <input class="logro" value="" onkeyup="calcular_parley(event, this.value);" id="logro1" placeholder="1er Logro">
                        </td>
                    </tr>
                    <tr>
                        <td>
                          <span class="icon-date"></span>
                            <input class="logro" value="" onkeyup="calcular_parley(event);" id="logro2" placeholder="2do Logro">
                        </td>
                    </tr>
                    <tr>
                        <td>
                          <span class="icon-date"></span>
                            <input class="logro" value="" onkeyup="calcular_parley(event);" id="logro3" placeholder="3er Logro">
                        </td>
                    </tr>
                    <tr>
                        <td>
                          <span class="icon-date"></span>
                            <input class="logro" value="" onkeyup="calcular_parley(event);" id="logro4" placeholder="4to Logro">
                        </td>
                    </tr>
                </tbody></table>
                <table class="row-calc" cellpadding="0" cellspacing="0">
                    <tbody><tr>
                        <td>
                          <span class="icon-date"></span>
                            <input class="logro" value="" onkeyup="calcular_parley(event);" id="logro5" placeholder="5to Logro">
                        </td>
                    </tr>
                    <tr>
                        <td>
                          <span class="icon-date"></span>
                            <input class="logro" value="" onkeyup="calcular_parley(event);" id="logro6" placeholder="6to Logro">
                        </td>
                    </tr>
                    <tr>
                        <td>
                          <span class="icon-date"></span>
                            <input class="logro" value="" onkeyup="calcular_parley(event);" id="logro7" placeholder="7mo Logro">
                        </td>
                    </tr>
                    <tr>
                        <td>
                          <span class="icon-date"></span>
                            <input class="logro" value="" onkeyup="calcular_parley(event);" id="logro8" placeholder="8vo Logro">
                        </td>
                    </tr>
                </tbody></table>
            </div>
            <div class="calc-large">
                <span class="icon-date"></span>
                <input disabled="" id="monto_total_premio" size="30" placeholder="Monto del Premio: 0,00">
            </div>
        </div>
    </main>
    <footer>
    	<script type="application/ecmascript" src="js/funciones.js"></script>
    </footer>
</body>
</html>