import './HeaderButtons.scss'
import ReturnIcon from '../../assets/HeaderButtons/Return.svg'
import HeartIcon from '../../assets/HeaderButtons/Heart.svg'
import UserCircleIcon from '../../assets/HeaderButtons/UserCircle.svg'
import ShoppingCartIcon from '../../assets/HeaderButtons/ShoppingCart.svg'

export function HeaderButtons() {
  return `
    <div class="header-buttons">
      <div class="icon-btn">
        <img src="${ReturnIcon}" alt="Voltar" />
      </div>
      <div class="icon-btn">
        <img src="${HeartIcon}" alt="Favoritos" />
      </div>
      <div class="icon-btn">
        <img src="${UserCircleIcon}" alt="Conta" />
      </div>
      <div class="icon-btn">
        <img src="${ShoppingCartIcon}" alt="Carrinho" />
      </div>
    </div>
  `
}
