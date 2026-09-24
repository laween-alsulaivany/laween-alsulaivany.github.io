export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  title: string;
  description: string;
  image?: ProjectImage;
  repoUrl: string;
  liveUrl?: string;
  downloadUrl?: string;
  downloadLabel?: 'Download' | 'Releases';
  order: number;
}

const placeholderImage: ProjectImage = {
  src: '/images/projects/placeholder.svg',
  alt: 'Placeholder image; a project screenshot will be added later.',
  width: 800,
  height: 450,
};

export const projects: Project[] = [
  {
    title: 'TinyNetUse',
    description: 'A Windows utility for monitoring upload and download speeds in a movable desktop overlay, with an optional history graph and configurable appearance.',
    image: {
      src: '/images/projects/tinynetuse.webp',
      alt: 'TinyNetUse desktop overlay showing current download and upload speeds.',
      width: 744,
      height: 360,
    },
    repoUrl: 'https://github.com/laween-alsulaivany/TinyNetUse',
    downloadUrl: 'https://github.com/laween-alsulaivany/TinyNetUse/releases/latest',
    downloadLabel: 'Releases',
    order: 1,
  },
  {
    title: 'Course Headcounts',
    description: 'A web app for searching and analyzing MSUM course enrollment. I contributed to the front-end redesign and handled Docker deployment, infrastructure, and the data pipeline.',
    image: {
      src: '/images/projects/course-headcounts.webp',
      alt: 'Course Headcounts project banner with a graduation-cap symbol.',
      width: 2172,
      height: 724,
    },
    repoUrl: 'https://github.com/laween-alsulaivany/headcounts-web',
    liveUrl: 'https://ash.mnstate.edu/',
    order: 2,
  },
  {
    title: 'Dark Souls III Reinforcement Learning',
    description: 'A PPO training environment for the Iudex Gundyr boss fight. Reads game state through memory pointers and automates actions and episode resets. Developed from a class collaboration.',
    image: {
      src: '/images/projects/DSIII.webp',
      alt: 'Dark Souls III running beside the training code, console output, and Cheat Engine game-state tools.',
      width: 1920,
      height: 1080,
    },
    repoUrl: 'https://github.com/laween-alsulaivany/Beating-Dark-Souls-III-Ludex-Gundyr-with-Reinforcement-Learning',
    order: 3,
  },
  {
    title: 'LA UI',
    description: 'My reusable CSS design system for application interfaces. Shared tokens, layouts, and components keep styling consistent across projects, including this portfolio.',
    image: {
      src: '/images/projects/la-ui.webp',
      alt: 'LA UI logo and style guide wordmark.',
      width: 400,
      height: 132,
    },
    repoUrl: 'https://github.com/laween-alsulaivany/LA_UI',
    liveUrl: 'https://laween.dev/LA_UI/',
    order: 4,
  },
  {
    title: 'ACM Interactive Display',
    description: 'A campus-themed game for the MSUM Computer Science hallway display. Players guide the ACM mascot past moving obstacles using keyboard or touch-pad controls.',
    image: {
      src: '/images/projects/acm.webp',
      alt: 'ACM Interactive Display project banner with the ACM mascot.',
      width: 400,
      height: 132,
    },
    repoUrl: 'https://github.com/laween-alsulaivany/acm-interactive-display',
    order: 5,
  },
  {
    title: 'Football-cli',
    description: 'A command-line interface for keeping up with football games and your favorite teams.',
    image: {
      src: '/images/projects/football.png',
      alt: 'Football-cli terminal screenshot.',
      width: 400,
      height: 132,
    },
    repoUrl: 'https://github.com/laween-alsulaivany/football-cli',
    order: 5,
  },
  {
    title: 'Should I Care?',
    description: 'A small web app for figuring out whether a message, email, notice, or other chunk of text actually needs your attention.',
    image: {
      src: '/images/projects/shouldicare.png',
      alt: 'Should I Care? project icon.',
      width: 400,
      height: 132,
    },
    repoUrl: 'https://github.com/laween-alsulaivany/CCVS',
    order: 6,
  },
  {
    title: 'wherewasi',
    description: 'A tiny CLI tool that remembers where you left off.',
    image: {
      src: '/images/projects/wherewasi.png',
      alt: 'wherewasi terminal screenshot.',
      width: 400,
      height: 132,
    },
    repoUrl: 'https://github.com/laween-alsulaivany/CCVS',
    order: 6,
  },
  {
    title: 'Collaborative Chess Voting System',
    description: 'An asynchronous team chess system used at MSUM. Players vote on moves to make decisions together during a shared game.',
    image: {
      src: '/images/projects/chess.webp',
      alt: 'Collaborative Chess Voting System interface showing a chessboard and voting options.',
      width: 400,
      height: 132,
    },
    repoUrl: 'https://github.com/laween-alsulaivany/CCVS',
    order: 6,
  },
  {
    title: 'ReqWatcher',
    description: 'A command-line tool that records installed Python packages in a requirements file, with configurable output, package listing, and undo support.',
    image: {
      src: '/images/projects/reqwatcher.webp',
      alt: 'ReqWatcher command-line tool interface.',
      width: 400,
      height: 132,
    },
    repoUrl: 'https://github.com/laween-alsulaivany/reqwatcher',
    order: 7,
  },
  {
    title: 'Sudoku Solver',
    description: 'A Python backtracking solver with step-by-step console visualization, puzzle validation, and several ways to enter a puzzle.',
    image: {
      src: '/images/projects/Sudoku.webp',
      alt: 'Sudoku puzzle being solved step-by-step in the console.',
      width: 400,
      height: 132,
    },
    repoUrl: 'https://github.com/laween-alsulaivany/sudoku_solver',
    order: 8,
  },
];
