<template>
  <div>
    <Base another_text='Testando feature' @anotherFunction=handleAnotherFunction() />
    <Base another_text='Teste 2' @anotherFunction=handleAnotherFunction() />
    <Base another_text='Testando feature 2' @anotherFunction=handleAnotherFunction() />
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  methods: {
    handleAnotherFunction() {
      this.$store.commit('increment')
      console.log("Função emitida!")
    }
  },
}
</script>
