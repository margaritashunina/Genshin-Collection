<script>
    export default{
        props: {
            info: Object
        },
        data(){
            return {
                bg_image_url: "../src/assets/elements/" + this.info.element + ".svg",
                selected: false
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
    <div
        class="bg-center bg-no-repeat"
        :style="'background-image: url(\'' + bg_image_url + '\');'"
        @click="toggleSelected">
        <div 
            class=" font-sans
                    columns-2 gap-0
                    aspect-[2/1] w-full"
            :class="(selected? 'backdrop-blur' : '')"
        >
            <div class="flex flex-col items-center justify-center h-full">
                <p class="text-base text-center text-slate-700 font-extrabold">
                    {{ info.name }}
                </p>

                <p  v-if="selected" class="text-lg text-center text-slate-700 font-bold">
                    {{ info.lvl }} | {{ 'C' + info.constellation.toString() }}
                </p>
            </div>

            <img :src="'../src/assets/character_icons/' + info.name + '.webp'" class="aspect-square">
        </div>
    </div>
    
</template>