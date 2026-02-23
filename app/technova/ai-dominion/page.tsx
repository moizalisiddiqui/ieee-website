import type { Metadata } from 'next'
import { ClusterPageLayout } from '@/components/technova/ClusterPageLayout'

export const metadata: Metadata = {
  title: 'AI Dominion | TechNova 2026',
  description: 'Compete in cutting-edge AI challenges: Agentic AI, Generative AI, ML, and Prompt Engineering.',
}

const modules = [
  {
    title: 'Agentic AI Systems Challenge',
    icon: '🤖',
    overview:
      'Teams design and develop autonomous AI agent systems capable of reasoning, decision-making, memory handling, and task execution using LLMs and external tools.',
    workflow: [
      'Problem statement revealed at opening ceremony',
      'Teams design agent architecture (roles, tools, memory flow)',
      'Development phase (24–48 hours)',
      'Integration with APIs or automation tools',
      'Live demo of working system',
      'Final presentation & Q&A',
    ],
    focus: ['Innovation', 'Autonomy', 'Technical Depth', 'Real-world Applicability'],
    prize: 'PKR 80,000 Prize',
  },
  {
    title: 'Generative AI Innovation Track',
    icon: '✨',
    overview:
      'Participants build AI-powered products such as assistants, automation tools, content generators, or domain-specific AI solutions addressing real problems.',
    workflow: [
      'AI categories or themes announced',
      'Idea validation & feature planning',
      'MVP development using AI models',
      'Functional demo submission',
      'Product pitch to judges',
    ],
    focus: ['Creativity', 'Usability', 'AI Integration Quality'],
    prize: 'PKR 60,000 Prize',
  },
  {
    title: 'Prompt Engineering Championship',
    icon: '💬',
    overview:
      'A competitive challenge focused on crafting optimized prompts to generate high-quality AI outputs for complex real-world tasks.',
    workflow: [
      'Multiple AI task rounds',
      'Prompt crafting under time constraints',
      'Output comparison & optimization',
      'Scoring based on accuracy and efficiency',
    ],
    focus: ['Strategy', 'Clarity', 'Output Optimization'],
    prize: 'PKR 30,000 Prize',
  },
  {
    title: 'Machine Learning Challenge',
    icon: '🧠',
    overview:
      'Participants develop predictive or classification models using provided datasets to solve a defined problem.',
    workflow: [
      'Dataset and problem released',
      'Data preprocessing & feature engineering',
      'Model training & evaluation',
      'Results presentation with explanation',
    ],
    focus: ['Model Performance', 'Methodology', 'Understanding'],
    prize: 'PKR 50,000 Prize',
  },
]

export default function AIDominionPage() {
  return (
    <ClusterPageLayout
      title="AI Dominion"
      subtitle="Where Intelligence Meets Innovation"
      icon="🤖"
      color="#00d4ff"
      bgGradient="linear-gradient(135deg, #00d4ff15, #0891b215)"
      description="Enter the realm of artificial intelligence. From autonomous agents to generative models, AI Dominion is where the most cutting-edge minds compete to build the future of intelligent systems."
      modules={modules}
      theme="ai-dominion"
    />
  )
}
