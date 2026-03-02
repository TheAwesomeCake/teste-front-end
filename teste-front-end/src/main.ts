import './style.scss'
import { Header } from './components/Header/Header'
import { Banner } from './components/Banner/Banner'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header()}
  ${Banner()}
`
