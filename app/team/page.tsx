import type { Metadata } from 'next'
import { TeamGrid } from '@/components/TeamGrid'

export const metadata: Metadata = {
  title: 'Team | IEEE Student Branch',
  description: 'Meet the core team behind IEEE Student Branch at NED University.',
}

export default function TeamPage() {
  return (
    <div style={{ paddingTop: '100px' }}>
      <TeamGrid />
    </div>
  )
}
