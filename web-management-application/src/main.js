import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import FontAwesome core
import { library } from '@fortawesome/fontawesome-svg-core';

// Import FontAwesome Vue component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import specific icons
import { faCalendarAlt, faUsers, faTrophy, faChartLine, faHourglassHalf, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

// Add icons to the library
library.add(faCalendar, faCalendarAlt, faUsers, faTrophy, faChartLine, faHourglassHalf, faShieldAlt);

const app = createApp(App);

// Register FontAwesome component globally
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
