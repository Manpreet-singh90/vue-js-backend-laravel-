<template>
    <div>

<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
    </ol>
   
    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
</div>
  
<div class="container text-center ">    
  <h3>{{name}}</h3><br>

<!-- display array object value -->
  <div class="row">
    <div class="col-sm-4 chnageColor" v-for="displayRecord in sendNinjas"> 
      <h2>{{displayRecord.name}}</h2>
      <p>{{displayRecord.city}}</p>
    </div>


    <div class="col-sm-4">
      <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">
      <p>Current Project</p>
    </div>

    <div class="col-sm-4"> 
      <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">
      <p>Project 2</p>    
    </div>
   
  </div>
</div><br>

<footer class="container-fluid text-center">
  <p>Footer Text</p>
</footer>        
    </div>
</template>


<script>
export default {
    props: ['name','sendNinjas']
}
</script>

