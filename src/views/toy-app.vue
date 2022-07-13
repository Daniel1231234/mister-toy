<template>
  <section class="toy-app container flex flex-col gap-1">
    <button @click="addToy" class="btn btn-secondary">Add a new toy</button>
    <toy-filter @setFilter="setFilter" />
    <toy-list @removeToy="removeToy" v-if="toys" :toys="toys" />
  </section>
</template>

<script>
import { toyService } from '../services/toy-service.js'
import toyFilter from '../components/toy-filter.vue'
import toyList from '../components/toy-list.vue'

export default {
  name: 'toy-app',
  data() {
    return {
    }
  },
  computed: {
    toys() {
      return this.$store.getters.toysToDispaly
    },
  },
  created() {
  },
  methods: {
    setFilter(filter) {
      filter = JSON.parse(JSON.stringify(filter))
      this.$store.dispatch({ type: "setFilterBy", filterBy: filter });
    },
    addToy() {
      this.$router.push(`/toy/edit`)
    },
    removeToy(toyId) {
      console.log("removed")
      this.$store.dispatch({ type: 'removeToy', _id: toyId })
    },

  },
  components: {
    toyList,
    toyFilter,
  },
}
</script>
