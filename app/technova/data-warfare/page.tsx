import type { Metadata } from 'next'
import { ClusterPageLayout } from '@/components/technova/ClusterPageLayout'

export const metadata: Metadata = {
  title: 'Data Warfare | TechNova 2026',
  description: 'Analyze data, extract insights, and code at lightning speed in Data Warfare.',
}

const modules = [
  {
    title: 'Data Analytics Sprint',
    icon: '📊',
    overview:
      'Teams analyze real-world datasets to extract actionable insights and present them using dashboards or visualizations.',
    workflow: [
      'Dataset distribution',
      'Data cleaning & analysis',
      'Visualization/dashboard creation',
      'Insight presentation',
    ],
    focus: ['Analytical Thinking', 'Clarity of Insights', 'Business Relevance'],
    prize: 'PKR 45,000 Prize',
  },
  {
    title: 'Speed Programming Challenge',
    icon: '⚡',
    overview:
      'A time-based competitive coding contest focused on problem-solving and algorithmic efficiency.',
    workflow: [
      'Timed coding rounds',
      'Live leaderboard tracking',
      'Final ranking & winners',
    ],
    focus: ['Accuracy', 'Speed', 'Efficiency'],
    prize: 'PKR 35,000 Prize',
  },
]

export default function DataWarfarePage() {
  return (
    <ClusterPageLayout
      title="Data Warfare"
      subtitle="Extract. Analyze. Dominate."
      icon="📊"
      color="#10b981"
      bgGradient="linear-gradient(135deg, #10b98115, #05966915)"
      description="Data is the new battlefield. In Data Warfare, the fastest analysts and sharpest coders rise to the top. Dissect datasets, generate insights, and code your way to victory."
      modules={modules}
      theme="data-warfare"
    />
  )
}
