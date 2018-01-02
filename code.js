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
    ]
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
                <input type="text" name="password" class="form-control" placeholder="Contraseña" required>
            </div>                            
            <div class="text-center">                                  
                <button id="enviar" type="submit" class="btn btn-primary center">Enviar</button>
            </div>                
        </fieldset>            
    </form>
    `);
};

clubPadel.goToServices = function(){

    $(this).parent().siblings().removeClass('active');    
    $(this).parent().addClass('active');    

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

$(document).ready(clubPadel.initMenu);