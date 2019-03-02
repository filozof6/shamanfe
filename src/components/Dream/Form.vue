<template>
  <section class="edit-dream">
      <form @submit.prevent="submit()">
        <label for='name'>Name</label>
        <input name='name' id='name' v-model='dream.name' />
        <label for='name'>Description</label>
        <textarea name='description' id='description'  v-model="dream.description"></textarea>
        <button type="submit">Edit</button> 
      </form>
  </section>
</template>
<script>
  export default {
    name: 'dream-form',
    props: {
      propDream: {
      default() {
        return {
          id: '',
          name: '',
          description: '',
        }
      }
      }
    },
    watch: { 
      propDream: function(newVal, oldVal) { // watch it
        this.dream = {
          id: this.propDream.id,
          name: this.propDream.name,
          description: this.propDream.description,
          lucid: false,
          date: '2019-02-02'
        }
      }
    },
    data: function () {
      return {
            dream: {
              id: this.propDream.id,
              name: this.propDream.name,
              description: this.propDream.description,
              lucid: false,
              date: '2019-02-02'
            }
        }
    },
    methods: {
      submit() {
        this.$emit('submitted', this.dream)
      }
    },
  }
</script>
<style></style>