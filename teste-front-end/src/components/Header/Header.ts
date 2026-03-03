import './Header.scss'
import { AssuranceHeader } from '../AssuranceHeader/AssuranceHeader'
import { Logo } from '../Logo/Logo'
import { HeaderButtons } from '../HeaderButtons/HeaderButtons'
import { SearchBar } from '../SearchBar/SearchBar'
import { Navigator } from '../Navigator/Navigator'

export function Header() {
  return `
    <header>
        ${AssuranceHeader()}
        <hr />
        <div class="main-row">
          ${Logo('139px', '41.3px')}
          ${SearchBar()}
          ${HeaderButtons()}
        </div>
        <hr />
        ${Navigator()}
    </header>
  `
}