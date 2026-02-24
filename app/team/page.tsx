import type { Metadata } from 'next'
import { TeamGrid } from '@/components/TeamGrid'

export const metadata: Metadata = {
  title: 'Team | IEEE Student Branch',
  description: 'Meet the core team behind IEEE Student Branch at NED University.',
}

export default function TeamPage() {
  return (
    // Only padding for the navbar, no background logic needed here
    <div className="pt-[100px] min-h-screen">
      <TeamGrid />
    </div>
  )
}