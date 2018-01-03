'use strict';

var clubPadel = {
    facilities: [
        {
            lat: 40.453082, 
            lng: -3.688339,
            desc: `<div id="content">
                    <div id="siteNotice"></div>
                    <h3 id="firstHeading" class="firstHeading">Paseo Castellana</h3>
                    <div id="bodyContent">
                        <p>Nuestra instalación más céntrica de Madrid</p>
                        <img src="/assets/pista_castellana.jpg" width=200>
                    </div>
                    </div>`
        },
        {
            lat: 40.325743, 
            lng: -3.714940,
            desc: `<div id="content">
                    <div id="siteNotice"></div>
                    <h3 id="firstHeading" class="firstHeading">Getafe</h3>
                    <div id="bodyContent">
                        <p> Una de nuestras pistas exteriores para aprovechar el buen tiempo! </p>
                        <img src="/assets/pista_exterior.jpg" width=200>
                    </div>
                    </div>`
        },
        {
            lat: 40.437244, 
            lng: -3.599920,
            desc: `<div id="content">
                    <div id="siteNotice"></div>
                    <h3 id="firstHeading" class="firstHeading">Coslada</h3>
                    <div id="bodyContent">
                        <p> Pista de cesped natural y totalmente acristalada </p>
                        <img src="/assets/pista_coslada.jpg" width=200>
                    </div>
                    </div>`
        },
        {
            lat: 40.338914, 
            lng: -3.840511,
            desc: `<div id="content">
                    <div id="siteNotice"></div>
                    <h3 id="firstHeading" class="firstHeading">Alcorcon</h3>
                    <div id="bodyContent">
                        <p> Gran pista semicubierta, para que unas simples gotas no te paren! </p>
                        <img src="/assets/pista_semicubierta.jpg" width=200>
                    </div>
                    </div>`
        },
        {
            lat: 40.523160, 
            lng: -3.898739,
            desc: `<div id="content">
                    <div id="siteNotice"></div>
                    <h3 id="firstHeading" class="firstHeading">Las Rozas</h3>
                    <div id="bodyContent">
                        <p> Prueba </p>
                        <img src="/assets/pista_cubierta.jpg" width=200>
                    </div>
                    </div>`
        }
    ],    
    endPoint: 'http://localhost:8080/api.clubPadel'
};

clubPadel.goToRegister = function(){        
    $('#main').empty();    
    $('#main').append(`
    <form id="form" class="container">
        <fieldset>
            <legend>Registro de usuario</legend>
            <br>
            <div class="form-group">
                <label for="user">Usuario:</label>
                <input type="text" name="user" class="form-control" placeholder="Identificador de usuario" required>
            </div>
            <div class="form-group">
                <label for="email">Correo:</label>
                <input type="text" name="email" class="form-control" placeholder="Email" required>
            </div>            
            <div class="form-group">
                <label for="password">Clave:</label>
                <input type="password" name="password" class="form-control" placeholder="Clave" required>
            </div>
            <div class="form-group">
                <label for="pass">Repita la clave:</label>
                <input type="password" name="pass" class="form-control" placeholder="Repita la clave" required>
            </div>
            <div class="form-group">
                <label for="bday">Fech de nacimiento:</label>
                <input type="date" name="bday" class="form-control" placeholder="dd/mm/yyyy">
            </div>
            <div class="text-center">
                <br>                    
                <button type="submit" class="btn btn-primary center">Registrarse</button>
            </div>
        </fieldset>
    </form>
    `);    
};

clubPadel.goToLogin = function(){
    $('#main').empty();

    $('#main').append(`
    <form id="form-login" class="container">
        <fieldset>
            <legend>Acceso de usuario</legend>
            <br>
            <div class="form-group">
                <label for="user">Usuario:</label>
                <input type="text" name="user" class="form-control" placeholder="Identificador de usuario" required>
            </div>
            <div class="form-group">
                <label for="password">Clave:</label>
                <input type="password" name="password" class="form-control" placeholder="Contraseña" required>
            </div>                            
            <div class="text-center">                                  
                <button id="enviar" onclick="clubPadel.login(event)" type="submit" class="btn btn-primary center">Enviar</button>
            </div>                
        </fieldset>            
    </form>
    `);
};

clubPadel.goToServices = function(){

    $(this).parent().siblings().removeClass('active');    
    $(this).parent().addClass('active');    

};

clubPadel.goToHome = function(){

    $('#main').empty();

    var content = `    
        <header>
        <div id="divMsg" class="row justify-content-center">                
            <a id="msgText">Has iniciado sesion!</a>
        </div>            
            <div class="jumbotron">
                <div id="logo_text"> 
                    <h1 class="display-3">Pádel U.P.M.</h1>
                    <h3>El club universitario más dinámico del circuito</h3>
                </div>                
                <img id="logo" src="/assets/logo_upm.jpg" alt="">
            </div>            
        </header>
        <section>
            <div class="row">
                <div class="col-lg-4">
                    <h4>Clases</h4>
                    <p>
                        El conjunto de monitores más cualificados se encargará de darte la formación en cuanto a técnica
                        requerida en este deporte. Las clases prácticas te permitirán interiorizar los movimientos adecuados
                        como si fuesen naturales 
                    </p>
                    <p>
                        Las clases colectivas convierten las clases en un espacio dinámico en el que jugar se convierte en una
                        actividad placentera y divertida.
                    </p>
                    <img src="/assets/clases-padel.jpg" class="img-fluid rounded" alt="">
                </div>
                <div class="col-lg-4">
                    <h4>Entrenamientos personalizados</h4>
                    <p>Si te sientes un campeón, de verdad lo eres o simplemente quieres avanzar rapidamente en la técnica que 
                        rodea a este deporte te podemos configurar sesiones de entrenamiento a tu medidad con un entrenador personal 
                        que se encargará de:
                    </p>
                    <ul>
                        <li>Enseñarte la técnica adecuada para mejorar tus golpes</li>
                        <li>Enseñarte a combinar la potencia con la técnica</li>
                        <li>Mostrarte como mejorar el rendimiento en equipo</li>
                        <li>Explicarte como utilizar la presión de los campeonatos en tu beneficio</li>
                    </ul>
                </div>
                <div class="col-lg-4">
                    <h4>Campeonatos</h4>
                    <p>
                        El club organiza campeonatos periódicos en los que te puedes divertir al mismo tiempo que mejoras en el 
                        deporte. Tenemos campeonatos de un día, de fin de semana y ligas regulares. Puedes participar en los torneos
                        masculinos, femeninos y mixtos.
                    </p>
                    <img src="/assets/campeonato-padel.jpg" class="img-fluid rounded" alt="">
                </div>
            </div>
        </section>`;

    $('#main').append(content);

};

clubPadel.goToFacilities = function(){
    $(this).parent().siblings().removeClass('active');    
    $(this).parent().addClass('active');

    $('#main').empty();

    $('#main').append(`
    <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBYDpoow_kUqwFHWFfTPPPbiNuemzjFfrE&callback=clubPadel.initMap">
    </script>
    <section>
        <div class="row map">
            <div id="map" class="col-md-8"></div>                
            <div class="col-md-4">
                <div class="vertical-center">
                    <h5>Disponemos de:</h5>
                    <ul>
                        <li>4 pistas de cristal cubiertas</li>
                        <li>3 pistas de cristal semicubiertas</li>
                        <li>3 pistas de cemento exteriores</li>
                        <li>2 pistas de tenis</li>
                        <li>Vestuarios completos</li>
                        <li>Cafetería con terraza</li>
                    </ul>
                </div>                    
            </div>
        </div>
    </section>
    `);    
};

clubPadel.initMenu = function(){
    $('.nav-link').each(function(){        
        switch(this.text.trim()){
            case 'Registro':
                $(this).on('click', clubPadel.goToRegister);
                break;
            case 'Login':
                $(this).on('click', clubPadel.goToLogin);
                break;
            case 'Servicios':                
                $(this).on('click', clubPadel.goToServices);
                break;
            case 'Instalaciones':
                $(this).on('click', clubPadel.goToFacilities);
                break;
            case 'Reservar':
                $(this).on('click', clubPadel.goToReservar);
                break;
            default:                
                break;
        }
    });    
};

clubPadel.initMap = function(){
    var bernabeu = {lat: 40.453082, lng: -3.688339};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: bernabeu
    });

    for(let facility of clubPadel.facilities){
        let latLong = new google.maps.LatLng(facility.lat,facility.lng);
        let marker = new google.maps.Marker({
            position: latLong,
            map:map
        });
        let infoWindow = new google.maps.InfoWindow({
            content: facility.desc,
            maxWidth: 250
        });
        marker.addListener('click', function(){
            infoWindow.open(map,marker);
        })
    }
};

clubPadel.login = function(event){
    event.preventDefault();
    var registerLoginItems = $('#reglog').children();            
    var loginText = $(registerLoginItems[1]).find('a');

    if (clubPadel.logged){               
        sessionStorage.removeItem('token');
        $(loginText).html('<i class="fa fa-sign-in fa-2x" aria-hidden="true"></i>&nbsp;Login');
        $(loginText).unbind('click', clubPadel.login);
        $(loginText).on('click', clubPadel.goToLogin);
        clubPadel.logged = false;
        clubPadel.goToHome();
        $('#msgText').text('Has cerrado la sesión...');
        $('#msgText').css('background-color','#da6161');
        $('#msgText').fadeIn(400);
        setTimeout(function(){
            $('#msgText').fadeOut(400);
        }, 2000);
        return;
    }

    var user = $('input[name=user]').val();
    var pass = $('input[name=password]').val();        
    $.post(clubPadel.endPoint+'/login',{name:user, password:pass})
    .done(function(data){
        if (data.message === 'OK') {
            sessionStorage.setItem('token',data.token);                        
            $(loginText).html('<i class="fa fa-sign-out fa-2x" aria-hidden="true"></i>&nbsp;Logout');
            $(loginText).on('click', clubPadel.login);
            $('input[name=user]').val('');
            $('input[name=password]').val('');
            clubPadel.logged = true;
            clubPadel.goToHome(); 
            $('#msgText').text('Has iniciado sesión!');
            $('#msgText').css('background-color','#52cc52');
            $('#msgText').fadeIn(400);
            setTimeout(function(){
                $('#msgText').fadeOut(400);
            }, 2000);
        }else{

        }
    })
    .fail(function(error){
        console.error(error);                
    });
};

$(document).ready(function(){
    clubPadel.goToHome();
    clubPadel.initMenu();
});