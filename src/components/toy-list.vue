
<template>
  <ul class="toy-list grid clean-list gap-2">
    <toy-preview @removeToy="removeToy" v-for="toy in toys" :toy="toy" :key="toy._id" />
  </ul>
</template>

<script>
import toyPreview from './toy-preview.vue'
export default {
  props: {
    toys: {
      type: Array,
      // required: true,
    },
  },
  components: {
    toyPreview,
  },
  methods: {
    removeToy(toyId) {
      console.log(toyId)
      this.$emit('removeToy', toyId)
    },
  },
}
</script>
