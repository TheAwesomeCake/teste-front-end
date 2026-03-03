import './ProductsAlt.scss'
import { ProductsTitle } from '../ProductsTitle/ProductsTitle'
import { Carousel } from '../Carousel/Carousel'

export function ProductsAlt() {
  return `
    <section class="products-section">
      ${ProductsTitle()}
      ${Carousel()}
    </section>
  `
}