<template>
<div>
     <header>
         <nav class="navbar navbar-expand-lg navbar-light ">
              <!--<a  class="navbar-brand" href="#">Tu piñata ideal</a>-->
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
            </button>
             <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul  class="nav-center navbar-nav mr-auto">
                    <a class="navbar-brand" style="position:absolute; margin-left:-150px; margin-top:-15px;" href="#"><img  width="80" src="../../assets/logo.png"></a>
                  <li class="nav-item ">
                       <router-link to="/"><a class="nav-link" href="#">Inicio </a></router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="HelloWorld"><a class="nav-link">Piñatas</a></router-link> 
                  </li>
                  <li class="nav-item">
                     <a class="nav-link " href="#">Nosotros</a>
                  </li>
                 <li class="nav-item">
                   <a class="nav-link " href="#">Contacto</a>
                </li>
          </ul>
        </div>
      </nav>
   </header>
</div>    
</template>
