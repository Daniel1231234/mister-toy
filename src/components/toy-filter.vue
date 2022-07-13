<template>
  <section class="toy-filter">

    <div class="label-filter flex gap-1 align-center">
      <span>Select label</span>
      <el-select size="small" @change="setFilter" v-model="filterBy.byLabel" multiple collapse-tags
        placeholder="Select label" style="width: 200px">
        <el-option v-for="(label, idx) in labels" :value="label" :key="idx" />
      </el-select>
    </div>

    <div class="status-filter flex gap-1 align-center">
      <span>Availability</span>
      <el-select size="small" @change="setFilter" v-model="filterBy.status" placeholder="Select status"
        style="width: 200px">
        <el-option v-for="(opt, idx) in stockOptions" :value="opt" :key="idx" />
      </el-select>
    </div>


    <div class="sort-toy flex gap-1 align-center">
      <span>Sort</span>
      <el-select size="small" @change="setFilter" v-model="filterBy.bySort" placeholder="sort" style="width: 200px">
        <el-option v-for="(opt, idx) in sortOptions" :value="opt" :key="idx" />
      </el-select>
    </div>

    <div class="search flex justify-center">
      <span>Search</span>
      <el-input size="small" v-model="filterBy.txt" @input="setFilter" type="text" class="form-input1"
        placeholder="Search toy..." />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    // labels: Array
  },
  name: 'toy-filter',
  data() {
    return {
      filterBy: {
        txt: '',
        status: '',
        byLabel: [],
        bySort: '',
      },
      labels: [
        'On wheels',
        'Box game',
        'Art',
        'Baby',
        'Doll',
        'Puzzle',
        'Outdoor',
        'Battery powered',
      ],
      stockOptions: ['All', 'In stock', 'Out of stock'],
      sortOptions: [
        'Name - Increasing',
        'Price - Increasing',
        'Created - Increasing',
        'Name - Decreasing',
        'Price - Decreasing',
        'Created - Decreasing',
      ],
    }
  },
  methods: {
    setFilter() {
      if (this.filterBy.byLabel[0] === '') this.filterBy.byLabel = []
      this.$emit('setFilter', this.filterBy)
    },
  },
  computed: {

  },


}
</script>
