import './ProductModal.scss'
import type { Product } from '../ProductCard/ProductCard'

const formatPrice = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export function openProductModal(product: Product) {
  const overlay = document.createElement('div');
  overlay.className = 'product-modal-overlay';
  overlay.innerHTML = `
    <div class="product-modal">
      <button class="close-button" aria-label="Fechar">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 6L18 18" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="modal-content">
        <div class="modal-image">
          <img src="${product.photo}" alt="${product.productName}">
        </div>
        <div class="modal-info">
          <h2 class="modal-name">${product.productName}</h2>
          <p class="modal-description">${product.descriptionShort}</p>
          <span class="modal-price">${formatPrice(product.price)}</span>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  const prevOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';

  requestAnimationFrame(() => {
    overlay.classList.add('open');
  });

  function close() {
    overlay.classList.remove('open');
    overlay.classList.add('closing');
    overlay.addEventListener('transitionend', () => {
      overlay.remove();
      document.body.style.overflow = prevOverflow;
    }, { once: true });
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      close();
    }
  });

  const closeBtn = overlay.querySelector('.close-button');
  closeBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    close();
  });
}
