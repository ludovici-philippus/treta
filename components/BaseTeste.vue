<template>
  <div>
    <h1>Estou na página de Teste</h1>
    <p>Sou um paragrafo</p>
    <p>Texto: {{ text }}</p>
    <h2>Valor da variável global: {{ globalVariableValue }} </h2>
    <input type="text" v-model="text"/>
    <button @click="$emit('console_text')">Clica em mim!</button>
    <button @click="change_text()">Mudar valor da variável global</button>
  </div> 
</template>

<script>

export default {
  name: "BaseTeste",
  props: ['text'],
  data() {
    return {
      globalVariableValue: this.$store.getters.getVariavel
    }
  },
  methods: {
    change_text() {
      console.log("Entrei aqui")
      this.$store.commit('change_text')
    }
  },
}

</script>

