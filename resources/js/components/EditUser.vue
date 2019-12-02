<template>
    <div id="main">
        <form>
            <div class="container"  method="post">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr>

                <label for="email"><b>Email *</b></label>
                <input type="text" placeholder="Enter Email" name="email" v-model="formData.email" >

                <label for="psw"><b>Password *</b></label>
                <input type="password" placeholder="Enter Password" name="psw"  v-model="formData.password">
                <!-- <input type="text" placeholder="Enter Password" name="userId"  v-model="formData.id"> -->


                <label for="psw-repeat"><b>Repeat Password *</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" >
                <hr>

                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                <button type="submit" class="registerbtn" @click.prevent="registerForm()">Register</button>
            </div>

            <div class="container signin">
                <p>Already have an account? <a href="#">Sign in</a>.</p>
            </div>
        </form>
    </div>
</template>
<<script>
export default {
    data() {
        return {
            formData : {
                email : "",
                password : "",
                id : ""
            }
        }
    },
     methods : {
        registerForm () {
            let route = this;
            axios.post('/register', this.formData)
                .then(function (response) {
                        route.$router.push('/users');
                })
                .catch(function (error) {
                    alert('error');
                });                
        }
    },
  mounted: function() {
     var userId = this.$route.params.id;
     let vm = this;
      axios.get('/editUser/'+userId)
      .then(function (response) {
            vm.formData = response.data;
      })
      .catch(function (error) {
        console.log(error.message);
      });
    },
}
</script>

<style scopped>
    
</style>