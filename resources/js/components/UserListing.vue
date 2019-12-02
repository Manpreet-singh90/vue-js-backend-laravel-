<template>
<div class="container">
  <h2>Bordered Table</h2>
  <p>The .table-bordered class adds borders to a table:</p> 
  <p >
    <b></b>
    </p>           
    
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Email</th>
        <th>Password</th> 
        <th>Action</th>     
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user, index) in users" >
        <td>{{user.email}}</td>
        <td>{{user.password}}</td>
        <td> <router-link  :to="{ name: 'editUser', params: { id : user.id } }"> 

        <button type="button" class="btn btn-primary editBtn">Edit</button></router-link>
        </td>
      </tr>
    </tbody>
  </table>
</div>

</template>
<script>
export default {
  data: function () {
        return {
          users : [],
          userId : 4
        }
    },
  mounted() {
    let app = this;
    axios.get('/userlist')
        .then(function (response) {
        app.users = response.data;
    })
    .catch(function (error) {
        console.log(error.message);
    });

  }
}
</script>
<style scoped>
.editBtn {
  width: 24%;
}
</style>