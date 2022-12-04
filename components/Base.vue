<template>
  <div>
    <h1>Dados e Props</h1>
    <h2>Mutável: {{ texto }}</h2>
    <h3>Vem aí uma propriedade: {{ another_text }}</h3>
    <input v-model='texto'/>

    <button @click="say(texto)">Clique em mim</button>
    <button @click="testing()">Clique em mim 2</button>
    <button @click="$emit('anotherFunction') && updateCounter()"> Emitir </button>

    <h2>Counter: {{ counter }}</h2>

  </div>
</template>


<style scoped>
  /* SCOPED significa que os estilos aqui definidos serão aplicados apenas à esse componente */


</style>

<script>

export default {
  name: 'Base',
  props: {
    another_text: String
  },
  data() {
    return {
      texto: '',
      counter: this.$store.getters.getCounter,
    }
  },
  methods: {
    say(something) { console.log(something) },

    testing() {
      console.log('Olá, mundo')
    },

    updateCounter() {
      this.counter = this.$store.getters.getCounter
    }

  },
}
</script>
