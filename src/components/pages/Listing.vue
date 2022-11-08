<template>
  <Listing
    :coins="coins"
    :modal-visibility="modalVisibility"
    @openModal="onOpenModal"
    @addCoin="onAddCoin"
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
    }
  },
  computed: {
    ...mapState('LISTING_STORE', [
      'coins',
    ]),
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
  }
}
</script>
