<template>
  <div id="app">
    <HeaderSection />
    <WhyChooseUs />
  </div>
</template>

<script>
// Import the Header and Why Choose Us components
import HeaderSection from './components/HeaderSection.vue';
import WhyChooseUs from './components/WhyChooseUs.vue';

export default {
  name: 'App',
  components: {
    HeaderSection,
    WhyChooseUs
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
