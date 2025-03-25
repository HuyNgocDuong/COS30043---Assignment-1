<template>
  <div id="app">
    <HeaderSection />
    <WhyChooseUs />
    <EventTable />
    <EventRegistration />
  </div>
</template>

<script>
// Import components
import HeaderSection from './components/HeaderSection.vue';
import WhyChooseUs from './components/WhyChooseUs.vue';
import EventTable from './components/EventTable.vue';
import EventRegistration from './components/EventRegistration.vue';
export default {
  name: 'App',
  components: {
    HeaderSection,
    WhyChooseUs,
    EventTable,
    EventRegistration
  }
};
</script>

<style>
/* Global styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
