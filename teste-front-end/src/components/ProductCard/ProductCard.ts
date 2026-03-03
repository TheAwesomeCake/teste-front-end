import './ProductCard.scss'

export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export function ProductCard(product: Product, index?: number): string {
  const price = product.price;
  const oldPrice = price + (price * 0.0647);
  const installmentPrice = price / 2;

  const formatPrice = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  const dataIndex = index !== undefined ? ` data-index="${index}"` : '';

  return `
    <div class="product-card"${dataIndex}>
      <div class="product-image">
        <img src="${product.photo}" alt="${product.productName}">
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.productName}</h3>
        <span class="old-price">${formatPrice(oldPrice)}</span>
        <span class="product-price">${formatPrice(price)}</span>
        <span class="installment">ou 2x de ${formatPrice(installmentPrice)} sem juros</span>
        <span class="free-shipping">Frete grátis</span>
        <button class="buy-button">COMPRAR</button>
      </div>
    </div>
  `
}
