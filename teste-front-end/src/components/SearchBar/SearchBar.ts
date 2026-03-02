import './SearchBar.scss'
import MagnifyingGlass from '../../assets/SearchBar/MagnifyingGlass.svg'

export function SearchBar() {
  return `
    <div class="search-bar">
      <input type="text" placeholder="O que você está buscando?" />
      <img src="${MagnifyingGlass}" alt="Buscar" />
    </div>
  `
}