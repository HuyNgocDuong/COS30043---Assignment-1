<template>
  <div>
    <h1>Event Information</h1>

    <!-- Search Filters -->
    <div>
      <label for="eventId">Search by Event ID:</label>
      <input v-model="filters.eventId" type="text" id="eventId" placeholder="Search Event ID">

      <label for="eventName">Search by Event Name:</label>
      <input v-model="filters.eventName" type="text" id="eventName" placeholder="Search Event Name">

      <label for="duration">Search by Duration (hours):</label>
      <input v-model="filters.duration" type="number" id="duration" placeholder="Search Duration" min="0">

      <div>
        <label>
          <input type="radio" v-model="filters.category" value="All" /> All
        </label>
        <label>
          <input type="radio" v-model="filters.category" value="Technology" /> Technology
        </label>
        <label>
          <input type="radio" v-model="filters.category" value="Business" /> Business
        </label>
        <label>
          <input type="radio" v-model="filters.category" value="Marketing" /> Marketing
        </label>
        <label>
          <input type="radio" v-model="filters.category" value="Finance" /> Finance
        </label>
      </div>
    </div>

    <!-- Event Table -->
    <table border="1">
      <thead>
        <tr>
          <th>Event ID</th>
          <th>Event Name</th>
          <th>Category</th>
          <th>Duration Hours</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="event in filteredEvents" :key="event.eventId">
          <td>{{ event.eventId }}</td>
          <td>{{ event.eventName }}</td>
          <td>{{ event.category }}</td>
          <td>{{ event.duration }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Sample event data
      events: [
        { eventId: 'E001', eventName: 'Tech Summit', category: 'Technology', duration: 5 },
        { eventId: 'E002', eventName: 'Business Workshop', category: 'Business', duration: 3 },
        { eventId: 'E003', eventName: 'Marketing Conference', category: 'Marketing', duration: 2 },
        { eventId: 'E004', eventName: 'Finance Symposium', category: 'Finance', duration: 6 },
        { eventId: 'E005', eventName: 'AI Expo', category: 'Technology', duration: 4 }
      ],
      filters: {
        eventId: '',
        eventName: '',
        duration: '',
        category: 'All' // Default category is "All"
      }
    };
  },
  computed: {
    // Filtered events based on the search criteria
    filteredEvents() {
      return this.events.filter(event => {
        const matchesEventId = event.eventId.toLowerCase().includes(this.filters.eventId.toLowerCase());
        const matchesEventName = event.eventName.toLowerCase().includes(this.filters.eventName.toLowerCase());
        const matchesDuration = this.filters.duration ? event.duration == this.filters.duration : true;
        const matchesCategory = this.filters.category === 'All' || event.category === this.filters.category;

        return matchesEventId && matchesEventName && matchesDuration && matchesCategory;
      });
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
}

input[type="text"],
input[type="number"] {
  padding: 5px;
  margin: 5px;
}
</style>
