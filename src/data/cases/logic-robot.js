export default {
  aspect: '16 / 9',
  details: [
    { k: 'Role', v: 'Design and development (sole designer and developer)' },
    { k: 'Context', v: 'AMMACHI Labs, for NCERT (DIKSHA)' },
    { k: 'Tools', v: 'Unity 6, C#, Unity Visual Scripting, Unity Timeline, URP, DOTween, Unity Localization' },
    { k: 'Platforms', v: 'Windows desktop, WebGL, Android and touchscreen kiosks' },
    { k: 'Languages', v: 'English and Hindi, with voiceover' },
  ],
  sections: [
    {
      title: 'Context and objective',
      blocks: [
        { p: 'Mechatronics technicians build machines that sense, decide and move. This simulation follows one example, a line-follower robot, from the parts to a working run, and teaches vocational trainees and engineering students how the pieces fit together.' },
        { p: 'The objective is that a learner can name the robot’s parts, assemble and wire it, and work out the rules that make it follow a line.' },
      ],
    },
    {
      title: 'Design challenge',
      blocks: [
        { p: 'Sensor logic is abstract, and a wrong rule just means the robot fails. The challenge was to turn it into something a learner can handle: a small puzzle with one clear answer per situation, immediate feedback that says why a choice is wrong, and a visible payoff when the robot runs the track.' },
      ],
    },
    {
      title: 'My contribution',
      blocks: [
        { p: 'I designed and developed the simulation: the exploration, the assembly and wiring sequences, the logic puzzle and its checker, the camera, the bilingual text and narration, and the quizzes. It uses AMMACHI Labs’ shared framework for dialogue, quiz and language switching; the mechatronics systems are custom.' },
      ],
    },
    {
      title: 'Design process',
      blocks: [
        { p: 'The flow mirrors how a technician would approach a new robot: safety first, then understanding, building, wiring, programming and testing.' },
        { flow: [
          { label: 'Learner path', steps: ['Choose PPE and tools', 'Explore the parts in 3D', 'Assemble the chassis', 'Wire the electronics', 'Set the sensor logic', 'Run the track test', 'Quiz and recap'] },
        ] },
      ],
    },
    {
      title: 'Technical implementation',
      blocks: [
        { ul: [
          'Logic puzzle: four action blocks are dragged into four slots, one per sensor situation. Blocks snap into place, and the check button only appears when all four slots are full.',
          'Checker: each slot is compared to the correct rule, and a wrong choice produces its own explanation, such as “moving forward causes a collision”, rather than a generic error.',
          'Drag and drop: movement is adjusted for screen scaling, so a block follows the finger or mouse exactly on any display.',
          'Assembly: each screwdriver and nut step is a Unity Timeline animation started by a click. The click is locked while the animation plays, so it cannot be triggered twice.',
          'Visual Scripting: I added a custom node that switches an object on or off, so flow graphs can drive these steps.',
          'Camera: an orbit camera for mouse drag and scroll, or touch swipe and pinch, with limits on tilt and distance.',
          'Localisation: English and Hindi text with synchronised voiceover.',
        ] },
      ],
    },
    {
      title: 'Educational design',
      blocks: [
        { p: 'At the centre is a four-row decision table. Two sensors each read white or black, and the learner chooses the action for each combination.' },
        { table: {
          caption: 'The robot’s decision table (the correct answers)',
          head: ['Left sensor', 'Right sensor', 'What it means', 'Action'],
          rows: [
            ['White', 'White', 'Centred on the line', 'Forward'],
            ['Black', 'White', 'Drifting off, left sensor on the line', 'Turn left'],
            ['White', 'Black', 'Drifting off, right sensor on the line', 'Turn right'],
            ['Black', 'Black', 'Both sensors on the line: the end', 'Stop'],
          ],
        } },
        { p: 'Wiring teaches one principle firmly: the controller, motor driver and battery must share a common ground, or signals have no shared reference. Four quiz questions then check the ideas: which part is a sensor and which an actuator, why a common ground is needed, how the rules reach the robot (written in the Arduino IDE and uploaded over USB), and how to fix sensors that misread the line (move them closer to the floor).' },
      ],
    },
    {
      title: 'Challenges and trade-offs',
      blocks: [
        { ul: [
          'Feedback over a score: the checker explains each wrong choice instead of just failing the learner, which costs more content work but teaches more.',
          'Locking clicks: animations lock their own click targets, trading a short wait for no duplicate triggers.',
          'One camera, two inputs: the same controller handles mouse and touch, so the inspection works on desktops and kiosks alike.',
        ] },
      ],
    },
    {
      title: 'Outcome',
      blocks: [
        { p: 'The result is a complete bilingual simulation from safety to track test. I do not have usage figures or learner results for it, so I make no claims about outcomes.' },
      ],
    },
  ],
  mediaIntro: 'Every screenshot and recording from this project, in the order a learner meets them.',
  groups: [
    { title: 'Safety first', text: 'Before touching the robot, the learner collects protective equipment.', items: [
      { t: 'vid', n: 'ppe', cap: 'Picking up personal protective equipment from the shelf.' },
    ] },
    { title: 'Exploring the robot', text: 'The learner orbits the robot and opens each part’s card.', items: [
      { t: 'img', n: 'explorer-mode-1', cap: 'Explorer mode: the component list and a card on the LDR sensors.' },
      { t: 'img', n: 'explorer-mode-2', cap: 'Explorer mode: the caster wheel highlighted, with its card.' },
      { t: 'img', n: 'free-look-full-body', cap: 'Free look: the whole robot, from the side.' },
      { t: 'vid', n: 'free-look', cap: 'Free look, orbiting the robot during assembly.' },
    ] },
    { title: 'Assembling', text: 'Parts are clicked and dragged into place, and tools fasten them.', items: [
      { t: 'img', n: 'motor-install', cap: 'Fastening a DC motor with a screwdriver.' },
      { t: 'img', n: 'ir-sensor-install', cap: 'Installing the sensors: the prompt reads “Click and drag the IR Sensors”.' },
      { t: 'vid', n: 'installing-ldr-sensors', cap: 'Installing the LDR sensors onto the chassis.' },
      { t: 'vid', n: 'installing-wheels', cap: 'Installing the wheels.' },
    ] },
    { title: 'Wiring', text: 'Wires are dragged to the correct terminals.', items: [
      { t: 'vid', n: 'wiring', cap: 'Connecting wires to the motor driver’s terminals.' },
    ] },
    { title: 'Setting the logic', text: 'Actions are dragged into the four sensor situations.', items: [
      { t: 'img', n: 'logic-setup', cap: 'Robot logic table, with actions waiting to be placed.' },
      { t: 'vid', n: 'logic-system', cap: 'Placing Forward, Turn left, Turn right and Stop into the table.' },
    ] },
    { title: 'Testing and checking', text: 'The robot runs the track using the rules the learner chose.', items: [
      { t: 'img', n: 'final-demo', cap: 'Track test: the completed logic table beside a top-down view of the robot on the track.' },
      { t: 'vid', n: 'final-step-robot-following-logic-and-line', cap: 'The robot following the line using the learner’s rules.' },
      { t: 'img', n: 'quiz', cap: 'A quiz question on which part is the sensor and which is the actuator.' },
    ] },
  ],
};
