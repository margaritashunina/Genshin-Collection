<script>
  import CardBase from './components/CardBase.vue'
  import CharacterCard from './components/CharacterCard.vue'
  import ArtifactCard from './components/ArtifactCard.vue'
  import WeaponCard from './components/WeaponCard.vue'
  import PlayerCard from './components/PlayerCard.vue'
  
  import characterJson from './assets/characters.json'
  import artifactJson from './assets/artifacts.json'
  import weaponJson from './assets/weapons.json'

  let characterLayout = "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 m-2";
  let artWeapLayout = "grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4 m-2";

  export default {
    components: {
    CharacterCard,
    ArtifactCard,
    CardBase,
    WeaponCard,
    PlayerCard
},
    data() {
      return {
        tabs: [
          'Character', 'Artifact', 'Weapon'
        ],
        currentTab: "CharacterCard",
        currentJson: characterJson,
        currentGridLayout: characterLayout
      }
    },
    methods: {
      tabHandler(ev) {
        let type = ev.target.id;
        this.currentTab = type + "Card";
        this.currentJson = (type == "Character"? characterJson :
                            type == "Artifact"? artifactJson : weaponJson);
        this.currentGridLayout = (type == "Character"? characterLayout : artWeapLayout)
      }
    }
  }
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 w-full my-4">
    <PlayerCard />
    <div class="flex flex-row justify-center gap-4">
      <button v-for="tab in tabs"
              :key="tab"
              :id="tab"
              @click="tabHandler"
              class="text-2xl text-center text-slate-700 font-extrabold
                    hover:underline hover:decoration-2">
        {{ tab }}
      </button>
    </div>
    
    <div :class="currentGridLayout">
      <CardBase v-for="item in currentJson.entries">
        <component :is="currentTab" :info="item"/>
      </CardBase>
    </div>
  </div>
  
</template>

<style>
  
</style>
