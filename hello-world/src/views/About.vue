<template>
  <div class="about">
    <div>{{ count }}</div>
    <button @click="increment">+</button>
  </div>
</template>

<script>

  export default {
    data(){
      // const state = {
      //   a: 1,
      //   b:2
      // }
      //
      // window.state = state
      // window.xx = this
      //
      // return {
      //   $$state: state
      // }
      return {}
    },
    computed: {
      count(){
        return this.$store.getters.count
      }
    },
    methods: {
      increment(){

      }
    }
  }
</script>
