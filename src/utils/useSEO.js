import { useEffect } from 'react'

export const useSEO = (title, description) => {
  useEffect(() => {
    // Set Title
    document.title = title ? `${title} | Prysm` : 'Prysm - Grateful Patient Philanthropy Platform'

    // Set or Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content = description || 'Prysm connects clinicians, patients, and fundraisers on a single platform - turning clinical encounters into qualified major gifts.'
  }, [title, description])
}
