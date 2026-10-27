export default {
  aspect: '16 / 9',
  details: [
    { k: 'Role', v: 'Design and development (sole designer and developer)' },
    { k: 'Context', v: 'AMMACHI Labs, for NCERT (DIKSHA)' },
    { k: 'Tools', v: 'Unity 6, URP, Cinemachine, Unity Localization, Visual Scripting, DOTween, water and surface shaders' },
    { k: 'Platforms', v: 'WebGL (touch and desktop), Android, standalone' },
    { k: 'Languages', v: 'English and Hindi, with voiceover' },
  ],
  sections: [
    {
      title: 'Context and objective',
      blocks: [
        { p: 'Public buildings increasingly use touchless sensor faucets. Fitting and servicing one takes two skills at once: ordinary plumbing (hoses, fittings, valves, filters) and low-voltage electronics (a solenoid valve, a sensor, AC power with a battery backup).' },
        { p: 'The simulation teaches vocational trainees and engineering students to install a sensor faucet and then diagnose and fix the faults that come up in use.' },
      ],
    },
    {
      title: 'Design challenge',
      blocks: [
        { p: 'A real installation is a long chain of small hands-on tasks done in a sensible order. The simulation had to let learners physically perform each of them, with tools, in the right order, and make the electrical and water logic behave correctly, so that skipping a step visibly stops the faucet from working.' },
      ],
    },
    {
      title: 'My contribution',
      blocks: [
        { p: 'I designed and developed the simulation end to end: the installation and troubleshooting flows, every tool interaction, the water and sensor behaviour, the cameras, the bilingual text and narration, and the quizzes. It uses AMMACHI Labs’ shared framework for dialogue, quizzes and localisation; everything specific to plumbing is custom.' },
      ],
    },
    {
      title: 'Design process',
      blocks: [
        { p: 'I structured the training as two modules the learner chooses between, following how the trade is learned: first build it, then fix it.' },
        { flow: [
          { label: 'Module 1: installation', steps: ['Choose PPE and tools', 'Clean the basin and components', 'Seat the faucet', 'Level, mark, drill and fasten the control box', 'Fit the battery pack and connect AC power', 'Connect the supply hoses', 'Open the valve and test with a hand'] },
          { label: 'Module 2: troubleshooting', steps: ['Dead batteries: shut the water, open the box, replace the batteries, retest', 'Weak flow: shut the water, detach the hose, clean the filter, refit, retest'] },
        ] },
      ],
    },
    {
      title: 'Technical implementation',
      blocks: [
        { ul: [
          'Spirit level: the learner drags the level onto the control box and uses a Set Angle control to adjust the tilt. When the angle is within about 1.5° of level, the step completes and the next one unlocks.',
          'Marking, drilling, fastening: a pencil marks the anchor points, the drill makes the holes with sound and debris, and the screwdriver drives the fasteners in.',
          'Battery box: the box tracks each of the four cells and only lets the lid close when all are seated.',
          'Water and sensor logic: the stop valve is a quarter-turn control. The sensor only releases water if the valve is open, the unit has power and the filter is clean, which makes the troubleshooting faults real.',
          'Cameras: Cinemachine cameras give a wide view of the room and close views for the sink, control box, spirit level, battery box and filter.',
          'Flow control: a Visual Scripting graph drives the dialogue, step banners, quizzes and branching, with English and Hindi text and voiceover.',
        ] },
      ],
    },
    {
      title: 'Educational design',
      blocks: [
        { p: 'Each step is paired with a reason. The level matters because a tilted box strains the solenoid and the fittings. The battery backup is there so the faucet works during a power cut. The valve is shut before anything is opened, because safety comes first.' },
        { p: 'Eight quiz questions across the flow check these ideas, including dual AC and battery power, level mounting and regular filter cleaning. Feedback explains the answer instead of only marking it right or wrong.' },
      ],
    },
    {
      title: 'Challenges and trade-offs',
      blocks: [
        { ul: [
          'Order over freedom: the flow guides one step at a time. That gives up open-ended play in exchange for a learning sequence that matches real work.',
          'Closed-loop faults: tying water flow to power, valve and filter state means the same mechanics serve both the installation and the troubleshooting module.',
          'Shared framework: framework code stays untouched and plumbing logic lives in its own scripts.',
        ] },
      ],
    },
    {
      title: 'Outcome',
      blocks: [
        { p: 'The result is a complete bilingual simulation covering installation and two fault scenarios. I do not have usage figures or learner results for it, so I make no claims about outcomes.' },
      ],
    },
  ],
  mediaIntro: 'Every screenshot and recording from this project, in the order a learner meets them.',
  groups: [
    { title: 'Start and tool selection', text: 'The learner begins at the start screen, then picks the components needed for the job.', items: [
      { t: 'img', n: 'start-screen', cap: 'Start screen of the sensor faucet simulation, with the English and Hindi language switch.' },
      { t: 'img', n: 'component-selection', cap: 'Component selection: faucet, supply hose, control box, wrench, spirit level, drill and AC wire.' },
    ] },
    { title: 'Cleaning and preparing', text: 'Components and the basin are wiped with a cloth before they are fitted.', items: [
      { t: 'img', n: 'cleaning-faucet', cap: 'Cleaning the faucet with a cloth.' },
      { t: 'vid', n: 'cleaning-faucet', cap: 'Wiping the faucet clean.' },
      { t: 'vid', n: 'cleaning-control-box', cap: 'Wiping the control box clean.' },
      { t: 'vid', n: 'cleaning-sink', cap: 'Wiping the wash basin.' },
    ] },
    { title: 'Mounting the control box', text: 'The control box must be level before the anchor holes are marked.', items: [
      { t: 'img', n: 'spirit-level', cap: 'Aligning the spirit level, with the Set Angle control.' },
      { t: 'img', n: 'control-box', cap: 'Marking the drill areas on the wall next to the control box.' },
      { t: 'vid', n: 'setting-spirit-level', cap: 'Placing the spirit level and adjusting its angle until the box is level.' },
    ] },
    { title: 'Power', text: 'Four cells go into the battery case, which then goes into the control box.', items: [
      { t: 'img', n: 'batteries-in-battery-case', cap: 'Batteries and the battery case, as the control box is powered up.' },
      { t: 'vid', n: 'inserting-battery-pack', cap: 'Inserting the battery pack into the control box.' },
    ] },
    { title: 'Water connection', text: 'The supply hoses link the stop valve, the control box and the faucet.', items: [
      { t: 'img', n: 'connecting-supply-hose', cap: 'Connecting the supply hose with the wrench.' },
    ] },
    { title: 'Testing and checking', text: 'A virtual hand under the spout triggers the sensor, and a quiz closes the flow.', items: [
      { t: 'img', n: 'testing-faucet', cap: 'Testing the water flow with a hand under the spout.' },
      { t: 'vid', n: 'final-demo-after-completion', cap: 'The finished faucet running when the hand enters the sensor’s range.' },
      { t: 'img', n: 'quiz', cap: 'A quiz question on why a sensor faucet has both AC power and a battery backup.' },
    ] },
  ],
};
