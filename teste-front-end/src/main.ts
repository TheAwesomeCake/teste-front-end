import './style.scss'
import { Header } from './components/Header/Header'
import { Banner } from './components/Banner/Banner'
import { Categories } from './components/Categories/Categories'
import { Products } from './components/Products/Products'
import { ProductsAlt } from './components/ProductsAlt/ProductsAlt'
import { AdSense } from './components/AdSense/AdSense'
import { Brands } from './components/Brands/Brands'
import { Footer } from './components/Footer/Footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header()}
  ${Banner()}
  ${Categories()}
  ${Products()}
  ${AdSense()}
  ${ProductsAlt()}
  ${AdSense()}
  ${Brands()}
  ${ProductsAlt()}
  ${Footer()}
`
