import './Logo.scss'
import LogoImg from '../../assets/Logo/Logo.png'

export function Logo(width?: string, height?: string) {
  const style = width && height ? `style="width: ${width}; height: ${height};"` : ''
  return `
    <div class="logo" ${style}>
      <img src="${LogoImg}" alt="Logo Econverse" />
    </div>
  `
}