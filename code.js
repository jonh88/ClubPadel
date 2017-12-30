'use strict';

var clubPadel = {};

clubPadel.goToRegistro = function(){
    $('#main').empty();
    var form = document.createElement('form');
    var divUser = document.createElement('div');
    divUser.className = 'form-group';
    var labelUser = document.createElement('label');
    labelUser.htmlFor = 'user';
    var userInput = document.createElement('input');
    userInput.type = 'text';
    $('#main').append(document.createElement('form'));
};

clubPadel.initMenu = function(){
    $('.nav-link').each(function(){        
        switch(this.text.trim()){
            case 'Registro':
                //$(this).on('click', clubPadel.goToRegistro);
                break;
            case 'Login':
                $(this).on('click', clubPadel.goToLogin);
                break;
            case 'Servicios':
                $(this).on('click', clubPadel.goToServicios);
                break;
            case 'Instalaciones':
                $(this).on('click', clubPadel.goToInstalaciones);
                break;
            case 'Reservar':
                $(this).on('click', clubPadel.goToReservar);
                break;
            default:                
                break;
        }
    });    
};

$(document).ready(clubPadel.initMenu);