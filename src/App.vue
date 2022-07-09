<script>
  import CardBase from './components/CardBase.vue'
  import CharacterCard from './components/CharacterCard.vue'
  import ArtifactCard from './components/ArtifactCard.vue'
  
  import characterJson from './assets/characters.json'
  import artifactJson from './assets/artifacts.json'

  export default {
    components: {
    CharacterCard,
    ArtifactCard,
    CardBase
},
    data() {
      return {
        characterJson: characterJson,
        artifactJson: artifactJson
      }
    }
  }
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 m-2">
    <CardBase v-for="char in characterJson.characters">
      <CharacterCard :character="char"/>
    </CardBase>
  </div>

  <div class="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4 m-2">
    <CardBase v-for="art in artifactJson.artifacts">
      <ArtifactCard :artifact="art"/>
    </CardBase>
  </div>
</template>

<style>
  
</style>
