import { defineField, defineType } from 'sanity'

import { displayNumber, joinStrings } from '@/utils/utils'
import { RocketLaunch } from '@phosphor-icons/react'

export default defineType({
  name: 'top_things_section',
  title: 'Top Things Section',
  icon: RocketLaunch as any,
  type: 'object',
  fields: [
    defineField({
      name: 'destination',
      title: 'Destination',
      description: 'The destination to show top things for',
      type: 'reference',
      to: [{ type: 'destination_page' }],
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      description: 'The tagline for the top things section',
      type: 'locale_string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title for the top things section',
      type: 'locale_string',
    }),
    defineField({
      name: 'top_things',
      title: 'Top Things',
      description: 'The top things for the top things section',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'article' }],
        },
      ],
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      description: 'The CTA for the cards in top things section',
      type: 'locale_string',
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      top_things: 'top_things',
    },
    prepare: ({ title, top_things }) => ({
      title: 'Top Things Section',
      subtitle: joinStrings('|', title, displayNumber(top_things?.length, 'top thing')),
    }),
  },
})
