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
    state.addedCoins.push(data);
  }
};
