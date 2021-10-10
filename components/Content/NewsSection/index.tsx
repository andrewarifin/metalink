import React from 'react'
import { ContentSection } from '../ContentSection'
import { NewsCards } from './NewsCards'

export function NewsSection() {
  return (
    <ContentSection title="Top News Stories">
      <NewsCards />
    </ContentSection>
  )
}
