var viewTemplates = {};

viewTemplates.home = `
    <header>                   
    <div class="jumbotron">
        <div id="logo_text"> 
            <h1 class="display-3">Pádel U.P.M.</h1>
            <h3>El club universitario más dinámico del circuito</h3>
        </div>                
        <img id="logo" src="/assets/imagenes/logo_upm.jpg" alt="">
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
            <img src="/assets/imagenes/clases-padel.jpg" class="img-fluid rounded" alt="">
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
            <img src="/assets/imagenes/campeonato-padel.jpg" class="img-fluid rounded" alt="">
        </div>
    </div>
    </section>`;

viewTemplates.services = ``;

viewTemplates.facilities = `
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
    </section>`;

viewTemplates.login = `
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
    <div id="ddZone" class="container">
    <h5>Mueve la imagen a la derecha para asegurar que no eres un robot!</h5>
    <div class="row">
        <div class="col-md-6 text-center">
            <img id="imgDraggable" src="./assets/imagenes/raqueta.jpg" width="50">
        </div>
        <div id="divDroppable" class="col-md-6 text-center">
            Arrastra aquí          
        </div>
    </div>
    </div>`;

viewTemplates.register = `
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
    </form>`;