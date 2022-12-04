<template>
  <Base another_text='Teste' @anotherFunction=handleAnotherFunction() />
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
