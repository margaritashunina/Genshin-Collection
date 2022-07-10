<script>
    export default{
        props: {
            info: Object
        },
        data() {
            return {
                selected: false,
                bg_image_url: "../src/assets/artifact_icons/" + this.info.set + "-" + this.info.type + ".webp"
            };
        },
        methods: {
            toggleSelected() {
                this.selected = !this.selected;
            }
        }
    }
</script>

<template>
    <div class="bg-center bg-no-repeat bg-cover h-full aspect-square"
        @click="toggleSelected"
        :style="'background-image: url(\'' + bg_image_url + '\');'">
        <div v-if="selected"
            class="backdrop-blur h-full
                bg-slate-50 bg-opacity-40
                flex flex-col items-center justify-center
                text-sm text-center text-slate-700">
            <p class="font-extrabold">
                {{ info['main-stat'] }}
            </p>
            <div class="w-full columns-2 gap-0 font-bold">
                <p v-for="stat in info['sub-stats']">
                    {{ stat }}
                </p>
            </div>
        </div>
        <img v-else :src="'../src/assets/character_eq_icons/' + info.equipped + '.webp'"
                    class="w-1/3"/>   
    </div>
</template>