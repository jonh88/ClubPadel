var clubPadel = {};

clubPadel = (function(){

    var facilities = [
        {
            lat: 40.453082, 
            lng: -3.688339,
            desc: `<div id="content">
                    <div id="siteNotice"></div>
                    <h3 id="firstHeading" class="firstHeading">Paseo Castellana</h3>
                    <div id="bodyContent">
                        <p>Nuestra instalación más céntrica de Madrid</p>
                        <img src="/assets/imagenes/pista_castellana.jpg" width=200>
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
                        <img src="/assets/imagenes/pista_exterior.jpg" width=200>
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
                        <img src="/assets/imagenes/pista_coslada.jpg" width=200>
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
                        <img src="/assets/imagenes/pista_semicubierta.jpg" width=200>
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
                        <img src="/assets/imagenes/pista_cubierta.jpg" width=200>
                    </div>
                    </div>`
        }
    ];

    var endPoint = 'http://localhost:8080/api.clubPadel';

    function initMenu() {
        $('.nav-link').each(function(){        
            switch(this.text.trim()){
                case 'Inicio':
                    $(this).on('click', viewController.goToHome);
                    break;
                case 'Registro':
                    $(this).on('click', viewController.goToRegister);
                    break;
                case 'Login':
                    $(this).on('click', viewController.goToLogin);
                    break;
                case 'Servicios':                
                    $(this).on('click', viewController.goToServices);
                    break;
                case 'Instalaciones':
                    $(this).on('click', viewController.goToFacilities);
                    break;
                case 'Reservar':
                    $(this).on('click', viewController.goToReservar);
                    break;
                default:                
                    break;
            }
        });
    }

    function handleDropEvent(event, ui){
        clubPadel.allowLogin = true;
        $('#divDroppable').text('');
    }

    function showMessage(msg, color){
        $('#msgText').text(msg);
        $('#msgText').css('display', 'block');
        $('#msgText').css('background-color', color);
        $('#msgText').fadeIn(400);
        setTimeout(function(){
            $('#msgText').fadeOut(400);
        }, 2000);
    }

    return {      
        init: function(){
            viewController.goToHome();
            initMenu();
        },
        initMap: function(){
            var bernabeu = {lat: 40.453082, lng: -3.688339};
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: bernabeu
            });
                         
            for(let facility of facilities){
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
                });
            }
        },
        login: function(){
            event.preventDefault();
    
            if (!clubPadel.allowLogin){
                showMessage('Asegura que no eres un robot!','#f4b042');
                return;
            }
            
            var user = $('input[name=user]').val();
            var pass = $('input[name=password]').val();        
            $.post(endPoint+'/login',
            {
                name:user, 
                password:pass
            })
            .done(function(data, status, response){        
                
                var token = response.getResponseHeader('authorization').split(' ')[1];
                sessionStorage.setItem('token',token);
                var registerLoginItems = $('#reglog').children();            
                var loginBtn = $(registerLoginItems[1]).find('a');                      
                $(loginBtn).html('<i class="fa fa-sign-out fa-2x" aria-hidden="true"></i>&nbsp;Logout');
                $(loginBtn).on('click', clubPadel.logout);        
                viewController.goToHome(); 
                showMessage('Has iniciado sesión!', '#52cc52');

            })
            .fail(function(data){
                showMessage(data.responseJSON.message, '#da6161');                
            })
            .always(function(){
                $('input[name=user]').val('');
                $('input[name=password]').val('');
            });
        },
        logout: function(){
            var registerLoginItems = $('#reglog').children();            
            var loginBtn = $(registerLoginItems[1]).find('a');
                        
            sessionStorage.removeItem('token');
            $(loginBtn).html('<i class="fa fa-sign-in fa-2x" aria-hidden="true"></i>&nbsp;Login');
            $(loginBtn).unbind('click', clubPadel.logout);
            $(loginBtn).on('click', viewController.goToLogin);    
            viewController.goToHome();
            showMessage('Has cerrado la sesión...', '#da6161');
        },
        initDragAndDrop: function() {
            $('#imgDraggable').draggable({
                containment: '#ddZone',
        
            });
            $('#divDroppable').droppable({
                drop: handleDropEvent
            });
        }    
    };

}());