import './Banner.scss'
import BannerImage from '../../assets/Banner/Banner.png'

export function Banner() {
  return `
    <div class="banner" style="background-image: url(${BannerImage})">
      <div class="banner-overlay">
        <h1>Venha conhecer nossas promoções</h1>
        <h2><span>50% Off</span> nos produtos</h2>
        <button>Ver produto</button>
      </div>
    </div>
  `
}
