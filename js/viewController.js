var viewController = (function(){

    return {
        goToHome: function(){
            $(this).parent().siblings().removeClass('active');    
            $(this).parent().addClass('active');
            
            $('#main').empty();

            var content = viewTemplates.home;

            $('#main').append(content);
        },
        goToServices: function(){
            $(this).parent().siblings().removeClass('active');    
            $(this).parent().addClass('active');
        },
        goToFacilities: function(){
            $(this).parent().siblings().removeClass('active');    
            $(this).parent().addClass('active');

            $('#main').empty();

            var content = viewTemplates.facilities;

            $('#main').append(content);
        },
        goToRegister: function(){
            $('#main').empty();

            var content = viewTemplates.register;

            $('#main').append(content);
        },
        goToLogin: function(){
            $('#main').empty();

            var content = viewTemplates.login;

            $('#main').append(content);

            clubPadel.initDragAndDrop();
        }
    };
}());