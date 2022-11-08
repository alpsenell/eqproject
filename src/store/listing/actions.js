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

    /*
     * @TODO: Since the API doesnt have pagination rendering more than 2000+ data causes the browser to slow.
     * @TODO: To see the whole list of coins, remove the splice method below.
     */
    commit(Mutation.SET_COINS, data.splice(0, 100));
  }
};
