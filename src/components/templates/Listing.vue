<template>
  <div class="flex flex-col px-16">
    <ListingHeader
      @openModal="$emit('openModal')"
      @refresh="$emit('refresh')"
    />
    <div class="grid grid-cols-2 gap-16 px-16 mt-10">
      <div class="bg-500">
        <ModifyCoinRow
          v-for="addedCoin in addedCoins"
          :key="addedCoin.symbol"
          :coin="addedCoin"
          :value="addedCoin.count"
          class="my-2"
          @add="coin => $emit('addCoin', coin)"
          @remove="coin => $emit('removeCoin', coin)"
        />
      </div>
      <div>
        <NoDataChart
          v-if="!addedCoins.length"
          class="w-[50rem] h-[50rem]"
        />
        <PieChart
          v-else
          :height="800"
          :width="800"
          :bg-colors="bgColors"
          :labels="addedCoins.map(coin => coin.symbol)"
          :data="addedCoins.map(coin => coin.askPrice * coin.count)"
        />
      </div>
    </div>
    <eq-modal
      :visible="modalVisibility"
      header="Add / Update"
      @hide="$emit('hideModal')"
    >
      <span class="p-input-icon-left p-input-icon-right flex relative">
          <i class="pi pi-search left-3 right-auto" />
          <InputText
            :value="searchKeyword"
            type="text"
            @input="onSearchCoin"
          />
      </span>
      <div
        v-for="coin in coins"
        :key="coin.id"
      >
        <ModifyCoinRow
          v-if="addedCoins.find(added => added.symbol === coin.symbol)"
          :coin="coin"
          class="my-2"
          :value="addedCoins.find(added => added.symbol === coin.symbol).count"
          @add="coin => $emit('addCoin', coin)"
          @remove="coin => $emit('removeCoin', coin)"
        />
        <AddCoinRow
          v-else
          :coin="coin"
          class="my-2"
          :value="1"
          @add="coin => $emit('addCoin', coin)"
        />
      </div>
    </eq-modal>
  </div>
</template>

<script>
import { debounce } from '@/helpers/helpers';
import ListingHeader from '@/components/organisms/ListingHeader';
import EqModal from '@/components/atoms/eqModal';
import AddCoinRow from '@/components/molecules/AddCoinRow.vue';
import ModifyCoinRow from '@/components/molecules/ModifyCoinRow.vue';
import NoDataChart from '@/components/atoms/NoDataChart';
import PieChart from '@/components/atoms/PieChart';
import InputText from 'primevue/inputtext';

export default {
  components: {
    PieChart,
    NoDataChart,
    AddCoinRow,
    ModifyCoinRow,
    EqModal,
    ListingHeader,
    InputText,
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
    addedCoins: {
      type: Array,
      required: true,
    },
    searchKeyword: {
      type: String,
      required: true,
    },
  },
  computed: {
    bgColors() {
      let colors = [];

      for (let i = 0; i < this.addedCoins.length; i++) {
        const color = `#${Math.floor(Math.random()*16777215).toString(16)}`

        if (colors.includes(color)) {
          i--;
        } else {
          colors.push(color);
        }
      }

      return colors;
    }
  },
  methods: {
    /**
     * @param {string} searchKeyword
     * @return {void}
     */
    onSearchCoin: debounce(function (searchKeyword) {
      this.$emit('searchCoin', searchKeyword);
    }, 400),
  }
}
</script>

<style lang="scss">
.pi-search {
  right: unset !important;
}
</style>
