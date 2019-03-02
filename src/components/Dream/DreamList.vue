<template>
  <section class="dream">dreamlist

      <router-link :to="{ name: 'dream-create'}">Create Dream</router-link>
    <article v-for="(dream, i) in dreams" :key="i + 10">
      <h1>{{dream.name | properCase}}</h1>
      <p>{{ dream.description }}</p>

      <router-link :to="{ name: 'dream-edit', params: { id: dream.id }}">Edit</router-link>
      <button @click="del(dream.id)">Delete</button>
    </article>
  </section>
</template>
<script>
export default {
  created() {
    this.$store.dispatch("dream/getDreams");
  },
  computed: {
    dreams() {
      return this.$store.state.dream.dreams;
    }
  },
  // computed: {
  //   image() {
  //     return `/images/${this.color}.png`
  //   }
  // },
  methods: {
    //   update(val) {
    //     this.$emit('update', this.id, val.target.selectedOptions[0].value)
    //   },
    del(dreamId) {
      this.$store.dispatch("dream/deleteDream", dreamId);
    }
  },
  // props: ['id', 'color', 'name'],
  filters: {
    properCase(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
};
</script>
<style></style>
