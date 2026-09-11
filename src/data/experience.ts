export interface ExperienceEntry {
  title: string;
  organization: string;
  period: string;
  description?: string;
}

export const education: ExperienceEntry[] = [
  {
    title: 'Ph.D. in Computer Science',
    organization: 'North Dakota State University',
    period: 'Expected May 2031',
  },
  {
    title: 'B.S. in Computer Science',
    organization: 'Minnesota State University Moorhead',
    period: 'May 2026',
    description: 'Graduated with a 3.95 GPA.',
  },
  {
    title: 'B.Sc. in Civil Engineering',
    organization: 'University of Duhok',
    period: 'June 2018',
  },
];

export const experience: ExperienceEntry[] = [
  {
    title: 'IT Service Center Consultant (Tier 1)',
    organization: 'North Dakota State University',
    period: 'August 2026 – Present',
    description: 'Provide technical support to students, faculty, and staff. Troubleshoot computer and network connectivity issues, document support requests, and escalate complex problems to ITS specialists.',
  },
  {
    title: 'Learning Assistant & Grader',
    organization: 'Minnesota State University Moorhead',
    period: 'August 2024 – January 2026',
    description: 'Taught Python and software fundamentals through assignment feedback, debugging, and individual programming support.',
  },
  {
    title: 'Undergraduate Research',
    organization: 'Minnesota State University Moorhead',
    period: 'December 2024 – May 2025',
    description: 'Investigated Function-as-a-Service performance across edge and cloud environments, with a focus on benchmarking, latency, and scalability.',
  },
  {
    title: 'ACM President',
    organization: 'Minnesota State University Moorhead - ACM',
    period: 'January 2024 – January 2026',
    description: 'Led more than 10 technical workshops, programming competitions, resume clinics, and project-based activities.',
  },
];
