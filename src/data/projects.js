// Central project data. Homepage and index fields live here; the full
// case-study content is added per project in Stage 4.
import { credits } from './site.js';

export const projects = [
  {
    slug: 'ev-four-wheeler',
    title: 'EV Four-Wheeler Components',
    kicker: 'Electric vehicle systems',
    summary:
      'A bilingual 3D lab where learners take an electric vehicle apart: 12 external and 10 internal components, an X-ray view of the chassis, animated power flow through charging and regenerative braking, and a spatial assessment.',
    role: 'Design and development',
    tools: ['Unity 6', 'URP', 'Cinemachine', 'Unity Splines', 'Visual Scripting'],
    credit: credits.ncert,
    media: 'ev',
    hero: { name: 'internal-components-inverter', w: 1600, h: 900, alt: 'X-ray view of an electric car chassis in the simulation, with the inverter selected and an information card open.' },
  },
  {
    slug: 'bar-bending-simulator',
    title: 'Bar Bending Simulator',
    kicker: 'Construction skills, with L&T',
    summary:
      'A physical bar bending machine paired with a Unity digital twin, in use at L&T educational centres in India. I modernised the software: the engine upgrade, hardware startup, bug fixes, scoring reports and in-screen guidance.',
    role: 'Software modernisation and on-site deployment',
    tools: ['Unity', 'C#', 'OPC (Kepware)', 'Windows named pipes', 'SQLite'],
    credit: credits.barBending,
    fit: 'contain',
    media: 'bar',
    hero: { name: 'machine-highlighted', w: 1600, h: 1624, alt: 'The Bar Bending Simulator machine: a white cabinet with a tilted touchscreen and a steel bar passing through the bending head.' },
  },
  {
    slug: 'cpr-aed-simulation',
    title: 'Adult CPR & AED Emergency Response',
    kicker: 'Emergency response training',
    summary:
      'A third-person scenario where learners check a collapsed patient, call 112, give compressions and rescue breaths and use an AED, then receive a scored debrief. An in-house AMMACHI Labs project for AMPLE.',
    role: 'Team project; a large share of the development',
    tools: ['Unity 6', 'URP', 'C#', 'WebGL', 'SCORM 2004'],
    credit: credits.ammachi,
    media: 'cpr',
    banner: { name: 'intro', w: 1600, h: 723, alt: 'A restaurant dining room in the simulation, with diners seated at tables near large windows.' },
    hero: { name: 'cpr-process', w: 1600, h: 723, alt: 'First-person view of giving chest compressions, with a heart-rate style counter reading 109 and the label In range.' },
  },
  {
    slug: 'sensor-faucet',
    title: 'Sensor Faucet Installation & Troubleshooting',
    kicker: 'Plumbing and smart fixtures',
    summary:
      'Learners install a sensor faucet (PPE, levelling, drilling, dual AC and battery power, hose connections, sensor test) and then diagnose two faults: a dead battery and a clogged filter.',
    role: 'Design and development',
    tools: ['Unity 6', 'URP', 'Cinemachine', 'Visual Scripting', 'DOTween'],
    credit: credits.ncert,
    media: 'faucet',
    hero: { name: 'spirit-level', w: 1600, h: 900, alt: 'Spirit level shown above a control box, with a Set Angle control to adjust its tilt.' },
  },
  {
    slug: 'logic-robot',
    title: 'Assembling and Programming a Logic Robot',
    kicker: 'Mechatronics',
    summary:
      'Learners assemble and wire a line-follower robot, then set its decision logic by filling a four-state sensor table. The robot runs a track using their rules, and wrong choices get specific feedback.',
    role: 'Design and development',
    tools: ['Unity 6', 'C#', 'Unity Timeline', 'Visual Scripting', 'Localization'],
    credit: credits.ncert,
    media: 'robot',
    hero: { name: 'final-demo', w: 1600, h: 900, alt: 'Robot Logic table assigning an action to each pair of sensor readings, next to a top-down view of the robot on a black track.' },
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
