import './Brands.scss'
import { Logo } from '../Logo/Logo'

export function Brands() {
  return `
    <section class="brands-section">
      <div class="brands-container">
        ${Array(5).fill(null).map(() => `
          <button class="brand-circle">
            ${Logo()}
          </button>
        `).join('')}
      </div>
    </section>
  `
}