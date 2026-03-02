import './Logo.scss'
import LogoImg from '../../assets/Logo/Logo.png'

export function Logo() {
  return `
    <div class="logo">
      <img src="${LogoImg}" alt="Logo Econverse" />
    </div>
  `
}