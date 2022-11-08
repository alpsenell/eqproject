import axios from 'axios';
import { Action, Mutation } from './types';
import { Binance } from '@/enums/ApiEnums';

/**
 * @typedef {function} VuexAction
 * @type {object}
 */
export default {
  async [Action.FETCH_COINS] ({ commit }) {
    const { data } = await axios.get(Binance);

    commit(Mutation.SET_COINS, data.splice(0, 10));
  }
};
