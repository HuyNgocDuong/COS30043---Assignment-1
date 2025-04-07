<template>
  <div class="container mt-4">
    <div class="card shadow-lg p-4">
      <h2 class="fw-bold text-center">Event Information</h2>

      <!-- Search Filters -->
      <div class="row g-2 mb-3">
        <div class="col-md-4">
          <input v-model="filters.eventId" type="text" class="form-control" placeholder="Search by ID">
        </div>
        <div class="col-md-4">
          <input v-model="filters.eventName" type="text" class="form-control" placeholder="Search by Name">
        </div>
        <div class="col-md-4">
          <input v-model="filters.duration" type="number" class="form-control" placeholder="Search by Duration" min="0">
        </div>
      </div>

      <!-- Category Filters  -->
      <div class="row mb-3">
        <div class="col-12">
          <div class="btn-group d-flex flex-wrap gap-2 justify-content-center">
            <input type="radio" class="btn-check" id="all" value="All" v-model="filters.category">
            <label class="btn btn-outline-dark fw-bold flex-fill" for="all">All</label>

            <input type="radio" class="btn-check" id="technology" value="Technology" v-model="filters.category">
            <label class="btn btn-outline-dark fw-bold flex-fill" for="technology">Technology</label>

            <input type="radio" class="btn-check" id="business" value="Business" v-model="filters.category">
            <label class="btn btn-outline-dark fw-bold flex-fill" for="business">Business</label>

            <input type="radio" class="btn-check" id="marketing" value="Marketing" v-model="filters.category">
            <label class="btn btn-outline-dark fw-bold flex-fill" for="marketing">Marketing</label>

            <input type="radio" class="btn-check" id="finance" value="Finance" v-model="filters.category">
            <label class="btn btn-outline-dark fw-bold flex-fill" for="finance">Finance</label>
          </div>
        </div>
      </div>

      <!-- Event Table  -->
      <div class="row">
        <div class="col-md-12">
          <div class="table-responsive">
            <table class="table table-hover align-middle">
              <thead class="table-light">
                <tr>
                  <th scope="col">Event ID</th>
                  <th scope="col">Event Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Duration (Hours)</th>
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
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Sample event data
      events: [
        {eventId: '1', eventName: 'Tech Innovations Conference', category: 'Technology', duration: 8},
        {eventId: '2', eventName: 'Startup Pitch Day', category: 'Business', duration: 6},
        {eventId: '3', eventName: 'AI & Machine Learning Summit', category: 'Technology', duration: 10},
        {eventId: '4', eventName: 'Cybersecurity Workshop', category: 'Technology', duration: 4},
        {eventId: '5', eventName: 'Digital Marketing Bootcamp', category: 'Marketing', duration: 6},
        {eventId: '6', eventName: 'Blockchain and Cryptocurrency', category: 'Finance', duration: 5},
        {eventId: '7', eventName: 'Entrepreneurship Forum', category: 'Business', duration: 7},
        {eventId: '8', eventName: 'Data Science Hackathon', category: 'Technology', duration: 12},
        {eventId: '9', eventName: 'Leadership and Management Summit', category: 'Business', duration: 9},
        {eventId: '10', eventName: 'E-commerce Strategies', category: 'Marketing', duration: 6},
        {eventId: '11', eventName: 'AI for Business', category: 'Business', duration: 8},
        {eventId: '12', eventName: 'IoT & Smart Devices Expo', category: 'Technology', duration: 7},
        {eventId: '13', eventName: 'Brand Strategy and Growth', category: 'Marketing', duration: 5},
        {eventId: '14', eventName: 'Investment and Wealth Management', category: 'Finance', duration: 6},
        {eventId: '15', eventName: 'Financial Technology (FinTech) Summit', category: 'Finance', duration: 8},
        {eventId: '16', eventName: 'AI Ethics and Regulations', category: 'Technology', duration: 4},
        {eventId: '17', eventName: 'Business Analytics Workshop', category: 'Business', duration: 6},
        {eventId: '18', eventName: 'SEO and Content Marketing', category: 'Marketing', duration: 7},
        {eventId: '19', eventName: 'Cryptocurrency Investment Strategies', category: 'Finance', duration: 9},
        {eventId: '20', eventName: 'Social Media Marketing Trends', category: 'Marketing', duration: 5}
      ],
      filters: {
        eventId: "",
        eventName: "",
        duration: "",
        category: "All"
      }
    };
  },
  computed: {
    filteredEvents() {
      return this.events.filter(event => {
        //Check if the event ID includes the filter values
        const matchesEventId = event.eventId.toLowerCase().includes(this.filters.eventId.toLowerCase());
        //Check if the event name includes the filter values 
        const matchesEventName = event.eventName.toLowerCase().includes(this.filters.eventName.toLowerCase());
        //Check if the duration matches the filter
        const matchesDuration = this.filters.duration ? event.duration == this.filters.duration : true;
        //Check if the category matches the filter
        const matchesCategory = this.filters.category === "All" || event.category === this.filters.category;
        return matchesEventId && matchesEventName && matchesDuration && matchesCategory;
      });
    }
  }
};
</script>

<style>
.card {
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.table-responsive {
  overflow-x: auto;
}

.table-hover tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

th {
  font-weight: bold;
  text-transform: uppercase;
}

.btn-check:checked + .btn {
  background-color: #000;
  color: white;
  border-color: #000;
}
</style>
