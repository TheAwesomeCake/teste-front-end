import './Categories.scss'
import MonitorIcon from '../../assets/categories/monitor.svg'
import SupermercadosIcon from '../../assets/categories/supermercados.svg'
import WhiskeyIcon from '../../assets/categories/whiskey.svg'
import FerramentasIcon from '../../assets/categories/ferramentas.svg'
import SaudeIcon from '../../assets/categories/saude.svg'
import EsportesIcon from '../../assets/categories/corrida.svg'
import ModaIcon from '../../assets/categories/moda.svg'

const categoriesList = [
  { name: 'Tecnologia', icon: MonitorIcon },
  { name: 'Supermercado', icon: SupermercadosIcon },
  { name: 'Bebidas', icon: WhiskeyIcon },
  { name: 'Ferramentas', icon: FerramentasIcon },
  { name: 'Saúde', icon: SaudeIcon },
  { name: 'Esportes e Fitness', icon: EsportesIcon },
  { name: 'Moda', icon: ModaIcon },
]

export function Categories() {
  return `
    <section class="categories-section">
      ${categoriesList
        .map(
          (category, index) => `
        <div class="category-item">
          <div class="category-button">
            <img src="${category.icon}" alt="${category.name}" width="63" height="63" ${index === 0 ? 'style="filter: none;"' : ''} />
          </div>
          <span>${category.name}</span>
        </div>
      `
        )
        .join('')}
    </section>
  `
}