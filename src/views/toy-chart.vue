<template>
    <h1 class="text-center">Price by toy's type</h1>
    <price-chart :testData="testData"></price-chart>
</template>

<script>
import { toyService } from "../services/toy-service"
import priceChart from "../components/price-chart.vue"

export default {
    props: [],
    data() {
        return {
            toys: null,
            testData: {
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
                datasets: [
                    {
                        data: [30, 40, 60, 70, 5, 10, 10, 10],
                        backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
                    },
                ],
            }
        }

    },
    created() {

    },
    methods: {

    },
    computed: {

    },
    components: { priceChart },
}
</script>