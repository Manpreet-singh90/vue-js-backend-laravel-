<template>
    <div>
        <component :is="'Header'"></component>
            {{headerComponent }}
        <Nav></Nav>
        
        <div class="container-fluid bg-3 text-center" v-if="show" >
            <h3>Some of my Work <b>Counter value :<button type="button" @click="showProduct">View cart {{ count }}</button></b></h3><br>
            <div class="row">
                <div class="col-sm-3" v-for="(product,index) in products">
                      <p >Some text..</p>
                   
                    <div class="w3-third" >
                        <div class="w3-card w3-container" style="min-height:460px">
                            <h3>{{product.name}}</h3><br>
                            <i class="fa fa-desktop w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
                            <h4>price: ${{product.price}}</h4>
                            <b>Description: {{product.description}}</b>
                           
                         <button type="button" v-if="isAlreadyExists(product.id)" @click="addToCart(index)" >Add to cart</button>
                         
                         <button type="button" v-else @click="showProduct">View cart </button>
                               
                        </div>
                    </div>
                </div>
            </div>
        </div>

    
        <div class="container-fluid bg-3 text-center" v-else   >   
             <!-- Total Items: {{  }} -->
            <button type="button" @click="back" >Back to shopping</button> 
            <div class="row">
                <div class="col-sm-3" v-for="(newProduct,newIndex) in cart" :key=newIndex>
                        <p><button @click='removeFromCart(newIndex)'>Remove product </button> </p>
                            <div class="w3-third" >
                                <div class="w3-card w3-container" style="min-height:460px">
                                    <h3>{{newProduct.name}} (qaunt:  {{ newProduct.quantity}})</h3><br>
                                    <i class="fa fa-desktop w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
                                    <h4>price: ${{newProduct.price}}
                                         <label for="sel1"> quantity:</label>                                         
                                            <select @change="changeQuantity(newIndex)">
                                                <option value=1>1</option>
                                                <option value=2>2</option>
                                                <option value=3>3</option>
                                                <option value=4>4</option>
                                            </select>
                                    </h4>
                                    <b>Description: {{newProduct.description}}</b></br>
                                    <b v-if="totalPrice>0">Total Price: ${{totalPrice}}</b>
                                      SubTotal : {{ newProduct.price * newProduct.quantity }}
                                </div>
                            </div>
                    </div>
                    Total Cart : {{ getTotalCartPrice }}
            </div>
        </div>    
        <Footer></Footer>
    </div>
</template>
<script>
import Header from './header.vue'
import Footer from './footer.vue'
import Nav from './nav.vue'

export default {
    components : {
        Header,
        Footer,
        Nav
    },
    data: function() {
        return {
            cart : [],
            show:true,
            totalPrice: '',
            headerComponent : 'Header',
            products:[
                 {
                    id : 11,
                    name : 'product 1',              
                    price: 5,
                    description: 'product description',                
                },
                {
                    id : 22,
                    name : 'product 2',
                    price: 54,
                    description: 'product description'
                },
                {
                    id : 33,
                    name : 'product 3',
                    price: 55,
                    description: 'product description'
                }

            ]

        }
    },
    computed: {
        getTotalCartPrice() {
            let totalPrice = 0;
            this.cart.forEach(element => {
                totalPrice += (element.price*element.quantity)
            });
            return totalPrice;            
        },
        count() {
            let count = 0;
            this.cart.forEach(element => {
                count += 1;
            });
            return count;
        },
        
    },
    methods: {
        isAlreadyExists(id) {
            //check this id exists in cart array use loadsh
             let r = _.find(this.cart,{'id': id});
            if(r===undefined){
                return true
            }
            return false;
        },  
          addToCart: function(index){          
            // this.count++;
            //event.preventDefault();
			//event.target.disabled = true;
            this.cart.push({ ...this.products[index], quantity: 1 }); 
        },
        showProduct() {
            this.show = false
        },
        back() {
            this.show = true
        },
        changeQuantity(newIndex) {
            this.cart[newIndex].quantity = parseInt(event.target.value);            
         },
        removeFromCart(index) {           
            this.cart.splice(index, 1);            
        }
        
    }
}
</script>