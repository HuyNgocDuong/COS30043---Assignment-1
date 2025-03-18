<template>
  <div id="app">
    <EventTable />
  </div>
</template>

<script>
// Import your EventTable component
import EventTable from './components/EventTable.vue';

export default {
  name: 'App',
  components: {
    EventTable
  }
};
</script>

<style>
/* Global styles */
</style>
