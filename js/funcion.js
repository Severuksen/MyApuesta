function BloqScroll(s)
{
	switch(s){
		case 0://MOSTRAR
			$("#cuerpo").css("overflow","auto");
			$("#header-registrarse").css("display","none");
			break;
		case 1://OCULTAR
			$("#cuerpo").css("overflow","hidden");
			$("#header-registrarse").css("display","block");
			break;
		case 2://MOSTRAR
			$("#cuerpo").css("overflow","hidden");
			$("#header-registrarse").removeClass("header-registrarse");
			$("#header-registrarse").addClass("header-registrarse-nav");
			$("#header-registrarse").css("display","block");
			$("#header-registrarse").css("color","black");
			$("#header-registrarse").css("text-shadow","none");
			break;
		case 3: //OCULTAR
			$("#cuerpo").css("overflow","auto");
			$("#header-registrarse").removeClass("header-registrarse-nav");
			$("#header-registrarse").addClass("header-registrarse");
			$("#header-registrarse").css("display","none");
			break;
	}
}

window.onscroll = function() {BarraNav()};
function BarraNav() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $("#header-nav").hide();
		$("#header-nav-fija").show();
    } else {
        $("#header-nav-fija").hide();
		$("#header-nav").show();
    }
}

$(function(){"use strict"; $("#fecha_nac").mask("99/99/9999"); if ($('#tipousuario').val() == 'GRUPO' || $('#tipousuario').val() == 'ONLIN') {$('#div_nombre_taquilla').hide();}});
function mostrar_leyenda_documento_identidad(){$("#helpBlock_documento_identidad").show();}
function ocultar_leyenda_documento_identidad(){$("#helpBlock_documento_identidad").hide();}
function mostrar_leyenda_correo(){$("#helpBlock_correo").show();}
function ocultar_leyenda_correo(){$("#helpBlock_correo").hide();}
function validarNum(e)
{
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    patron = /\d/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}
$(document).ready(function() {
    $(".demo-modal").leanModal({ top: 30, overlay: 0.4, closeButton: ".close" });
    $("#code-modal").leanModal({ top: 30, overlay: 0.4, closeButton: ".close" });
    $("#forgot-modal").leanModal({ top: 30, overlay: 0.4, closeButton: ".close" });
    $(".small").leanModal({ top: 30, overlay: 0.4, closeButton: ".close" });
    if ($(window).width() <= 1153 && $(window).width() >= 618) { $('#events img').attr('src', '/img/ticket-virtual/banners-21000.jpg');
        $('#events').css('height', '400px'); } else { $('#events img').attr('src', '/img/ticket-virtual/jugar.png'); }
    if ($(window).width() <= 910) { $("header #nav ul").append('<li class="liplus" id="1">Prueba nuestra aplicacion (Demo)</li>');
        $("header #nav ul").append('<li class="liplus" id="2"><a href="login.php" title="Login">Ingresa al Sistema</a></li>');
        $("header #nav ul").append('<li class="liplus" id="3"><a href="index.php#nuevosclientes">Â¿Eres cliente nuevo?</a></li>');
        $("header #nav ul").append('<li class="liplus"  id="4"><a href="login.php" title="Login">Notifica tu pago</a></li>');
        $("header #nav ul").append('<li class="liplus" id="5"><a href="descargas.php">Descargas</a></li>');
        $("header #nav ul").append('<li class="liplus"  id="6"><a href="contacto.php">Contactanos</a></li>');
        $("#validateli").val("1");
        $(".default").css("display", "none");
        $(".liplus").click(function() { desplegable();
            if (this.id == 1) { $(".demo-modal").click(); }
            if (this.id == 2) { $(".users-modal").click(); }
            if (this.id == 4) { $(".users-modal").click(); }
            console.log(this.id); }); } else { $("header #nav ul .liplus").remove();
        $("#validateli").val("0");
        $(".default").css("display", "block");
        $("header #nav").show(); }; });
		
$(window).resize(function() {
    if (this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() { $(this).trigger('resizeEnd'); }, 1); });
	
$(window).bind('resizeEnd', function() {
    var RW = $(this).width();
    var RH = $(this).height();
    $("#width").text(RW);
    $("#height").text(RH);
    var validateli = $("#validateli").val();
    if (RW <= 1153 && RW >= 618) { $('#events img').attr('src', '/img/ticket-virtual/banners-21000.jpg');
        $('#events').css('height', '400px'); } else { $('#events img').attr('src', '/img/ticket-virtual/jugar.png'); }
    if (RW <= 893) {
        if (validateli == 0) { $("header #nav ul").append('<li class="liplus" id="1">Prueba nuestra aplicacion (Demo)</li>');
            $("header #nav ul").append('<li class="liplus" id="2"><a href="login.php" title="Login">Ingresa al Sistema</a></li>');
            $("header #nav ul").append('<li class="liplus" id="3"><a href="index.php#nuevosclientes">Â¿Eres cliente nuevo?</a></li>');
            $("header #nav ul").append('<li class="liplus"  id="4"><a href="login.php" title="Login">Notifica tu pago</a></li>');
            $("header #nav ul").append('<li class="liplus"  id="5"><a href="descargas.php">Descargas</a></li>');
            $("header #nav ul").append('<li class="liplus"  id="6"><a href="contacto.php">Contactanos</a></li>');
            $("#validateli").val("1");
            $(".default").css("display", "none");
            $(".liplus").click(function() { desplegable();
                if (this.id == 1) { $(".demo-modal").click(); }
                if (this.id == 2) { $(".users-modal").click(); }
                if (this.id == 4) { $(".users-modal").click(); }
                console.log(this.class); }); } } else { $("header #nav ul .liplus").remove();
        $("#validateli").val("0");
        $(".default").css("display", "block");
        $("header #nav").show(); } });

function desplegable(){ $("#nav").toggle();}
function forgot(){$("#forgot-modal").click();}
function validaringresodemo() { $.ajax({ url: '/class/MainAjax.php', data: { opcion: "003", valuno: "demo", valdos: "demo" }, type: 'POST', dataType: 'json', beforeSend: function() { $("#datareturn").html('<img src="/svg/preload20x20.svg" alt="consultado...">'); }, success: function(result) 
{
	if (result.Respuesta == 1) {
		if (result.TipoUsuario == "VENDE") { window.location.href = "/sistema/cliente_new/"; } else if (result.TipoUsuario == "DIGIT") { window.location.href = "/admin/"; } else { window.location.href = "/parlay/"; } } } });
    return false; 
}

function validaringreso() {
    var user = $("#usuario").val();
    var password = $("#clave").val();
    if (user == "" || password == "") {
        $(".datareturn").text("Por favor, llenar todos los campos");
        return false
    }
    $.ajax({
        url: '/class/MainAjax.php',
        data: { opcion: "001", valuno: user, valdos: password },
        type: 'POST',
        dataType: 'json',
        beforeSend: function() {            
            if($("#ingresar-btn").is(":visible")){
                $("<img src='/img/sistema/preload-ticket.svg' alt='Procesando...' id='img_form_login'/>").insertBefore(".forgot");
                $("#ingresar-btn").hide();
            }            
        },
        success: function(result) {
            if (result.Respuesta != 1) {
                if (result.Respuesta == 2) {
                    $(".datareturn").text("La contraseÃ±a que has introducido no es la correcta.");
                    $("#ingresar-btn").show();
                    $("#img_form_login").hide();
                }
                if (result.Respuesta == 3) {
                    $(".datareturn").text("Usuario inactivo, por favor contacte al departamento de sistemas.");
                    $("#ingresar-btn").show();
                    $("#img_form_login").hide();
                }
                if (result.Respuesta == 4) {
                    $(".datareturn").text("El usuario que has introducido no es correcto.");
                    $("#ingresar-btn").show();
                    $("#img_form_login").hide();
                }
                return false;
            } else {
                if (result.TipoUsuario == "VENDE" || result.TipoUsuario == "ONLIN" || result.TipoUsuario == "PREPA") {
                    //if(result.IdUser==795 || result.IdUser==3717 || result.IdUser==6844 || result.IdUser==20578 || result.IdUser==149 || result.IdUser==66 || result.IdUser==47 || result.IdUser==1956 || result.IdUser==523 ||  result.IdUser==20965 || result.IdUser==9347 ||  result.IdUser==18804 ||  result.IdUser==19493 ||  result.IdUser==19977 ||  result.IdUser==19979 || result.IdUser==14338 || result.IdUser==14432 || result.IdUser==14445 || result.IdUser==14441 || result.IdUser==14427 || result.IdUser==12012 || result.IdUser==14448 || result.IdUser==14438 || result.IdUser==14429 || result.IdUser==14449 || result.IdUser==14447 || result.IdUser==20357 || result.IdUser==14439 || result.IdUser==14444 || result.IdUser==14446 || result.IdUser==6545 || result.IdUser==14658 || result.IdUser==14442 || result.IdUser==14437 || result.IdUser==21043 || result.IdUser==14443 || result.IdUser==9 || result.IdUser==14440 || result.IdUser==998 || result.IdUser==21103 || result.IdUser==17014 || result.IdUser==21425 || result.IdUser==20431 || result.IdUser==20396 || result.IdUser==8986 || result.IdUser==22798 || result.IdUser==22799){
                    if(result.TipoUsuario == "ONLIN" || result.TipoUsuario == "PREPA"){
                        window.location.href = "/sistema/cliente_new/";
                    }else{
                        window.location.href = "/sistema/cliente/";                        
                    }
                } else if (result.TipoUsuario == "DIGIT") {
                    window.location.href = "/admin/";
                } else {
                    window.location.href = "/parlay/";
                }
            }
        },
        error:function(jqXHR, textStatus, errorThrown){
            if (jqXHR.status === 0) {
                validaringreso();
                $(".datareturn").text("Has tenido problema con la conexiÃ³n. Tenga paciencia, reconectando nuevamente.");
            } else if (jqXHR.status == 404) {
                alertify.alert('Pagina solicitada no encontrada [404]');
                $("#ingresar-btn").show();
                $("#img_form_login").hide();
            } else if (jqXHR.status == 500) {
                alertify.alert('Error interno del servidor vuelva a intentarlo mas tarde [500].');
                $("#ingresar-btn").show();
                $("#img_form_login").hide();
            } else if (textStatus === 'parsererror') {
                //Error al analizar JSON solicitado
                alertify.alert('Error al analizar lo solicitado.');
                $("#ingresar-btn").show();
                $("#img_form_login").hide();
            } else if (textStatus === 'timeout') {
                //alertify.alert('Error de tiempo de espera.');
                validaringreso();
                $(".datareturn").text("Has tenido problema con la conexiÃ³n. Tenga paciencia, reconectando nuevamente.");
            } else if (textStatus === 'abort') {
                //PeticiÃ³n de AJAX cancelada
                alertify.alert('PeticiÃ³n cancelada.');
                $("#ingresar-btn").show();
                $("#img_form_login").hide();
            } else {
                alertify.alert('Error no detectado: ' + jqXHR.responseText);
                $("#ingresar-btn").show();
                $("#img_form_login").hide();
            }
        }
    });
    return false;
}

function validarforgot() {
    var telefono = $("#telefono").val();
    var email = $('#emailforgot').val();
    var telefonoU = $("#telefono").intlTelInput("getNumber");
    if(telefonoU==""){
        alert("NÃºmero de telefono incorrecto.");
        return false;
    }
    if (validateEmail(email) && telefono.length <= 14) { $.ajax({ url: '/class/MainAjax.php', data: { opcion: "002", valuno: email,telefono:telefonoU }, type: 'POST', beforeSend: function() { $("#returnforgot").html('<img src="/svg/preload20x20.svg" alt="consultado...">'); }, success: function(result) { $("#returnforgot").html(result); }, error: function(request, error, message) { alert(email + ' ' + message); } }); } else { $("#returnforgot").html('<span class="error">Email Ã³ nÃºmero de telefono incorrecto.</span>'); }
    return false; }

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email); }

function calcular_parley(event,value){var factor_acumulado=1;var monto_total_premio=0;var monto_jugada=$("#monto_jugada").val();if(monto_jugada==""){monto_jugada=0;}if(event.keyCode!=109&&event.keyCode!=107&&value!="-"){$('.logro').each(function(i,obj){var logros=this.value;if(logros==""){logros=0;}if(logros!=0){if(logros>0){factor=(parseFloat(logros)/parseInt(100))+parseInt(1);}else{factor=(parseInt(100)/(parseFloat(logros)*parseFloat(-1)))+parseInt(1);}factor_acumulado=parseFloat(factor_acumulado)*parseFloat(factor);}});if(factor_acumulado==1){monto_total_premio=0}else{monto_total_premio=parseFloat(monto_jugada)*parseFloat(factor_acumulado);}$("#monto_total_premio").val("Monto del Premio: "+monto_total_premio.toFixed(2));}}function cargar_juegos_pagina(){var IdDiscSel=$('#iddisciplina').val();if(IdDiscSel>0){$.ajax({url:'/class/MainAjax.php',data:{opcion:"005",valuno:IdDiscSel},type:'POST',beforeSend:function(){$('#div_lista_juegos').html('<div id="preloadevents"><div><img src="/img/preload-event.gif" alt="carga de juegos"></div><div><p>Cargando juegos, por favor espere...</p></div></div>');},success:function(result){$('#div_lista_juegos').html(result);},error:function(request,error,message){alert(message);}});}}function DetailsGame(id){$.ajax({url:'/class/MainAjax.php',data:{opcion:"006",valuno:id},type:'POST',beforeSend:function(){$("#content-gamedetails").css('background-image','url("/img/preload-event.gif")');$("#content-gamedetails").css('background-position','center center');$("#content-gamedetails").css('background-repeat','no-repeat');},success:function(result){if(result!=""){$("#content-gamedetails").css('display','block');}$("#content-gamedetails").css('background-image','');},error:function(request,error,message){alert(message);}});}