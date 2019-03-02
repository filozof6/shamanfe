<template>
  <section class="edit-dream">
      <h1>Edit</h1>
      <dream-form :prop-dream="dream" @submitted="update($event)" />
  </section>
</template>
<script>
  import DreamForm from "./Form"
  export default {
    props: ['id'],
    components: {DreamForm},
    computed:{
      dream() {
        return this.$store.state.dream.dream;
      }
    },
    created () {
      this.$store.dispatch('dream/getDream', this.id)
    },
    methods: {
      update(dreamToUpdate) {
        console.log('dreamToUpdate')
        console.log(dreamToUpdate)
        this.$store.dispatch('dream/updateDream', dreamToUpdate)
        this.$router.push({"name" : "dreams" })
      }
    },
  }
</script>
<style></style>