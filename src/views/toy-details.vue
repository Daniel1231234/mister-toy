<template>
    <section class="toy-details" v-if="toy">
        <h2>Name: {{ toy.name }} </h2>
    </section>
    <router-link to="/toy">Back</router-link>
</template>

<script>
import { toyService } from "../services/toy-service.js"

export default {
    data() {
        return {
            toy: null,
        }
    },
    created() {
        const { toyId } = this.$route.params
        console.log(toyId)
        toyService.getById(toyId)
            .then((currToy) => {
                this.toy = currToy
            })
    },
    methods: {},
    computed: {},
    unmounted() { },
}
</script>