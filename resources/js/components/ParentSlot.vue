   <template>
<div>
  <button @click="chnageName">change</button>
  <child21 :name='testName'></child21>

    <component :is="'Header'"></component> 
      {{headerComponent }}
    <Nav></Nav>
    <ChildSlot>

      <h2 slot="text">Parent text</h2>
      <h2 slot="description">Parent description Parent descriptionParent descriptionParent descriptionParent description
      Parent descriptionParent descriptionParent descriptionParent description
      Parent descriptionParent descriptionParent descriptionParent description
      Parent descriptionParent descriptionParent descriptionParent description
      </h2>
     
    </ChildSlot>
    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>


    <div class="w3-container" id="about">
      <div class="w3-content" style="max-width:700px">
        <h5 class="w3-center w3-padding-64"><span class="w3-tag w3-wide">ABOUT THE CAFE</span></h5>
        <p>The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>In addition to our full espresso and brew bar menu, we serve fresh made-to-order breakfast and lunch sandwiches, as well as a selection of sides and salads and other good stuff.</p>
        <div class="w3-panel w3-leftbar w3-light-grey">
          <p><i>"Use products from nature for what it's worth - but never too early, nor too late." Fresh is the new sweet.</i></p>
          <p>Chef, Coffeeist and Owner: Liam Brown</p>
        </div>
        <img src="/w3images/coffeeshop.jpg" style="width:100%;max-width:1000px" class="w3-margin-top">
        <p><strong>Opening hours:</strong> everyday from 6am to 5pm.</p>
        <p><strong>Address:</strong> 15 Adr street, 5015, NY</p>
      </div>
    </div>
    <button @click="selectedComponent='Child21'"> Child2</button>
    <button @click="selectedComponent='Child31'"> Child3</button>

    <p>{{selectedComponent}}</p>  
    <component :is="selectedComponent">
        <p>Default Content </p>
    </component>

    <div>
    <tabs>
        <tab name="First tab">
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
        </tab>
        <tab name="Second tab">
            <p>We have created a fictional "personal" website/blog, and our fictional character 
                is a hobby photographer. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </tab>
        <tab name="Third tab">
            Third tab content
        </tab> 
    </tabs>
</div>
</div>
</template>

<script>
import ChildSlot from './ChildSlot.vue'
import Header from './header'
import Footer from './footer'
import Nav from './nav'
import Child21 from './Child2'
import Child31 from './Child3' 

export default {
  components : {
    ChildSlot,
    Header,
    Footer,
    Nav,
    Child21,
    Child31
  },
  data: function() {
      return {
        name: {
          first_name:'test',
          last_name:'user'
          },
          selectedComponent: 'Child21',
          headerComponent : 'Header',
          testName: 'Testing Props'
      }
  },
  methods: {
        tabClicked (selectedTab) {
            console.log('Current tab re-clicked:' + selectedTab.tab.name);
        },
        tabChanged (selectedTab) {
            console.log('Tab changed to:' + selectedTab.tab.name);
        },
        chnageName() {
          this.testName = "value changed"
        }
  }
}

</script>