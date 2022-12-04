export const state = () => ({
  counter: 0,
  variavel: 'TEXTO 12345',
})

export const getters = {
  getCounter(state) {
    return state.counter
  },

  getVariavel(state) {
    return state.variavel
  },
}

export const mutations = {
  increment(state) {
    state.counter++
  },

  change_text(state) {
    state.variavel = "Olá, mundo testando 123"
  }
}

export const actions = {
  async fetchCounter({ state }) {
    // make request
    const res = { data: 10 };
    state.counter = res.data;
    return res.data;
  },
}
