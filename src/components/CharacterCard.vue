<script>
    export default{
        props: {
            character: Object
        },
        data(){
            let className = {
                "anemo"  : "bg-anemo",
                "geo"    : "bg-geo",
                "cryo"   : "bg-cryo",
                "pyro"   : "bg-pyro",
                "electro": "bg-electro",
                "hydro"  : "bg-hydro",
            }
            return {
                backgroundPic: className[this.character.element],
                selected: false
            }
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
    <div
        class="bg-center bg-no-repeat"
        :class="backgroundPic"
        @click="toggleSelected">
        <div 
            class=" font-sans
                    columns-2 gap-0
                    aspect-[2/1] w-full"
            :class="(selected? 'backdrop-blur' : '')"
        >
            <div class="flex flex-col items-center justify-center h-full">
                <p class="text-base text-center text-slate-700">
                    {{ character.name }}
                </p>

                <p  v-if="selected" class="text-lg text-center text-slate-700 font-bold">
                    {{ character.lvl }} | {{ 'C' + character.constellation.toString() }}
                </p>
            </div>

            <img :src="character['mini-pic']" class="aspect-square">
        </div>
    </div>
    
</template>