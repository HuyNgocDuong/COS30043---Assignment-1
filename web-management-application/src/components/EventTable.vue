<template>
  <div class="container mt-4">
    <div class="card shadow-lg p-4">
      <h2 class="fw-bold">Events</h2>

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

      <!-- Category Filters (Now Fully Responsive) -->
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

      <!-- Event Table (Still Responsive & Aligned) -->
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
        { eventId: "1", eventName: "Tech Conference 2024", category: "Technology", duration: 8 },
        { eventId: "2", eventName: "Startup Summit", category: "Business", duration: 6 },
        { eventId: "3", eventName: "Digital Marketing Workshop", category: "Marketing", duration: 4 },
        { eventId: "4", eventName: "Investment Symposium", category: "Finance", duration: 5 },
        { eventId: "5", eventName: "Cloud Computing Seminar", category: "Technology", duration: 3 },
        { eventId: "6", eventName: "Leadership Forum", category: "Business", duration: 7 }
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
        const matchesEventId = event.eventId.toLowerCase().includes(this.filters.eventId.toLowerCase());
        const matchesEventName = event.eventName.toLowerCase().includes(this.filters.eventName.toLowerCase());
        const matchesDuration = this.filters.duration ? event.duration == this.filters.duration : true;
        const matchesCategory = this.filters.category === "All" || event.category === this.filters.category;
        return matchesEventId && matchesEventName && matchesDuration && matchesCategory;
      });
    }
  }
};
</script>

<style scoped>
/* Container Card Styling */
.card {
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

/* Make category buttons wrap on smaller screens */
.btn-group {
  flex-wrap: wrap;
}

/* Improve table aesthetics */
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

/* Style radio buttons as Bootstrap buttons */
.btn-check:checked + .btn {
  background-color: #000;
  color: white;
  border-color: #000;
}
</style>
