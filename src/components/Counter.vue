<template>
    <div>
        <!-- <h3 v-if="counter%2" class="odd">Counter: {{counter}}</h3> -->
        <h3 :class="className">Counter: {{ counter }}</h3>
        <h3>CSS Class: {{ className }}</h3>
        <button @click="updateCounter">Plus</button>
        <button@click="minusCounter">Minus</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
</template>

<script>
export default {
  data(){
    return{
      counter: 1
    }
  },

  computed:{
      className(){
          return this.counter % 2 ? 'odd' : 'even'
      }
  },

  methods:{
    updateCounter(){
      this.counter += 1
    },
    minusCounter(){
      this.counter -= 1
    }
  }
}
</script>

<style scoped>
.odd{
    color: red;
}
.even{
    color: blue;
}
</style>


