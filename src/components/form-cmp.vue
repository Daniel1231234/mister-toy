<template>
    <section class="toy-edit" v-if="toy">
        <el-form :model="form" label-width="120px">
            <el-form-item @submit.prevent="saveToy" label="Toy name:" placeholder="Enter toy name...">
                <el-input v-model="toy.name" />
            </el-form-item>

            <el-form-item @submit.prevent="saveToy" label="Toy Price:" placeholder="Enter toy name...">
                <el-input type="number" v-model="toy.price" />
            </el-form-item>

            <el-form-item label="Labels">
                <el-checkbox-group v-model="toy.labels">
                    <el-checkbox v-for="(opt, idx) in stockOptions" />
                </el-checkbox-group>
            </el-form-item>

            <el-form-item label="In Avillable in stock?">
                <el-radio-group v-model="toy.inStock">
                    <el-radio label="In stock" />
                    <el-radio label="Out of stock" />
                </el-radio-group>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">{{ toy._id ? "Save" : "Add" }}</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>
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
</script>