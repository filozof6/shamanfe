<template>
  <section class="dream">
    dreamlist
    <article v-for="(dream, i) in dreams" :key="i + 10">
      <h1>{{dream.name | properCase}}</h1>
      <p>{{ dream.description }}</p>

      <button @click="del">Edit</button> 
      <button @click="del">Delete</button> 
    </article>
  </section>
</template>
<script>
  export default {

    created () {
      this.$store.dispatch('dream/getDreams')
    },
    computed: {
      dreams () {
        return this.$store.state.dream.dreams.data
      }
    },
    // computed: {
    //   image() {
    //     return `/images/${this.color}.png`;
    //   }
    // },
    // methods: {
    //   update(val) {
    //     this.$emit('update', this.id, val.target.selectedOptions[0].value);
    //   },
    //   del() {
    //     this.$emit('delete', this.id);
    //   }
    // },
    // props: ['id', 'color', 'name'],
    // filters: {
    //   properCase(string) {
    //     return string.charAt(0).toUpperCase() + string.slice(1);
    //   }
    // }
  }
</script>
<style></style>