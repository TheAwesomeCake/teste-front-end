import './Brands.scss'
import { Logo } from '../Logo/Logo'
import { SectionTitle } from '../SectionTitle/SectionTitle'

export function Brands() {
  return `
    <section class="brands-section">
      ${SectionTitle('Navegue por marcas')}
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