
<template>

   <div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content -->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Modal Header</h4>
                <h1> child slot</h1>
                    <slot name="text"></slot>
            </div>
            <div class="modal-body">
                <slot name="description"></slot>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
         </div>
     </div>
    </div>
</template>



<script>
    export default {
      
    }
</script>