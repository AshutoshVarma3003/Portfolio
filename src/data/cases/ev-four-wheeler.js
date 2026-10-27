export default {
  aspect: '16 / 9',
  details: [
    { k: 'Role', v: 'Design and development (sole designer and developer)' },
    { k: 'Context', v: 'AMMACHI Labs, for NCERT (DIKSHA)' },
    { k: 'Tools', v: 'Unity 6, URP, Cinemachine, Unity Splines, Unity Localization, Visual Scripting, DOTween' },
    { k: 'Platforms', v: 'WebGL (desktop and tablet browsers), Android, standalone' },
    { k: 'Languages', v: 'English and Hindi, with voiceover' },
  ],
  sections: [
    {
      title: 'Context and objective',
      blocks: [
        { p: 'The high-voltage parts of an electric vehicle sit inside sealed enclosures and are unsafe to open up, so trainees rarely get to see how they fit together. This simulation gives vocational trainees and engineering students a virtual vehicle they can open up, inspect and follow.' },
        { p: 'The learning goal is to know what the vehicle’s parts are, what each one does, and how energy moves between them when the car charges, accelerates and brakes.' },
      ],
    },
    {
      title: 'Design challenge',
      blocks: [
        { p: 'Two things are invisible in a real car: the components buried under body panels, and the flow of electrical energy. The simulation had to make both visible without overwhelming a first-time learner, and had to work with a mouse, a touchscreen and a browser tab.' },
      ],
    },
    {
      title: 'My contribution',
      blocks: [
        { p: 'I designed and developed the whole simulation: the component exploration, the X-ray view, the power-flow sequences, the camera controls, the English and Hindi text and narration, and the assessment. It sits on AMMACHI Labs’ shared framework for dialogue, quizzes and localisation, and I kept the project-specific logic separate from it.' },
      ],
    },
    {
      title: 'Design process',
      blocks: [
        { p: 'I structured the learning as three phases: structure, function, validation. Learners first see what the parts are, then watch how energy flows between them, and finally prove what they have learned. Each phase unlocks the next, so a learner cannot skip to the animation without having met the components.' },
        { ul: ['Structure: 12 external and 10 internal components, each with a camera move, outline and information card.', 'Function: three animated power-flow modes.', 'Validation: a spatial task in the engine bay and short multiple-choice questions.'] },
      ],
    },
    {
      title: 'Technical implementation',
      blocks: [
        { ul: [
          'Component selection: one component is active at a time. Choosing it moves the camera, outlines the part, opens its card and ticks it off. Progress survives switching between modules.',
          'X-ray view: at runtime the car body’s materials are stored and swapped for a translucent one, then restored on return to normal view, so the models and lighting are untouched.',
          'Power flow: particles travel along curves drawn with Unity Splines, step by step, with play and pause.',
          'Camera: a custom orbit camera with mouse drag, scroll zoom, touch swipe and pinch zoom, angle limits, and protection so dragging on the interface does not spin the view.',
          'Logic: C# managers for components and progress, plus Unity Visual Scripting for dialogue, milestones and quiz branches.',
          'Localisation: English and Hindi strings and synchronised voiceover through Unity Localization.',
        ] },
      ],
    },
    {
      title: 'Educational design',
      blocks: [
        { p: 'The three power-flow modes each tell one story. Learners follow the animated path while an explanation panel lists each hand-off in order.' },
        { flow: [
          { label: 'DC fast charging', steps: ['Charging station', 'Charging port', 'Battery (bypasses the on-board charger)'] },
          { label: 'AC home charging', steps: ['Home socket', 'Charging port', 'On-board charger', 'Battery'] },
          { label: 'Acceleration', steps: ['Accelerator pedal', 'Vehicle control unit', 'Motor controller', 'Inverter', 'Motor', 'Wheels'] },
          { label: 'Regenerative braking', steps: ['Wheels', 'Motor acting as generator', 'Inverter', 'Battery'] },
        ] },
        { p: 'The assessment asks learners to find the vehicle control unit directly in the 3D engine bay, then answer questions on the on-board charger, the inverter and the control unit. Feedback explains why the answer is right, for example why DC fast charging does not need the on-board charger.' },
      ],
    },
    {
      title: 'Decisions and trade-offs',
      blocks: [
        { ul: [
          'Shared framework versus project code: the framework serves many AMMACHI Labs simulations and only part of it is used here, so I kept everything specific to this simulation in separate scripts.',
          'Unlocking order: the power-flow module stays locked until the familiarisation is complete, which trades free exploration for a sound learning order.',
          'Browser and touch targets: one camera controller handles mouse and touch rather than separate versions.',
        ] },
      ],
    },
    {
      title: 'Outcome',
      blocks: [
        { p: 'The result is a complete, bilingual simulation covering the structure, energy flow and assessment described above. I do not have usage figures or learner test results for it, so I make no claims about outcomes here.' },
      ],
    },
  ],
  mediaIntro: 'Every screenshot and recording from this project, in the order a learner meets them.',
  groups: [
    { title: 'Start and module selection', text: 'The start screen offers English and Hindi. Learners then choose between component familiarisation and the power-flow module.', items: [
      { t: 'img', n: 'start-screen', cap: 'Start screen with the English and Hindi language switch.' },
      { t: 'img', n: 'module-selection', cap: 'Module selection: component familiarisation, with the power-flow module next to it.' },
    ] },
    { title: 'Exploring the outside', text: 'Choosing a component from the list moves the camera to it and opens its information card.', items: [
      { t: 'img', n: 'external-components', cap: 'External components list, with a tick against each part already visited.' },
      { t: 'img', n: 'external-components-charging-port', cap: 'Charging port selected, with its information card.' },
      { t: 'vid', n: 'external-component', cap: 'Moving through external components: the camera flies to each part and its card opens.' },
    ] },
    { title: 'Looking inside with X-ray view', text: 'X-ray view makes the body translucent so the learner can see the battery, controllers and motor.', items: [
      { t: 'img', n: 'internal-components', cap: 'X-ray view of the chassis with the internal components list.' },
      { t: 'img', n: 'internal-components-inverter', cap: 'Inverter selected inside the X-ray view, with its information card.' },
      { t: 'vid', n: 'internal-components', cap: 'Stepping through the internal components in X-ray view.' },
    ] },
    { title: 'Following the power flow', text: 'Three modes show energy moving through the vehicle as animated particles.', items: [
      { t: 'img', n: 'power-flow-module', cap: 'Choosing a power-flow mode: DC charging, AC charging or the powertrain.' },
      { t: 'img', n: 'fast-charging', cap: 'DC fast charging: energy travels from the station to the car’s charging port.' },
      { t: 'vid', n: 'fast-charging', cap: 'DC fast charging, followed from the charger into the battery pack.' },
      { t: 'img', n: 'home-charging', cap: 'AC home charging: energy travels from the home charger to the vehicle.' },
      { t: 'vid', n: 'home-charging', cap: 'AC home charging, routed through the on-board charger to the battery.' },
      { t: 'img', n: 'power-train-system-accelerator', cap: 'Powertrain: the accelerator is highlighted as the first step.' },
      { t: 'vid', n: 'powertrain-system', cap: 'Powertrain system, from acceleration to regenerative braking.' },
    ] },
    { title: 'Checking understanding', text: 'A spatial task and a short quiz close the experience.', items: [
      { t: 'img', n: 'assessment', cap: 'Assessment: the learner is asked to click the vehicle control unit among labelled parts in the engine bay.' },
      { t: 'img', n: 'quiz', cap: 'A quiz question on the inverter’s role in the powertrain.' },
    ] },
  ],
};
