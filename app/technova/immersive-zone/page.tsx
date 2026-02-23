import type { Metadata } from 'next'
import { ClusterPageLayout } from '@/components/technova/ClusterPageLayout'

export const metadata: Metadata = {
  title: 'Immersive Zone | TechNova 2026',
  description: 'Compete in game development and eSports at the Immersive Zone.',
}

const modules = [
  {
    title: 'Game Development Challenge',
    icon: '🎮',
    overview:
      'Participants design and build a playable game around a theme revealed at the beginning of the event.',
    workflow: [
      'Theme announcement',
      'Game mechanics planning',
      'Development of playable MVP',
      'Live gameplay demo',
    ],
    focus: ['Creativity', 'Engagement', 'Technical Execution'],
    prize: 'PKR 50,000 Prize',
  },
  {
    title: 'eSports Arena',
    icon: '🕹',
    overview:
      'A competitive gaming tournament conducted alongside the hackathon featuring FIFA, Tekken, CS2, and PUBG.',
    workflow: [
      'Tournament brackets formation',
      'Knockout rounds',
      'Semi-finals & finals',
      'Prize ceremony',
    ],
    focus: ['Skill', 'Strategy', 'Team Coordination'],
    prize: 'PKR 30,000 Prize per Game',
  },
]

export default function ImmersiveZonePage() {
  return (
    <ClusterPageLayout
      title="Immersive Zone"
      subtitle="Play. Create. Conquer."
      icon="🎮"
      color="#f43f5e"
      bgGradient="linear-gradient(135deg, #f43f5e15, #e11d4815)"
      description="Where creativity meets competition in the digital playground. Build immersive game experiences from scratch, or battle it out in the eSports arena — the Immersive Zone is where champions are made."
      modules={modules}
      theme="immersive-zone"
    />
  )
}
