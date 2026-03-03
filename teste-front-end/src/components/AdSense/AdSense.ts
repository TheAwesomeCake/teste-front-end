import './AdSense.scss'
import { AdBanner } from '../AdBanner/AdBanner'
import bannerImage from '../../assets/AdSense/Banner.png'

export function AdSense() {
  return `
    <section class="adsense-container">
        ${AdBanner(bannerImage, 'Parceiros', 'Lorem ipsum dolor sit amet, consectetur')}
        ${AdBanner(bannerImage, 'Parceiros', 'Lorem ipsum dolor sit amet, consectetur')}
    </section>
  `
}
