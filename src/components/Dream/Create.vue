<template>
  <section class="edit-dream">
      <h1>Create dream</h1>
      <dream-form @submitted="create($event)" />
  </section>
</template>
<script>
  import DreamForm from "./Form"
  export default {
    props: ['id'],
    components: {DreamForm},
    methods: {
      create(dreamToCreate) {
        this.$store.dispatch('dream/createDream', dreamToCreate)
        this.$router.push({"name" : "dreams" })
      }
    },
  }
</script>
<style></style>