import './ProductsAlt.scss'
import { ProductsTitle } from '../ProductsTitle/ProductsTitle'
import { Tags } from '../Tags/Tags'
import { Carousel } from '../Carousel/Carousel'

export function ProductsAlt() {
  return `
    <section class="products-section">
      ${ProductsTitle()}
      ${Tags()}
      ${Carousel()}
    </section>
  `
}