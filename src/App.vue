<template>
  <div>
    <section class="section">
      <div class="container">
        <!-- <counter/>
        <userlist/> -->
        <appbar/>
        <router-view/>
        
        <!-- <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> -->
      </div>
    </section>
  </div>
</template>

<script>
import Counter from './components/Counter'
import Userlist from './components/Userlist'
import Appbar from './components/appbar'

export default{
  components: {
    counter: Counter,
    userlist: Userlist,
    appbar: Appbar
  }
}
</script>



