import type { Metadata } from 'next'
import { ClusterPageLayout } from '@/components/technova/ClusterPageLayout'

export const metadata: Metadata = {
  title: "Builder's Arena | TechNova 2026",
  description: 'Build full-stack apps, design stunning UI/UX, and launch your startup idea.',
}

const modules = [
  {
    title: 'Full Stack Development Challenge',
    icon: '💻',
    overview:
      'Teams build a complete web-based solution based on a problem/theme revealed at the start of the hackathon.',
    workflow: [
      'Theme announcement',
      'System planning & UI design',
      'Backend + frontend development',
      'Database integration',
      'Live deployment/demo',
      'Final judging',
    ],
    focus: ['Functionality', 'Scalability', 'Technical Implementation'],
    prize: 'PKR 70,000 Prize',
  },
  {
    title: 'UI/UX Design Sprint',
    icon: '🎨',
    overview:
      'Participants design user-centered digital product solutions based on a provided problem statement.',
    workflow: [
      'Problem brief announced',
      'User journey & wireframing',
      'High-fidelity prototype design',
      'UX reasoning presentation',
    ],
    focus: ['Design Thinking', 'Usability', 'Creativity'],
    prize: 'PKR 40,000 Prize',
  },
  {
    title: 'Startup Launchpad (Build + Pitch)',
    icon: '🚀',
    overview:
      'Teams develop a working prototype and pitch a startup idea demonstrating innovation and market potential.',
    workflow: [
      'Idea validation',
      'Prototype development',
      'Business model preparation',
      'Final pitch presentation',
    ],
    focus: ['Innovation', 'Feasibility', 'Business Clarity'],
    prize: 'PKR 60,000 + Incubation Opportunity',
  },
]

export default function BuildersArenaPage() {
  return (
    <ClusterPageLayout
      title="Builder's Arena"
      subtitle="Design. Build. Launch."
      icon="🏗"
      color="#f59e0b"
      bgGradient="linear-gradient(135deg, #f59e0b15, #d9770615)"
      description="The Builder's Arena is where ideas become products. Whether you're engineering a full-stack platform, crafting a stunning UI, or pitching your startup dream — this is your stage."
      modules={modules}
      theme="builders-arena"
    />
  )
}
