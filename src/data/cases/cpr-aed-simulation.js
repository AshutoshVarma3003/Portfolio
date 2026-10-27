export default {
  aspect: '1594 / 720',
  details: [
    { k: 'Role', v: 'Team project; I did a large share of the development' },
    { k: 'Context', v: 'In-house AMMACHI Labs project, built for AMPLE' },
    { k: 'Tools', v: 'Unity 6, URP, C#, TextMeshPro, SCORM 2004 (4th edition), WebGL JavaScript bridge' },
    { k: 'Platforms', v: 'Responsive WebGL (touch and desktop), Android, standalone' },
    { k: 'Guidance', v: 'Aligned with AHA and ERC adult basic life support guidance' },
  ],
  sections: [
    {
      title: 'Context and objective',
      blocks: [
        { p: 'When someone collapses in public, what a bystander does in the first minutes matters. Practising on a manikin or watching a video does not recreate the setting, does not check the order of actions, and does not report results to a learning system.' },
        { p: 'This simulation puts the learner in a restaurant where a diner has collapsed. They work through the chain of survival: check the scene, check the patient, call 112, give compressions and rescue breaths, use an AED, and then review a scored debrief.' },
      ],
    },
    {
      title: 'Design challenge',
      blocks: [
        { p: 'In CPR the order of actions is part of the skill: a shock before everyone is clear, or compressions before checking the patient, are serious errors. The simulation therefore had to record what the learner did and in what order, judge it fairly, explain the mistakes, and run on both touchscreens and desktops.' },
      ],
    },
    {
      title: 'My contribution',
      blocks: [
        { p: 'This was a team project at AMMACHI Labs. I worked on a large share of its development across many parts of the system. Because the pieces depend on each other, I describe the simulation as a whole below rather than split it by person.' },
      ],
    },
    {
      title: 'Design process',
      blocks: [
        { p: 'The simulation comes in two pathways. Guided mode scaffolds the learner with a tutorial video, interface call-outs, step prompts and a metronome. Assessment mode runs the same scenario with no prompts. The editions are built from separate build profiles so each boots directly into its own mode.' },
        { flow: [
          { label: 'Assessment scenario', steps: ['Survey the scene', 'Shoulder tap', 'Breathing and pulse check (up to 10 s)', 'Call 112', 'Expose chest, choose hand position', '30 compressions at 100–120 per minute', 'Head tilt and 2 rescue breaths', 'Fetch the AED', 'Place both pads', 'Stand clear during analysis', 'Deliver the shock', 'Resume compressions', 'Paramedic handover'] },
        ] },
      ],
    },
    {
      title: 'Technical implementation',
      blocks: [
        { ul: [
          'Evidence log and debrief: everything the learner does is recorded once as a timestamped event log. The scoring, the error detection and the report all read from that same record, so they cannot disagree.',
          'Compression rhythm: each press interval is classified as in range, too fast or too slow against the 100–120 per minute target, and long pauses are flagged.',
          'Touch or desktop: tablets often present themselves as desktop browsers, so the simulation asks the browser whether the main pointer is coarse (touch) rather than relying on its name, and shows the on-screen joystick only when needed.',
          'AED: the electrode cables are drawn as a flexible line that sags and rests on surfaces as a pad is dragged, and pads snap to the correct places on the chest.',
          'LMS reporting: results are sent to a learning management system using SCORM 2004, including completion, score, pass or fail, session time and a detailed breakdown.',
          'Tutorial video: the tutorial adapts to the device, with touch gestures or mouse and keyboard, and movement is locked while it plays.',
        ] },
      ],
    },
    {
      title: 'Educational design',
      blocks: [
        { p: 'Feedback is concrete and happens in the moment: the compression counter shows the current rate and whether it is in range, the chest visibly rises on a good breath, and the AED announces its steps.' },
        { p: 'The debrief ranks problems by seriousness. Critical errors, such as starting CPR before checking the patient, giving breaths before opening the airway, shocking without clearing, or not resuming CPR after the shock, stop a learner from receiving a “strong” rating. Each score category is weighted by importance.' },
        { bars: { caption: 'Weights of scored categories as documented (points)', max: 10, items: [
          { label: 'Responsiveness checked', value: 10 },
          { label: '112 called', value: 10 },
          { label: 'Compression rhythm (proportional)', value: 10 },
          { label: 'Correct order of actions', value: 10 },
          { label: 'Scene survey', value: 5 },
          { label: 'Breathing and pulse checked', value: 5 },
          { label: 'AED retrieved', value: 5 },
          { label: 'Hand position', value: 5 },
          { label: 'Full set of 30 compressions', value: 5 },
          { label: 'No long pauses', value: 5 },
          { label: 'Airway opened before breaths', value: 5 },
          { label: 'Both pads placed', value: 5 },
          { label: 'AED sequence complete, CPR resumed', value: 5 },
        ] } },
      ],
    },
    {
      title: 'Challenges and trade-offs',
      blocks: [
        { ul: [
          'Tablets that pose as desktops: an iPad learner was being told to press a keyboard key with no touch controls on screen. Detecting the pointer type fixed that.',
          'Video in the browser: turning off the audio track of the tutorial videos removed a startup stutter caused by audio buffering in WebGL.',
          'Separating logic from presentation: sounds and visuals react to gameplay events rather than being driven by them, which keeps the rules testable.',
        ] },
      ],
    },
    {
      title: 'Outcome',
      blocks: [
        { p: 'The result is a complete scenario with guided and assessed editions, a debrief and LMS reporting, built for AMPLE. I do not have learner data for it, so I make no claims about training outcomes.' },
      ],
    },
  ],
  mediaIntro: 'All screenshots and recordings from this project, grouped by the step of the scenario they show.',
  groups: [
    { title: 'Opening and moving around', text: 'The scenario starts in a restaurant. The learner walks around and looks at the scene before acting.', items: [
      { t: 'img', n: 'intro', cap: 'The restaurant at the start of the scenario.' },
      { t: 'vid', n: 'intro', cap: 'Scenario opening, with the diner collapsing at the table.' },
      { t: 'vid', n: 'movement-and-camera', cap: 'Walking around the restaurant and looking at the scene with the on-screen joystick.' },
    ] },
    { title: 'Checking the patient', text: 'Responsiveness comes first, then breathing and pulse.', items: [
      { t: 'img', n: 'lying-down', cap: 'Check for a response: hotspots on the patient’s shoulder and neck.' },
      { t: 'vid', n: 'tapping-shoulder', cap: 'Tapping the shoulder to check for a response.' },
      { t: 'vid', n: 'checking-pulse', cap: 'Holding at the neck to check the pulse.' },
    ] },
    { title: 'Calling for help', text: 'The learner picks up a phone and dials 112.', items: [
      { t: 'img', n: 'calling-ems', cap: 'Calling emergency services on a phone, with bystanders around the patient.' },
      { t: 'vid', n: 'calling-ems', cap: 'Dialling 112 and connecting to the emergency service.' },
    ] },
    { title: 'Chest compressions', text: 'The learner presses to a target rate and sees live feedback.', items: [
      { t: 'img', n: 'cpr-process', cap: 'Giving compressions, with the rate counter showing 109 and “In range”.' },
      { t: 'vid', n: 'cpr-process', cap: 'Compressions with live rate feedback and a progress bar.' },
    ] },
    { title: 'Rescue breaths', text: 'The airway is opened first, then each breath is held for about a second.', items: [
      { t: 'img', n: 'rescue-breath', cap: 'Giving a rescue breath, with a breath counter at the top.' },
      { t: 'vid', n: 'rescue-breaths', cap: 'Giving rescue breaths after opening the airway.' },
    ] },
    { title: 'Using the AED', text: 'Pads are dragged onto the chest, and the learner must stand clear before a shock.', items: [
      { t: 'img', n: 'aed', cap: 'Attaching the AED pads: each pad is dragged onto the bare chest.' },
      { t: 'vid', n: 'aed-pad-placement', cap: 'Placing the pads, then the “Stand clear” prompt.' },
    ] },
  ],
};
