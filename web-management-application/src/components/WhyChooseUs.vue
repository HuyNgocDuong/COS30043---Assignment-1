<template>
  <section class="container-fluid my-5">
    <h2 class="text-center mb-4 fw-bold">Why Choose Us</h2>
    <div class="row g-4 justify-content-center">
      <div v-for="(item, index) in features" :key="index" class="col-12 col-sm-6 col-lg-4 d-flex">
        <div class="feature-card w-100">
          <div class="feature-icon mb-3" :style="{ color: item.color }">
            <font-awesome-icon :icon="item.icon" />
          </div>
          <h4 class="feature-title mb-3">{{ item.title }}</h4>
          <p class="feature-description mb-0">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt, faUsers, faTrophy, faChartLine, faHourglassHalf, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faCalendarAlt, faUsers, faTrophy, faChartLine, faHourglassHalf, faShieldAlt);

export default {
  name: "WhyChooseUs",
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      features: [
        { icon: ['fas', 'calendar-alt'], title: "Expert Planning", description: "Professional event planners with years of experience", color: "#ff5733" },
        { icon: ['fas', 'users'], title: "Dedicated Team", description: "Committed staff ensuring smooth event execution", color: "#33c3ff" },
        { icon: ['fas', 'trophy'], title: "Track Record", description: "Successfully managed hundreds of corporate events", color: "#ffd700" },
        { icon: ['fas', 'chart-line'], title: "Data-Driven", description: "Analytics-backed decision making for optimal results", color: "#28a745" },
        { icon: ['fas', 'hourglass-half'], title: "Time Management", description: "Punctual delivery and efficient scheduling", color: "#ff8c00" },
        { icon: ['fas', 'shield-alt'], title: "Risk Management", description: "Comprehensive contingency planning", color: "#6c757d" }
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

.feature-icon {
  font-size: 2.5rem;
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
  
  .feature-icon {
    font-size: 2rem;
  }
}
</style>
