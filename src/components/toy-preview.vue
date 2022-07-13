<template>
  <li class="toy-preview flex flex-col flex-center gap-1">
    <h2>{{ toy.name }} </h2>
    <p>Reviews:{{ toy.reviews.join(",") }}</p>
    <p>{{ toy.price }}$ </p>
    <p>{{ toy.inStock }} </p>
    <p clsss="toy-labels">
    <div class="toy-labels">
      Labels:
      <p v-for="(label, idx) in toy.labels" :key="idx">
        {{ label }}
      </p>
    </div>
    </p>
    <div class="btn-group">
      <router-link :to="'/toy/' + toy._id">Details</router-link>
      <router-link :to="'/toy/edit/' + toy._id">Edit</router-link>
      <button @click="removeToy(toy._id)">X</button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    toy: Object,
  },
  name: "toy-preview",
  data() {
    return {}
  },
  created() { },
  methods: {
    removeToy(toyId) {
      console.log(toyId)
      this.$emit('removeToy', toyId)
    },
  },
  computed: {},
  unmounted() { },
}

</script>