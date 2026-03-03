import './Products.scss'
import { ProductsTitle } from '../ProductsTitle/ProductsTitle'
import { Tags } from '../Tags/Tags'
import { Carousel } from '../Carousel/Carousel'

export function Products() {
  return `
    <section class="products-section">
      ${ProductsTitle()}
      ${Tags()}
      ${Carousel()}
    </section>
  `
}