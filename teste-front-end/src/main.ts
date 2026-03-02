import './style.scss'
import { Header } from './components/Header/Header'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header()}
`
