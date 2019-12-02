
<template>
<div>
    {{name}}
    <p>Child 2 description</p>
<h5 class="w3-center w3-padding-64"><span class="w3-tag w3-wide">ABOUT THE CAFE</span></h5>
    <p>The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    <p>In addition to our full espresso and brew bar menu, 
        we serve fresh made-to-order breakfast and lunch sandwiches, 
        as well as a selection of sides and salads and other good stuff.
        </p>

</div>
</template>
 
 

<script>
    export default {
        props: ['name']
      
    }
</script>