<script>
    export default{
        props: {
            weapon: Object
        },
        data() {
            return {
                selected: false,
                bg_image_url: "../src/assets/weapon_icons/" + this.weapon.name + ".webp"
            }
        },
        methods: {
            toggleSelected() {
                this.selected = !this.selected;
            }
        }
    }
</script>

<template>
    <div class="bg-no-repeat bg-center bg-cover aspect-[5/6]"
        @click="toggleSelected"
        :style="'background-image: url(\'' + bg_image_url + '\');'">
        <div v-if="selected"
            class="backdrop-blur h-full
                bg-slate-50 bg-opacity-40
                flex flex-col items-center justify-center
                text-sm text-center text-slate-700 font-medium
                ">
            <p>lvl: {{ weapon.lvl }}</p>
            <p>R1: {{ weapon.refinement }}</p>
        </div>
    </div>
</template>