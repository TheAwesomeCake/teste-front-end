import './Products.scss'
import { ProductsTitle } from '../ProductsTitle/ProductsTitle'
import { Tags } from '../Tags/Tags'

export function Products() {
  return `
    <section class="products-section">
      ${ProductsTitle()}
      ${Tags()}
    </section>
  `
}