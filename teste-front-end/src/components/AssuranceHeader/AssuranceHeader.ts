import './AssuranceHeader.scss'
import SafeIcon from '../../assets/AssuranceHeader/safe.svg'
import TruckIcon from '../../assets/AssuranceHeader/truck.svg'
import CreditCardIcon from '../../assets/AssuranceHeader/CreditCard.svg'

export function AssuranceHeader() {
  return `
    <div class="top-bar">
      <div class="benefit-item">
        <img src="${SafeIcon}" alt="Compra Segura" class="icon" />
        <p>Compra <span class="highlight">100% segura</span></p>
      </div>
      <div class="benefit-item">
        <img src="${TruckIcon}" alt="Frete Grátis" class="icon" />
        <p><span class="highlight">Frete grátis</span> acima de R$ 200</p>
      </div>
      <div class="benefit-item">
        <img src="${CreditCardIcon}" alt="Parcele suas compras" class="icon" />
        <p><span class="highlight">Parcele</span> suas compras</p>
      </div>
    </div>
  `
}