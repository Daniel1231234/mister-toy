<!-- <template>
    <section class="toy-edit" v-if="toy">
        <form @submit.prevent="saveToy">
            <label for="toy-name">Name: </label>
            <input v-model="toy.name" id="toy-name" type="text" placeholder="Enter toy name..." />
            <label for="toy-price">Price: </label>
            <input v-model="toy.price" type="number" id="toy-price" placeholder="Enter toy price..." />
            <button>{{ toy._id ? "Save" : "Add" }}</button>
        </form>
        <router-link to="/toy">Back</router-link>
    </section>
</template>

<script>
import { toyService } from "../services/toy-service.js"

export default {
    data() {
        return {
            toy: null
        }
    },
    created() {
        const { toyId } = this.$route.params;
        if (toyId) {
            toyService.getById(toyId).then((currToy) => {
                this.toy = JSON.parse(JSON.stringify(currToy))
            });
        } else {
            this.toy = toyService.getEmptyToy();
        }
    },
    methods: {
        saveToy() {
            this.$store.dispatch({ type: "saveToy", toy: { ...this.toy } })
                .then((toy) => {
                    this.$router.push("/toy")
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
    computed: {},
    unmounted() { },
}
</script> -->

<template>
    <section class="toy-edit" v-if="toy">
        <el-form label-width="120px">
            <el-form-item @submit.prevent="saveToy" label="Toy name:" placeholder="Enter toy name..." required>
                <el-input v-model="toy.name" />
            </el-form-item>

            <el-form-item @submit.prevent="saveToy" label="Toy Price:" placeholder="Enter toy name..." required>
                <el-input type="number" v-model="toy.price" />
            </el-form-item>

            <el-form-item>
                <span>Select labels</span>
                <el-checkbox-group v-model="toy.labels">
                    <el-checkbox label="On wheels" name="labels" />
                    <el-checkbox label="Box game" name="labels" />
                    <el-checkbox label="Art" name="labels" />
                    <el-checkbox label="Baby" name="labels" />
                    <el-checkbox label="Doll" name="labels" />
                    <el-checkbox label="Puzzle" name="labels" />
                    <el-checkbox label="Outdoor" name="labels" />
                    <el-checkbox label="Battery powered" name="labels" />
                </el-checkbox-group>
            </el-form-item>

            <el-form-item>
                <el-radio-group v-model="toy.inStock">
                    <el-radio label="In stock" />
                    <el-radio label="Out of stock" />
                </el-radio-group>
            </el-form-item>

            <el-form-item label="Write your review">
                <el-input v-model="toy.reviews" type="textarea" />
            </el-form-item>

            <el-form-item class="btns-group">
                <el-button type="primary" @click="saveToy">{{ toy._id ? "Save" : "Add" }}</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
            <router-link to="/toy">Back</router-link>
        </el-form>
    </section>
</template>

<script>
import { toyService } from "../services/toy-service.js"

export default {
    data() {
        return {
            toy: null,
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
        }
    },
    created() {
        const { toyId } = this.$route.params;
        if (toyId) {
            toyService.getById(toyId).then((currToy) => {
                this.toy = JSON.parse(JSON.stringify(currToy))
            });
        } else {
            this.toy = toyService.getEmptyToy();
        }
    },
    methods: {
        saveToy() {
            this.$store.dispatch({ type: "saveToy", toy: { ...this.toy } })
                .then((toy) => {
                    this.$router.push("/toy")
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
    computed: {},
    unmounted() { },
}
</script>