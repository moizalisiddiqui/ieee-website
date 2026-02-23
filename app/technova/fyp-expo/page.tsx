import type { Metadata } from 'next'
import { ClusterPageLayout } from '@/components/technova/ClusterPageLayout'

export const metadata: Metadata = {
  title: 'FYP Innovation Expo | TechNova 2026',
  description: 'Showcase your Final Year Project at TechNova 2026 FYP Innovation Expo.',
}

const modules = [
  {
    title: 'FYP Innovation Expo',
    icon: '🏆',
    overview:
      'Final Year Projects are showcased and evaluated for technical excellence, innovation, and real-world impact. A prestigious platform for graduating engineers to present their work to industry experts, judges, and peers.',
    workflow: [
      'Registration & booth assignment',
      'Booth setup and demonstration preparation',
      'Live demonstration to judges and attendees',
      'Technical Q&A with expert panel',
      'Evaluation & ranking',
      'Awards ceremony',
    ],
    focus: ['Innovation', 'Technical Depth', 'Applicability', 'Presentation Quality'],
    prize: 'PKR 75,000 + Industry Recognition',
  },
]

export default function FYPExpoPage() {
  return (
    <ClusterPageLayout
      title="FYP Innovation Expo"
      subtitle="Showcase Your Innovation to the World"
      icon="🏆"
      color="#8b5cf6"
      bgGradient="linear-gradient(135deg, #8b5cf615, #7c3aed15)"
      description="The FYP Innovation Expo is a premier showcase where final year engineering students present their most ambitious projects to industry leaders, academics, and peers. This is your moment to shine."
      modules={modules}
      theme="fyp-expo"
    />
  )
}
