<template>
    <PieChart :chartData="testData" />
</template>

<script lang="ts">
import { PieChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
    name: 'Price-chart',
    props: {
        testData: { type: Object },
        chartOpts: { type: Object }
    },
    components: { PieChart },

}
</script>