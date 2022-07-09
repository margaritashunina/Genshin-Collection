<script>
    export default{
        props: {
            artifact: Object
        },
        data() {
            return {
                selected: false,
                bg_image_url: "../src/assets/artifact_icons/" + this.artifact.set + "-" + this.artifact.type + ".webp"
            };
        },
        methods: {
            toggleSelected() {
                this.selected = !this.selected;
                console.log(this.selected);
            }
        }
    }
</script>

<template>
    <div class="bg-center bg-no-repeat bg-cover h-full aspect-square"
        @click="toggleSelected"
        :style="'background-image: url(\'' + bg_image_url + '\');'">
        <div  v-if="selected"
            class="backdrop-blur h-full
                bg-slate-50 bg-opacity-40
                flex flex-col items-center justify-center
                text-sm text-center text-slate-700 font-medium
                ">
            <p>
                {{ artifact['main-stat'] }}
            </p>
            <div class="w-full columns-2 gap-0">
                <p v-for="stat in artifact['sub-stats']">
                    {{ stat }}
                </p>
            </div>
        </div>
    </div>
</template>