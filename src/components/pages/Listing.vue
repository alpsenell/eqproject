<template>
  <Listing
    :coins="filteredCoins"
    :added-coins="addedCoins"
    :modal-visibility="modalVisibility"
    :search-keyword="searchKeyword"
    @openModal="onOpenModal"
    @hideModal="onHideModal"
    @addCoin="onAddCoin"
    @removeCoin="onRemoveCoin"
    @refresh="fetchCoins"
    @searchCoin="onSearchCoin"
  />
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';
import Listing from '@/components/templates/Listing';

export default {
  components: {
    Listing,
  },
  data() {
    return {
      modalVisibility: false,
      searchKeyword: '',
    }
  },
  computed: {
    ...mapState('LISTING_STORE', [
      'coins',
      'addedCoins',
    ]),
    filteredCoins() {
      if (this.searchKeyword) {
        return this.coins.filter(coin => coin.symbol.toLowerCase().includes(this.searchKeyword.toLowerCase()));
      }

      return this.coins;
    }
  },
  mounted() {
    this.fetchCoins();
  },
  methods: {
    ...mapActions('LISTING_STORE', [
      'fetchCoins',
    ]),
    ...mapMutations('LISTING_STORE', [
      'addCoin',
      'removeCoin',
    ]),
    onOpenModal() {
      this.modalVisibility = true;
    },
    onAddCoin(data) {
      const { coin: { symbol, askPrice }, count } = data;

      const modifiedCoin = {
        symbol,
        askPrice,
        count,
      };

      this.addCoin(modifiedCoin);
    },
    onRemoveCoin(coin) {
      this.removeCoin(coin);
    },
    onHideModal() {
      this.modalVisibility = false;
    },
    onSearchCoin(value) {
      this.searchKeyword = value;
    },
  }
}
</script>
