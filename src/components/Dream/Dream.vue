<template>
  <section class="dream">
    dream
    
  </section>
</template>
<script>
/* eslint-disable */ 
  export default {

    created () {
      this.$store.dispatch('dream/getDreams')
    },
    computed: {
      dreams () {
        return this.$store.getters.dreams
      }
    },
    // computed: {
    //   image() {
    //     // return `/images/${this.color}.png`
    //   }
    // },
    // methods: {
    //   update(val) {
    //     this.$emit('update', this.id, val.target.selectedOptions[0].value)
    //   },
    //   del() {
    //     this.$emit('delete', this.id)
    //   }
    // },
    // props: ['id', 'color', 'name'],
    // filters: {
    //   properCase(string) {
    //     return string.charAt(0).toUpperCase() + string.slice(1)
    //   }
    // }
  }
</script>
<style></style>