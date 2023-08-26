import { FunctionComponent } from 'react'

import { SanitySectionNames } from '@/sanity/types'

import FAQSection from './FAQSection'
import FeatureSection from './FeatureSection'
import HeroSection from './HeroSection'
import NewsletterSection from './NewsletterSection'

export const SectionMap: { [name in SanitySectionNames]?: FunctionComponent<any> } = {
  hero_section: HeroSection,
  feature_section: FeatureSection,
  newsletter_section: NewsletterSection,
  faq_section: FAQSection,
  // blog_section,
  // content_section,
  // deals_section,
  // gallery_section,
  // index_section,
  // newsletter_section,
  // testimonial_section
}
