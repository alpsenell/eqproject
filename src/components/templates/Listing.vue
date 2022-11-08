<template>
  <div class="flex flex-col px-16">
    <ListingHeader
      @openModal="$emit('openModal')"
    />
    <div class="border-top">

    </div>
    <eq-modal
      :visible="modalVisibility"
      header="Add / Update"
    >
      <CoinInformation
        v-for="coin in coins"
        :key="coin.id"
        :coin="coin"
        class="my-2"
        @add="coin => $emit('addCoin', coin)"
      />
    </eq-modal>
  </div>
</template>

<script>
import ListingHeader from '@/components/organisms/ListingHeader';
import EqModal from '@/components/atoms/eqModal';
import CoinInformation from '@/components/molecules/CoinInformation';

export default {
  components: {
    CoinInformation,
    EqModal,
    ListingHeader,
  },
  props: {
    modalVisibility: {
      type: Boolean,
      required: true,
    },
    coins: {
      type: Array,
      required: true,
    },
  }
}
</script>
