<template>
    <div>

        <button @click="changeHeading">Change Heading</button>
        <ChildProps :name='heading' :sendNinjas="ninjas"></ChildProps>  

    </div>
</template>


<script>
import ChildProps from './PropsChild'

export default {
    data : function() {
        return {
            heading : 'props test name',
            ninjas : [
                {
                    name : "test 1",
                    city : "Mohali",
                    status : "true"
                },
                {
                    name : "test 2",
                    city : "Mohali",
                    status : "true"
                },
                {
                    name : "test 3",
                    city : "chd",
                    status : "false"
                },
                {
                    name : "test 4",
                    city : "rajpura",
                    status : "false"
                },
                {
                    name : "test 5",
                    city : "patiala",
                    status : "true"
                },
                {
                    name : "test 6",
                    city : "patiala",
                    status : "false"
                },

            ]
        }
    },
    components : {
        ChildProps
    },
    methods : {
        changeHeading() {
            this.heading = "Changed heading name";
        }
    }
}

</script>

