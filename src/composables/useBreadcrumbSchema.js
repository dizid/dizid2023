import { useHead } from '@unhead/vue'

// items: [{ name, url }, ...] in order from Home to the current page
export function useBreadcrumbSchema(items) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            item: item.url
          }))
        })
      }
    ]
  })
}
