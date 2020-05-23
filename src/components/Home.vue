<template>
<div>
  <div class="content">
     <div>
       <img style="width:100%" src="../assets/banner.jpeg">
      
     </div>
     <div class="container sinpadding col-12">
          <div class="row">
            <div class="col-md-6">
                 <img class="zoom" style="width:100%; height:auto" src="../assets/globos.jpg">
             </div>
             <div class="col-md-6" style="background:rgba(238,130,238,0.75)">
                  <!--<img class="zoom" style="width:100%; height:auto" src="../assets/globos.jpg">-->
              <h2 class="text-center obra">Manos a la obra</h2>
               <img style="width:60%;" src="../assets/breaking-a-star-pinata-clipart-2.png" > 
             </div>     
          </div>   
     </div>
       <div class="" style="background:white">
        <div class="container sinpadding col-12" > 
        
          <div class="row">
            <div class="col-md-6">
             <img class="zoom" style="width:100%; height:auto" src="../assets/pinata.jpg">
          
          </div>
           <div  class="col-md-6">
              <div class="container">
               <!--<div class="row">
              <div class="col-md-12">
                <h2 class="text-center title" style="margin-top:10px;">Destacado</h2>
                <hr>
               </div>   
            </div>-->
            <div class="row">
              
            <div class="col-md-12"  >
                   <img class="img-fluid"    :src="'asset/img/productos/unicornio2.jpeg'">
             </div>
             </div>
             </div>
          </div>
         
              
          </div>    
         </div>
     </div>  
     <div class="container  col-12" style="background:white; " >
      <div class="row">
         <div class="col-md-12">
              <h2 class="text-center title" style="margin-top:10px;">Piñatas</h2>
              <hr>
           </div>
      </div>
      
       <div class="row">
            
        <div id="carouselExampleControls" class="carousel slide carrucel-destock" data-ride="carousel">
            <div class="carousel-inner">
               <div class="carousel-item active">
                   <div class="row">
                       <div class="col-md-3"  v-for="(productos, index) in producto.slice(0,4)"   :key="index">
                          <img  class="img-fluid" :src="'asset/img/productos/'+ productos.img" alt="First slide">
                        </div>  
                   </div>
              </div>
               <div class="carousel-item">
                    <div class="row">
                       <div class="col-md-3" v-for="(productos, index) in producto.slice(5,9)"   :key="index" >
                          <img class="img-fluid"   :src="'asset/img/productos/'+ productos.img" alt="First slide">
                        </div>  
                   </div>
               </div>
            
           </div>
           <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
           </a>
           <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
           </a>
        </div>
      </div>
    </div>
      <div class="carousel-mobil">
      <carousel :autoplay="true" :nav="false" :responsive="{0:{items:1,nav:false},600:{items:3,nav:true}}"  >

           <img   v-for="(productos, index) in producto"   :key="index" :src="'asset/img/productos/'+ productos.img">

        

    </carousel>
    </div>
    <div class="container sinpadding col-12" style="background:white; ">
          <div class="row" style="margin-bottom:20px;">
            <div class="container">
              <div class="row" >
              <div class="col-md-12">
                  <h2 class="text-center title"  style="margin-top:10px;">Contactanos</h2>
                   <hr>
                </div>
                </div> 
                 <div class="row">
                 <div class="col-md-6">
                    <form>
                       <div class="form-group">
			                       <input type="text" name="nombre" id="nombre" class="form-control" placeholder="Nombre *">
			                 </div>
                        <div class="form-group">
			                    	<input type="email"  name="email" id="email" class="form-control" placeholder="Correo electronico *" >
			                 </div>
                        <div class="form-group">
			                       <input type="text" name="telefono" id="telefono"  class="form-control" placeholder="Teléfono de contacto *">
                        </div>
                        <div class="form-group">
			                        <textarea class="form-control" name="mensaje" id="mensaje" rows="5"  placeholder="Mensaje y/o comentario"></textarea>
                        </div>
                        <button type="button" id="Email" class="btn btn-danger btn-block">Enviar</button>
					              <div class="d-flex justify-content-center">
                           <div class="result"></div>
                        </div>
                    </form> 
                </div>
                 <div class="col-md-6  col-md-offset-5">
				          <div class="container-fluid">
                  <div class="box-dotted-line ajustar">
					          <p class="paragraph-address text-center"><i class="icon-location2 icon-direccion"></i>Lorem ipsum </p>
                    <p class="paragraph-address text-center"><i class="icon-phone icon-direccion"></i> (+57) 3015178539</p>
				            <p class="paragraph-address text-center"><i class="icon-mail4 icon-direccion"></i> Loremipsums@gmail.com</p>
			       	    </div>
                  </div>
                   <div class="container">
                  <div class="row">
                  <div class="col-md-4">
                  
                  </div>
                  <div class="col-md-4">
                    <img class="img-fluid" src="../assets/logo.png">
                  </div>
                  </div>
                 </div>
			         </div>   
                </div>   
               </div> 
          </div> 
          <div class="row">
           <div class="col-md-12" style="margin:0; padding:0; height:100%; width:100%">
             
           </div>   
         </div> 
     </div>    
  </div>

</div> 
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
  
  name: 'Home',
  components: { carousel },
    data: () => ({
    // showVersionWeb: false,
    producto: [{'img':'corona1.jpeg'},{'img':'corona2.jpeg'},{'img':'corona3.jpeg'},{'img':'corona4.jpeg'},
               {'img':'spiderman2.jpeg'},{'img':'spiderman3.jpeg'},  {'img':'spiderman4.jpeg'}, 
                {'img':'feliz1.jpeg'},{'img': 'unicornio2.jpeg'} ],
   
   
  }),
}
</script>

<style>

#carouselExampleControls{
  display:block
}
.carousel-mobil{
  display:none;
}

@media only screen and (max-width: 768px) {
 #carouselExampleControls{
  display:none;
}
.carousel-mobil{
  display:block;
}
}
.content-1{
     height:100vh;
}
.carousel-item{

    transition: transform 9s ease-in-out;
    transition: transform 9s ease-in-out,
    -webkit-transform 9s ease-in-out;
/*-webkit-transition: 0.6s ease-in-out left;
 -moz-transition: 0.6s ease-in-out left;
 -o-transition: 0.6s ease-in-out left;
 transition: 0.6s ease-in-out left;*/
}
.obra{
  color:white;
  margin-top:20px;
  font-weight:bold
}
.title{
   font-weight:bold
}

</style>

