<template>
  <DataTable
    :value="data"
    :paginator="true"
    class="p-datatable-customers"
    :rows="10"
    dataKey="id"
    :rowHover="true"
    :filters.sync="filters"
    filterDisplay="menu"
    :loading="loading"
    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
    :rowsPerPageOptions="[10,25,50]"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
    :globalFilterFields="['name','country.name','representative.name','status']"
    responsiveLayout="scroll"
  >
    <template #header>
      <div class="flex justify-content-between align-items-center">
        <h5 class="m-0">Customers</h5>
        <span class="p-input-icon-left">
          <i class="pi pi-search"/>
            <InputText
              v-model="filters['global'].value"
              placeholder="Keyword Search"
            />
        </span>
      </div>
    </template>
    <template #empty>
      No customers found.
    </template>
    <template #loading>
      Loading customers data. Please wait.
    </template>
    <Column
      field="symbol"
      header="symbol"
      sortable
      :styles="{'min-width': '14rem'}"
    >
      <template #body="{data}">
        {{ data.symbol }}
      </template>
      <template #filter="{filterModel}">
        <InputText type="text"
                   v-model="filterModel.value"
                   class="p-column-filter"
                   placeholder="Search by name"
        />
      </template>
    </Column>
    <Column
      field="askPrice"
      header="Ask Price"
      sortable
      dataType="numeric"
      :styles="{'min-width': '8rem'}"
    >
      <template #body="{data}">
        {{ data.askPrice }}
      </template>
    </Column>
  </DataTable>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import {FilterMatchMode,FilterOperator} from 'primevue/api';

export default {
  components: {
    DataTable,
    Column
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      filters: {
        'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
        'name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
        'country.name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
        'representative': {value: null, matchMode: FilterMatchMode.IN},
        'date': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.DATE_IS}]},
        'balance': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
        'status': {operator: FilterOperator.OR, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
        'activity': {value: null, matchMode: FilterMatchMode.BETWEEN},
        'verified': {value: null, matchMode: FilterMatchMode.EQUALS}
      },
      loading: true,
    }
  },
}
</script>
