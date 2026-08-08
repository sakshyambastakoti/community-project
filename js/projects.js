/* ==========================================================================
   PROJECT PRAYASH — HANDS-ON PROJECTS SHOWCASE JS
   ========================================================================== */

const PROJECTS_DATA = [
  {
    id: 'night-light',
    name: 'Automatic Night Light',
    category: 'automation',
    difficulty: 'Beginner',
    problem: 'Dark streets and school yards at night lead to unsafe movement and unnecessary electricity waste during daylight.',
    tech: ['LDR Sensor', 'Transistor Driver', 'LED Output', 'Resistors'],
    working: 'LDR resistance increases significantly in darkness, biasing the transistor circuit to automatically turn on illumination.',
    impact: 'Enhances nighttime safety around rural school premises and eliminates manual switching effort.'
  },
  {
    id: 'rain-alarm',
    name: 'Rain Alarm System',
    category: 'weather',
    difficulty: 'Beginner',
    problem: 'Unexpected rainfall damages drying outdoor crops, grains, and school materials left outside.',
    tech: ['Rain Probe Board', 'Transistor Switch', 'Buzzer Alert', '9V Power'],
    working: 'Raindrops falling on sensor traces create an electrical bridge, completing the circuit and sounding an immediate audible alarm.',
    impact: 'Protects agricultural harvest and household property through timely rainfall warnings.'
  },
  {
    id: 'water-indicator',
    name: 'Water Level Indicator & Overflow Alarm',
    category: 'resource',
    difficulty: 'Intermediate',
    problem: 'Water tanks overflow causing severe water waste, or run empty without warning during school hours.',
    tech: ['Probe Sensors', 'Arduino Nano', 'Multi-LED Array', 'Buzzer'],
    working: 'Water contact with probe leads triggers low, medium, and high LEDs. Top probe contact sounds continuous overflow alert.',
    impact: 'Conserves precious water resources in rural communities and prevents pump dry-running damage.'
  },
  {
    id: 'smart-dustbin',
    name: 'Touchless Smart Dustbin',
    category: 'sanitation',
    difficulty: 'Intermediate',
    problem: 'Unhygienic manual opening of trash bins spreads germs, while overflowing bins litter school grounds.',
    tech: ['Ultrasonic Sensor', 'Arduino Uno', 'Servo Motor', 'Enclosure'],
    working: 'Ultrasonic sensor detects hand approaching within 15cm and signals servo motor to flip open lid automatically for 5 seconds.',
    impact: 'Promotes touchless waste disposal and improves sanitary conditions for school students.'
  },
  {
    id: 'auto-sanitizer',
    name: 'Automatic Hand Sanitizer Dispenser',
    category: 'health',
    difficulty: 'Intermediate',
    problem: 'Cross-contamination during communal hand hygiene routine in schools.',
    tech: ['IR Proximity Sensor', 'Relay Module', '5V DC Pump', 'Tubing'],
    working: 'IR sensor detects hand presence under nozzle, triggering relay to run small liquid pump for exactly 1 second.',
    impact: 'Reduces infectious disease transmission among rural students through touchless sanitization.'
  },
  {
    id: 'school-bell',
    name: 'Smart Scheduled School Bell',
    category: 'school',
    difficulty: 'Intermediate',
    problem: 'Irregular manual bell ringing disrupts daily class timetables in rural schools.',
    tech: ['RTC Module (DS3231)', 'Arduino Uno', 'Relay Switch', 'AC Gong/Buzzer'],
    working: 'Real-Time Clock module triggers high-power relay at pre-programmed period intervals automatically.',
    impact: 'Ensures strict timetable punctuality and relieves school staff from manual bell operation.'
  },
  {
    id: 'door-alert',
    name: 'Door Intruder Warning System',
    category: 'safety',
    difficulty: 'Beginner',
    problem: 'Unauthorized access to school computer rooms or equipment storehouses after school hours.',
    tech: ['Magnetic Reed Switch', '555 Timer / Transistor', 'Loud Buzzer', 'LED'],
    working: 'Opening door separates magnet from reed switch, breaking circuit hold and activating continuous alarm until reset.',
    impact: 'Safeguards valuable school assets and technical equipment from theft or tampering.'
  },
  {
    id: 'temp-monitor',
    name: 'Temperature Monitoring Alert',
    category: 'weather',
    difficulty: 'Intermediate',
    problem: 'Overheating in seed storage rooms or computer labs causes seed spoilage and hardware damage.',
    tech: ['DHT11 Temp Sensor', 'Arduino Board', 'RGB LED Alert', 'Piezo Buzzer'],
    working: 'DHT11 measures ambient temperature continuously; if temperature crosses 35°C threshold, warning LED turns red and buzzer sounds.',
    impact: 'Prevents thermal damage to sensitive school electronics and rural agricultural seed storage.'
  },
  {
    id: 'smart-parking',
    name: 'Smart Occupancy Indicator',
    category: 'automation',
    difficulty: 'Intermediate',
    problem: 'Overcrowding and unmonitored capacity in communal rooms or vehicle parking areas.',
    tech: ['Dual IR Pair', 'Arduino Board', '7-Segment Display', 'Status LEDs'],
    working: 'Entry IR sensor increments count display, Exit IR sensor decrements count display. Full capacity activates RED indicator.',
    impact: 'Maintains orderly capacity management in shared educational facilities.'
  },
  {
    id: 'classroom-light',
    name: 'Automatic Classroom Energy Saver',
    category: 'energy',
    difficulty: 'Intermediate',
    problem: 'Electricity wasted when lights remain turned on in empty, unoccupied classrooms.',
    tech: ['PIR Motion Sensor', 'LDR Sensor', 'Relay Module', 'Arduino'],
    working: 'Relay powers classroom lights ONLY when PIR detects human presence AND LDR detects ambient darkness.',
    impact: 'Significantly reduces school electricity consumption and monthly utility bills.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  renderProjects('all');
  initProjectFilters();
});

function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const category = e.currentTarget.getAttribute('data-filter');
      renderProjects(category);
    });
  });
}

function renderProjects(categoryFilter) {
  const container = document.getElementById('projectsGrid');
  if (!container) return;

  const filtered = categoryFilter === 'all' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === categoryFilter);

  container.innerHTML = filtered.map(p => `
    <div class="project-card">
      <div class="project-card-header">
        <h4 class="project-title">${p.name}</h4>
        <span class="project-diff">${p.difficulty}</span>
      </div>
      <div class="project-card-body">
        <div>
          <div class="project-field-label">Problem Addressed</div>
          <p class="project-field-val">${p.problem}</p>
        </div>
        <div>
          <div class="project-field-label">Technology & Components</div>
          <div class="tech-tag-wrap">
            ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>
        <div>
          <div class="project-field-label">Working Mechanism</div>
          <p class="project-field-val">${p.working}</p>
        </div>
        <div>
          <div class="project-field-label">Community Impact</div>
          <p class="project-field-val" style="font-weight:600; color:var(--text-primary);">${p.impact}</p>
        </div>
      </div>
    </div>
  `).join('');
}
