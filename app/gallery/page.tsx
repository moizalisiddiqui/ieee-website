import type { Metadata } from 'next'
import { GalleryGrid } from '@/components/GalleryGrid'

export const metadata: Metadata = {
  title: 'Gallery | IEEE Student Branch',
  description: 'Photos from IEEE Student Branch events, workshops, and hackathons.',
}

export default function GalleryPage() {
  return (
    <div style={{ paddingTop: '100px' }}>
      <GalleryGrid />
    </div>
  )
}
