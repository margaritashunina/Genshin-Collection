<script>
    export default{
        props: {
            info: Object
        },
        data() {
            return {
                selected: false,
                bg_image_url: "../src/assets/weapon_icons/" + this.info.name + ".webp"
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
                text-xl text-center text-slate-700 font-extrabold
                ">
            <p>LVL: {{ info.lvl }}</p>
            <p>R{{ info.refinement }}</p>
        </div>
        <img v-else :src="'../src/assets/character_eq_icons/' + info.equipped + '.webp'"
                    class="w-1/2"/>
    </div>
</template>