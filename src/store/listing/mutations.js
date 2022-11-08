import Vue from 'vue';
import { Mutation } from './types';

export default {
  /**
   * @name setCoins
   * @param {object} state
   * @param {object} data
   */
  [Mutation.SET_COINS] (state, data ) {
    state.coins = data;
  },
  /**
   * @name addCoin
   * @param {object} state
   * @param {object} data
   */
  [Mutation.ADD_COIN] (state, data ) {
    const coinIndex = state.addedCoins.findIndex(coin => coin.symbol === data.symbol);

    if (coinIndex !== -1) {
      Vue.set(state.addedCoins[coinIndex], 'count', data.count);

      return;
    }

    state.addedCoins.push(data);
  },
  /**
   * @name removeCoin
   * @param {object} state
   * @param {object} removedCoin
   */
  [Mutation.REMOVE_COIN] (state, removedCoin ) {
    const coinIndex = state.addedCoins.findIndex(coin => coin.symbol === removedCoin.symbol);

    if (coinIndex !== -1) {
      state.addedCoins.splice(coinIndex, 1);
    }
  }
};
