<template>
  <section class="container-fluid my-5">
    <h2 class="text-center mb-4 fw-bold">Why Choose Us</h2>
    <div class="row g-4 justify-content-center">
      <div v-for="(item, index) in features" :key="index" class="col-12 col-sm-6 col-lg-4 d-flex">
        <div class="feature-card w-100">
          <div class="feature-icon mb-3">
            <span v-html="item.icon"></span>
          </div>
          <h4 class="feature-title mb-3">{{ item.title }}</h4>
          <p class="feature-description mb-0">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhyChooseUs",
  data() {
    return {
      features: [
        { icon: "\uD83D\uDCC5", title: "Expert Planning", description: "Professional event planners with years of experience" },
        { icon: "\uD83D\uDC65", title: "Dedicated Team", description: "Committed staff ensuring smooth event execution" },
        { icon: "\uD83C\uDFC6", title: "Track Record", description: "Successfully managed hundreds of corporate events" },
        { icon: "\uD83D\uDCCA", title: "Data-Driven", description: "Analytics-backed decision making for optimal results" },
        { icon: "⏳", title: "Time Management", description: "Punctual delivery and efficient scheduling" },
        { icon: "\uD83D\uDEE1", title: "Risk Management", description: "Comprehensive contingency planning" }
      ]
    };
  }
};
</script>

<style scoped>
.feature-card {
  background: white;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
}

.feature-icon span {
  font-size: 2.5rem;
  display: block;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
}

.feature-description {
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
}

@media (max-width: 767.98px) {
  .feature-card {
    padding: 1.5rem;
  }
  
  .feature-icon span {
    font-size: 2rem;
  }
}
</style>
