import './Navigator.scss'
import CrownIcon from '../../assets/Navigator/Crown.svg'

export function Navigator() {
  return `
    <nav class="navigator">
      <div class="nav-content">
        <ul>
          <li>Todas Categorias</li>
          <li>Supermercado</li>
          <li>Livros</li>
          <li>Moda</li>
          <li>Lançamentos</li>
          <li class="active">Ofertas do dia</li>
          <li><img src="${CrownIcon}" alt="Assinatura" /> Assinatura</li>
        </ul>
      </div>
    </nav>
  `
}
