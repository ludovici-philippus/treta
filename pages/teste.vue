<template>
  <BaseTeste :text=text />
</template>

<script>

export default {
  name: 'TestePage',

  data() {
    return {
      text: 'Olá, mundo testando'
    }
  },

  methods: {
    say(something) { console.log(something) }
  },
}
</script>
