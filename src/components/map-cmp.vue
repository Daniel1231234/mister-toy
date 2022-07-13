<template>
    <h2> Our shops</h2>
    <GMapMap :center="center" :zoom="7" map-type-id="terrain" style="width: 350px; height: 350px">
        <GMapCluster>
            <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true"
                :draggable="true" @click="center = m.position" />
        </GMapCluster>
    </GMapMap>
</template>
<script>
export default {
    name: 'Map',
    data() {
        return {
            center: { lat: 32.610493, lng: 35.287922 },
            markers: [
                {
                    position: {
                        lat: 32.610493, lng: 35.287922
                    },
                },
                {
                    position: {
                        lat: 32.184448, lng: 34.870766
                    },
                },
                {
                    position: {
                        lat: 31.705791, lng: 35.200657
                    }
                }

                , // Along list of clusters
            ]
        }
    }
}
</script>

<style>
.vue-map-container {
    /* position: relative; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.vue-map {
    position: absolute;
    right: 1rem;
    border-radius: 10px;
}
</style>