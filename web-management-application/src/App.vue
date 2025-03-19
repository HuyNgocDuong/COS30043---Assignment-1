<template>
  <div id="app">
    <HeaderSection />
    <WhyChooseUs />
    <EventTable />
  </div>
</template>

<script>
// Import components
import HeaderSection from './components/HeaderSection.vue';
import WhyChooseUs from './components/WhyChooseUs.vue';
import EventTable from './components/EventTable.vue';
export default {
  name: 'App',
  components: {
    HeaderSection,
    WhyChooseUs,
    EventTable
  }
};
</script>

<style>
/* Global styles (optional) */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
