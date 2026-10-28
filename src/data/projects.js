// Central project data. Homepage and index fields live here; the full
// case-study content is added per project in Stage 4.
import { credits, coverCredits } from './site.js';

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
    cover: true,
    coverCredit: coverCredits.magnific,
    fit: 'contain',
    bg: '#003152',
    hero: { name: 'cover', w: 1600, h: 1600, alt: 'Cover illustration: a cut-away diagram of a car showing its chassis and drivetrain parts.' },
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
    cover: true,
    coverCredit: coverCredits.magnific,
    fit: 'contain',
    bg: '#ffffff',
    hero: { name: 'cover', w: 1600, h: 1051, alt: 'Cover illustration: two paramedics giving chest compressions and ventilation to a patient on a stretcher.' },
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
    cover: true,
    coverCredit: coverCredits.pexels,
    hero: { name: 'cover', w: 1600, h: 1067, alt: 'Cover photograph: hands under water running from a sensor faucet into a white basin.' },
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
    cover: true,
    coverCredit: coverCredits.magnific,
    hero: { name: 'cover', w: 1600, h: 1067, alt: 'Cover photograph: a four-wheeled line-follower robot with wiring and sensors, seen from above.' },
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
