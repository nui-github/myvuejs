<template>
    <div>
        <div class="columns">
            <div class="column">
                <table class="table">
                    <tr @click="selectUser(each.id)" v-for="each in xxx" :key="each.id">
                        <td>{{ each.name }}</td>
                        <td>{{ each.username }}</td>
                        <td>{{ each.email }}</td>
                        <td>{{ each.phone }}</td>
                        <td>{{ each.website }}</td>
                        <hr>
                    </tr>
                </table>
            </div>

            <div class="column">
                <!-- <div class="box">{{ selectedUser }}</div> -->
                <div class="box">
                    <selectuser :aaa="selectedUser"/>
                </div>
                <button @click="getUsers">Get User</button>
                
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
// import users from '../users.json' 
import SelectUser from './SelectUser'


export default {
    data(){
        return {
            xxx: [],
            selectedUserID: -1
        }
    },

    components: {
        selectuser: SelectUser
    },

    methods: {
        selectUser(id) {
            // console.log('selected' + id)
            this.selectedUserID = id
        },

        getUsers() {
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then( res => {
                console.log(res.data)
                this.xxx = res.data
            })
        }
    },

    computed: {
        selectedUser(){
            // return this.selectedUserID 
            // ? this.xxx[this.selectedUserID - 1] 
            // : {}

            return this.xxx.find(each => {
                return each.id === this.selectedUserID
            })
        }
    }
}
</script>

<style scoped>
    tr{
        cursor: pointer;
    }
    .box{
        color: #333 !important;
        padding: 20px;
        background-color: #f2f2f2 !important;
    }
</style>


