<template>
  <Base another_text='Testando feature' @anotherFunction=handleAnotherFunction() />
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
