import type { Metadata } from 'next'
import { EventsTimeline } from '@/components/EventsTimeline'

export const metadata: Metadata = {
  title: 'Events | IEEE Student Branch',
  description: 'Explore past and upcoming IEEE Student Branch events — workshops, hackathons, and competitions.',
}

export default function EventsPage() {
  return (
    <div style={{ paddingTop: '100px' }}>
      <EventsTimeline />
    </div>
  )
}
