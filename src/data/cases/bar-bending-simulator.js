export default {
  aspect: '3 / 2',
  details: [
    { k: 'Role', v: 'Software modernisation, systems integration and on-site deployment' },
    { k: 'Context', v: 'AMMACHI Labs, for L&T Construction Skills Training Institutes (CSTI)' },
    { k: 'Date', v: 'May 2026' },
    { k: 'Tools', v: 'Unity (upgraded from 5.4 to a current LTS), C#, OPC (Kepware), Windows named pipes, SQLite, PDF generation' },
    { k: 'Deployed at', v: 'L&T educational centres in India, including CSTI Pilkhuwa (Uttar Pradesh), CSTI Jadcherla (Hyderabad) and CSTI Mayurbhanj (Odisha)' },
  ],
  sections: [
    {
      title: 'Context and objective',
      blocks: [
        { p: 'Reinforced concrete depends on steel bars cut and bent to exact shapes. A wrong angle or side length weakens a structure and wastes steel. L&T’s training institutes teach this on a physical bar bending workstation paired with a Unity digital twin: sensors on the machine report how far the bar is fed and how far the lever has turned, and the simulation shows the bend and scores it.' },
        { p: 'Trainees can practise the shapes without injury or wasted steel. This was an existing simulator; my job was to bring it up to date and make it dependable in the field.' },
      ],
    },
    {
      title: 'What I inherited',
      blocks: [
        { table: {
          caption: 'Problems in the existing system and what I changed',
          head: ['Problem', 'What I changed'],
          rows: [
            ['Built on Unity 5.4, with obsolete APIs and 32-bit native libraries', 'Upgraded the project to a current LTS release, replaced deprecated calls and moved the native libraries to 64-bit'],
            ['Instructors had to start the hardware software by hand, in the right order, or the simulator failed silently', 'Made the hardware link start and stop automatically in the background when the simulator opens'],
            ['The bar could freeze mid-bend or stop responding to the lever', 'Fixed the synchronisation fault and added recovery so feed distance and bend angle are tracked continuously'],
            ['Attempt records did not save, scores were inconsistent, PDF reports failed', 'Moved the database to a writable location, corrected the attempt queries and restored the PDF assessment report'],
            ['Screens gave little guidance, and many trainees have limited computer experience', 'Redesigned the interface and added an information button on every screen'],
          ],
        } },
      ],
    },
    {
      title: 'My contribution',
      blocks: [
        { p: 'I modernised the software, fixed the faults above and carried the update out on site. At the centres I checked each machine against the software, calibrated it, installed the new build and went through the workflow with the instructors. The original simulator and hardware were not mine.' },
      ],
    },
    {
      title: 'Design challenge',
      blocks: [
        { p: 'The software had to work with real, ageing machines, not a clean test bench. Sensor offsets differed from one unit to the next, and the computers ran everything from older Windows 7 industrial PCs to Windows 10. A fix that worked on my machine was not a fix.' },
      ],
    },
    {
      title: 'Technical implementation',
      blocks: [
        { p: 'Telemetry travels from the machine to the simulation in one direction, and the same chain ends in a scored report.' },
        { flow: [
          { label: 'From machine to report', steps: ['Machine sensors (bar feed, lever angle, stop flags)', 'Hardware link (OPC), started automatically', 'Windows named pipe', 'Unity digital twin (procedural rebar mesh)', 'Local SQLite record of each trial', 'PDF assessment report'] },
        ] },
        { ul: [
          'Zero-touch start: a launcher script starts the background hardware processes without visible windows and shuts them down on exit, releasing the ports they held.',
          'Bending: the rebar is a mesh generated while the lever moves. I handled reversal of the lever and the return to home position so a learner can bend several times in sequence, for example four 90° bends for a square stirrup.',
          'Reports: the PDF compares the learner’s side lengths, diagonals (to check squareness), hook lengths and angles against tolerances, along with total time.',
        ] },
      ],
    },
    {
      title: 'Educational design',
      blocks: [
        { p: 'The simulator offers guided practice and formal evaluation across seven standard shapes, each measured against its own tolerances.' },
        { table: {
          caption: 'Shapes supported and what each report checks',
          head: ['Shape', 'Used for', 'What is measured'],
          rows: [
            ['Square stirrup', 'Column and beam links', 'Four sides, two diagonals, 135° hooks'],
            ['Rectangle stirrup', 'Beam and column ties', 'Long and short sides, diagonals, hooks'],
            ['Triangle stirrup', 'Non-standard links', 'Three sides, vertex angles, hooks'],
            ['Diamond stirrup', 'Specialised cages', 'Side lengths, internal angles'],
            ['Hexagon stirrup', 'Heavy column cages', 'Six sides, 120° facets'],
            ['Circular hoop', 'Piles and tanks', 'Curvature, overlap length'],
            ['Crank bar', 'Slabs and shear beams', '45° and 60° bends, straight lengths'],
          ],
        } },
        { p: 'The information button opens an overlay that explains the current step, the target dimensions and the machine controls, so trainees can work at their own pace without waiting for an instructor.' },
      ],
    },
    {
      title: 'Challenges and trade-offs',
      blocks: [
        { ul: [
          'Per-machine calibration: software parameters were adjusted to match each machine’s own sensors rather than assuming identical hardware.',
          'Old and new Windows: the automatic start-up was tested and adapted to run on both without permission errors or missing-library pop-ups.',
          'Keeping one codebase: I kept the guidance pattern consistent so new exercise screens inherit the information button.',
        ] },
      ],
    },
    {
      title: 'Outcome',
      blocks: [
        { p: 'Instructors now open the simulator by launching one application and the hardware link comes up by itself. I do not have usage figures or learner results for the deployment, so I make no further claims about outcomes.' },
      ],
    },
  ],
  mediaIntro: 'Only two photographs of the machine are available for this project, because the simulator is installed at training centres. Both are credited to AMMACHI Labs and L&T.',
  groups: [
    { title: 'The machine', text: 'A workstation with a tilted touchscreen, a feed and bending head, and an electronics cabinet.', items: [
      { t: 'img', n: 'machine-highlighted', fit: 'contain', cap: 'The Bar Bending Simulator workstation: a white cabinet with a tilted touchscreen, and a steel bar passing through the bending head.' },
      { t: 'img', n: 'digital-twin-in-use', cap: 'A trainee using the simulator at a training centre.' },
    ] },
  ],
};
