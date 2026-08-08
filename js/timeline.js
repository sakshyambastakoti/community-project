/* ==========================================================================
   PROJECT PRAYASH — 9-DAY TECHNICAL ROADMAP INTERACTIVE TIMELINE JS
   ========================================================================== */

const DAYS_DATA = [
  {
    day: 1,
    date: '28 October 2026',
    theme: 'Technology & Community Problems',
    quote: '"Technology Starts With a Problem."',
    learn: [
      'What is technology and how it surrounds us',
      'Difference between Electricity vs Electronics',
      'Core paradigm: Input → Processing → Output',
      'Basic electrical components (resistors, switches, LEDs)',
      'Introduction to community problem-solving'
    ],
    build: [
      'Basic LED illumination circuit',
      'Switch-controlled LED system',
      'Community Problem Hunt activity (Identify 3-5 local issues)'
    ],
    outcome: [
      'Each team defines: Problem statement, Location, People affected, Proposed tech solution, & Initial component requirements'
    ]
  },
  {
    day: 2,
    date: '29 October 2026',
    theme: 'Electricity, Circuits & Electrical Safety',
    quote: '"Understanding Power Safely."',
    learn: [
      'Fundamental concepts: Voltage, Current, Resistance, Power (V, I, R, P)',
      'DC electricity fundamentals & Polarity rules',
      'Series vs Parallel circuit behavior',
      'Short circuit risks & prevention strategies',
      'Comprehensive Electrical Safety protocols'
    ],
    build: [
      'Station A: Basic LED circuits',
      'Station B: Series and parallel LED configurations',
      'Station C: Push-button switch circuits',
      'Station D: Buzzer and acoustic warning circuits',
      'Station E: Multimeter testing (Voltage, Resistance, Continuity)'
    ],
    outcome: [
      'Students safely measure circuits using multimeters and demonstrate safe electrical handling practices'
    ]
  },
  {
    day: 3,
    date: '30 October 2026',
    theme: 'Electronics & Sensors',
    quote: '"Making Electronics Understand the Environment."',
    learn: [
      'Digital vs Analog sensor signals',
      'LDR (Light Dependent Resistor) & IR Proximity sensing',
      'Ultrasonic distance measuring & Temperature sensors',
      'Rain detection & Water-level sensing probes',
      'Actuators: Servos, Buzzers, and Indicators'
    ],
    build: [
      'Project A: Automatic Night Light (LDR → Circuit → LED)',
      'Project B: Rain Alarm (Rain Sensor → Controller → Buzzer)',
      'Project C: Distance Alert System (Ultrasonic → Controller → Buzzer)',
      'Project D: Water Level Indicator (Water Sensor → Multi-LED array)'
    ],
    outcome: [
      'Students master the core automation formula: Sensor → Data → Decision → Action'
    ]
  },
  {
    day: 4,
    date: '31 October 2026',
    theme: 'Arduino & Basic Programming',
    quote: '"Giving Circuits Intelligence."',
    learn: [
      'Introduction to Microcontrollers & Arduino architecture',
      'Digital I/O pin control (HIGH / LOW)',
      'Analog input reading (0 - 1023 resolution)',
      'Basic C/C++ concepts: Variables, If-Else Conditions, Loops',
      'Serial Monitor debugging techniques'
    ],
    build: [
      'Blinking LED starter script',
      'Button-triggered LED control script',
      'LDR threshold-triggered lighting system',
      'Ultrasonic proximity buzzer alert system'
    ],
    outcome: [
      'Every team solves a live programming challenge: automatic environment-triggered logic'
    ]
  },
  {
    day: 5,
    date: '01 November 2026',
    theme: 'Automation & Mini Projects Day',
    quote: '"Make It Automatic."',
    learn: [
      'Combining Sensor + Controller + Output into complete systems',
      'Threshold tuning & noise reduction in code',
      'Power supply stability for embedded controllers',
      'Circuit modularity and breadboard layout optimization'
    ],
    build: [
      'Mini Project selection (1 per team):',
      'Smart Dustbin, Water-Level Alarm, Rain Alarm, Auto Sanitizer, Smart School Bell, Door Alert, Smart Parking, Temp Monitor, or Auto Classroom Light'
    ],
    outcome: [
      'Each student can thoroughly explain every component and code line of their mini-project'
    ]
  },
  {
    day: 6,
    date: '02 November 2026',
    theme: 'PRAYASH Community Innovation Challenge',
    quote: '"Solving Real Local Problems."',
    learn: [
      '7-Step Engineering Design Framework (Problem → People → Cause → Solution → Design → Components → Prototype)',
      'Translating community observations into technical requirements',
      'Category focus: Water, Energy, Waste, Safety, Weather, Agriculture'
    ],
    build: [
      'Team problem selection & field observation',
      'Block diagram draft & component bill of materials',
      'Mentor design review & approval'
    ],
    outcome: [
      'Validated project proposal for a real local rural challenge (e.g. Smart Water Level Monitoring, Energy Saver, Smart Waste)'
    ]
  },
  {
    day: 7,
    date: '03 November 2026',
    theme: 'Engineering & Project Development',
    quote: '"Hands-On Prototyping."',
    learn: [
      'Physical enclosure fabrication using local/recycled materials',
      'Neat wiring management & strain relief',
      'Guided problem-solving model: Question → Hint → Demonstration → Implementation'
    ],
    build: [
      'Morning: Complete hardware assembly & breadboarding',
      'Afternoon: Code implementation, sensor calibration, enclosure mounting'
    ],
    outcome: [
      'Fully constructed, working hardware prototype ready for stress testing'
    ]
  },
  {
    day: 8,
    date: '04 November 2026',
    theme: 'Testing, Documentation & Presentation',
    quote: '"Engineering Beyond the Circuit."',
    learn: [
      'Sensor calibration & environmental noise testing',
      'Power supply reliability and fault condition analysis',
      'Structured 10-point technical report writing',
      'Public speaking and technical demonstration skills'
    ],
    build: [
      'Endurance testing of project hardware under real conditions',
      'Team project report compilation & diagram drawing',
      'Presentation rehearsal (3 min speech + 2 min live demo)'
    ],
    outcome: [
      'Complete 10-point technical report & presentation pitch deck for Exhibition Day'
    ]
  },
  {
    day: 9,
    date: '05 November 2026',
    theme: 'PRAYASH Tech Exhibition & Community Demonstration',
    quote: '"Celebrating Innovation & Youth Impact."',
    learn: [
      'Engaging with school administration, parents, and municipality leaders',
      'Effectively demonstrating technology to non-technical stakeholders',
      'Receiving constructive community feedback'
    ],
    build: [
      'Exhibition booth setup across 4 Zones (Basic Electronics, Smart Systems, Community Solutions, Student Innovation)',
      'Live team demonstrations & Q&A sessions'
    ],
    outcome: [
      'Official PRAYASH Tech Exhibition event, student certificates award ceremony, & community handover'
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  renderTimelineNav();
  renderTimelineContent(0); // Default to Day 1
  renderPrintAllDays();
});

function renderTimelineNav() {
  const navContainer = document.getElementById('timelineNav');
  if (!navContainer) return;

  navContainer.innerHTML = DAYS_DATA.map((d, idx) => `
    <button class="timeline-tab ${idx === 0 ? 'active' : ''}" data-index="${idx}">
      <span class="tab-day">Day 0${d.day}</span>
      <span class="tab-title">${d.theme.split('&')[0]}</span>
    </button>
  `).join('');

  navContainer.querySelectorAll('.timeline-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
      navContainer.querySelectorAll('.timeline-tab').forEach(t => t.classList.remove('active'));
      e.currentTarget.classList.add('active');
      renderTimelineContent(idx);
    });
  });
}

function renderTimelineContent(index) {
  const container = document.getElementById('timelineContent');
  if (!container) return;

  const d = DAYS_DATA[index];

  container.innerHTML = `
    <div class="day-detail-container">
      <div class="day-detail-header">
        <div>
          <span class="section-number">Curriculum Stage 0${d.day} • ${d.date}</span>
          <h3 class="heading-secondary">${d.theme}</h3>
          <p class="day-theme-quote">${d.quote}</p>
        </div>
        <span class="day-badge-large">DAY 0${d.day}</span>
      </div>

      <div class="day-content-grid">
        <div class="day-box">
          <div class="day-box-title">
            <svg class="icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            LEARN & UNDERSTAND
          </div>
          <ul class="day-list">
            ${d.learn.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>

        <div class="day-box">
          <div class="day-box-title">
            <svg class="icon" viewBox="0 0 24 24"><path d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14z"/></svg>
            BUILD & EXPERIMENT
          </div>
          <ul class="day-list">
            ${d.build.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>

        <div class="day-box">
          <div class="day-box-title">
            <svg class="icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            DELIVERABLE & OUTCOME
          </div>
          <ul class="day-list">
            ${d.outcome.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;
}

function renderPrintAllDays() {
  const container = document.getElementById('printAllDays');
  if (!container) return;

  container.innerHTML = DAYS_DATA.map(d => `
    <div class="day-detail-container print-day-card">
      <div class="day-detail-header" style="margin-bottom: 0.4rem; padding-bottom: 0.3rem;">
        <div>
          <span class="section-number" style="font-size:0.75rem;">DAY 0${d.day} • ${d.date}</span>
          <h3 class="heading-secondary" style="font-size: 1.05rem; margin:0; text-transform:none;">${d.theme}</h3>
        </div>
      </div>
      <div class="day-content-grid" style="gap: 0.5rem;">
        <div class="day-box" style="padding: 0.5rem;">
          <div class="day-box-title" style="font-size: 0.75rem; margin-bottom:0.3rem;">LEARN</div>
          <ul class="day-list" style="font-size: 0.8rem;">
            ${d.learn.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        <div class="day-box" style="padding: 0.5rem;">
          <div class="day-box-title" style="font-size: 0.75rem; margin-bottom:0.3rem;">BUILD</div>
          <ul class="day-list" style="font-size: 0.8rem;">
            ${d.build.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        <div class="day-box" style="padding: 0.5rem;">
          <div class="day-box-title" style="font-size: 0.75rem; margin-bottom:0.3rem;">OUTCOME</div>
          <ul class="day-list" style="font-size: 0.8rem;">
            ${d.outcome.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `).join('');
}
