import { createStore } from 'vuex'

export default createStore({
  state: {
    walletConnected: false,
    walletAddress: null,
  },
  getters: {
    isWalletConnected: state => state.walletConnected,
    getWalletAddress: state => state.walletAddress
  },
  mutations: {
    setWalletConnection(state, status) {
      state.walletConnected = status
    },
    setWalletAddress(state, address) {
      state.walletAddress = address
    }
  },
  actions: {
    connectWallet({ commit }) {
      // Wallet connection logic will be implemented here
      commit('setWalletConnection', true)
      commit('setWalletAddress', '0x...')
    }
  }
})
