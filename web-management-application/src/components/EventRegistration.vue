  <template>
  <div class="registration-container">
    <div card shadow-lg p-4>
        <h2 class="text-center fw-bold">Event Registration</h2>
        <form @submit.prevent="submitForm">
          <!-- Username -->
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" v-model="username" class="form-control" required>
          </div>

          <!-- Password -->
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" class="form-control" required>
          </div>

          <!-- Confirm Password -->
          <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" v-model="confirmPassword" class="form-control" required>
            <small v-if="passwordMismatch" class="text-danger">Passwords do not match</small>
          </div>

          <!-- Event Category -->
          <div class="form-group">
            <label class="category-label">Category</label>
            <div class="d-flex flex-wrap gap-3">
              <div class="form-check" v-for="(category, index) in categories" :key="index">
                <input 
                  class="form-check-input" 
                  type="radio" 
                  :id="category" 
                  :value="category" 
                  v-model="selectedCategory"
                >
                <label class="form-check-label" :for="category">{{ category }}</label>
              </div>
            </div>
            <!-- Show validation error if no category is selected -->
            <small v-if="categoryError" class="text-danger">Please select a category.</small>
          </div>

          <!-- Event Name Dropdown -->
          <div class="form-group">
            <label for="eventName">Event</label>
            <select id="eventName" v-model="selectedEvent" class="form-select">
              <option value="" disabled>Select an event</option>
              <option v-for="event in filteredEvents" :key="event.eventId" :value="event.eventName">
                {{ event.eventName }}
              </option>
            </select>
          </div>
                          
          <!-- Submit Button -->
          <button type="submit" class="btn btn-dark w-100">Register</button>
        </form>

        <!-- Summary Message -->
        <div v-if="submitted" class="alert alert-success mt-4">
          <h4>Registration Summary</h4>
          <p><strong>Username:</strong> {{ username }}</p>
          <p><strong>Selected Category:</strong> {{ selectedCategory }}</p>
          <p><strong>Selected Event:</strong> {{ selectedEvent }}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      selectedCategory: "",
      selectedEvent: "",
      submitted: false,
      categoryError: false, // Track category validation
      categories: ["Technology", "Business", "Marketing", "Finance"],
      events: [
        { eventId: "1", eventName: "Leadership Summit", category: "Business" },
        { eventId: "2", eventName: "E-commerce Strategies", category: "Marketing" },
        { eventId: "3", eventName: "AI for Business", category: "Business" },
        { eventId: "4", eventName: "IoT & Smart Devices", category: "Technology" },
        { eventId: "5", eventName: "Brand Strategy", category: "Marketing" },
        { eventId: "6", eventName: "Wealth Management", category: "Finance" },
        { eventId: "7", eventName: "FinTech Summit", category: "Finance" },
        { eventId: "8", eventName: "AI Ethics", category: "Technology" },
      ],
    };
  },
  computed: {
    filteredEvents() {
      return this.events.filter(event => event.category === this.selectedCategory);
    },
    passwordMismatch() {
      return this.password !== this.confirmPassword && this.confirmPassword !== "";
    }
  },
  methods: {
  submitForm() {
    if (this.passwordMismatch) return; // Stop submission if passwords don't match

    if (!this.selectedCategory) {
      this.categoryError = true; 
      return; 
    }

    this.categoryError = false; // Clear error if category is selected
    this.submitted = true; 
  }
}

};
</script>

<style>
.registration-container {
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: 600;
}

.form-control, .form-select {
  height: 40px;
  border-radius: 6px;
}

.d-flex {
  display: flex;
  flex-wrap: wrap;
}

.gap-3 {
  gap: 15px;
}

.form-check {
  display: flex;
  align-items: center;
  gap: 5px;
}

.btn-dark {
  background-color: #111827;
  border: none;
  padding: 10px;
  font-size: 16px;
}

.btn-dark:hover {
  background-color: #000;
}
</style>
