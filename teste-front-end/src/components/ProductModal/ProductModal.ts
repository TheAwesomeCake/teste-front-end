import './ProductModal.scss'
import type { Product } from '../ProductCard/ProductCard'

// format price helper
const formatPrice = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export function openProductModal(product: Product) {
  // create overlay element
  const overlay = document.createElement('div');
  overlay.className = 'product-modal-overlay';

  overlay.innerHTML = `
    <div class="product-modal" role="dialog" aria-modal="true">
      <button class="close-button" aria-label="Fechar">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 6L18 18" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="modal-body">
        <div class="modal-left">
          <div class="modal-image">
            <img src="${product.photo}" alt="${product.productName}">
          </div>
        </div>
        <div class="modal-right">
          <h2 class="modal-name">${product.productName}</h2>
          <div class="modal-price">${formatPrice(product.price)}</div>
          <div class="modal-preview">Many desktop publishing packages and web page editors now many desktop publishing</div>
          <a class="modal-link" href="#">Veja mais detalhes do produto &gt;</a>

          <div class="modal-actions">
            <div class="qty-wrapper">
              <button class="qty-btn minus" type="button">-</button>
              <input class="qty-input" inputmode="numeric" aria-label="Quantidade" value="01" />
              <button class="qty-btn plus" type="button">+</button>
            </div>

            <button class="purchase-btn" type="button">COMPRAR</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // append to body
  document.body.appendChild(overlay);
  const prevOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';

  // force reflow then add class to start fade-in/scale animation
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

  // close when clicking on overlay background
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

  // Quantity controls logic
  const minusBtn = overlay.querySelector('.qty-btn.minus') as HTMLButtonElement | null;
  const plusBtn = overlay.querySelector('.qty-btn.plus') as HTMLButtonElement | null;
  const qtyInput = overlay.querySelector('.qty-input') as HTMLInputElement | null;

  let qty = 1;
  const min = 1;
  const max = 99;

  function refreshQty() {
    if (!qtyInput) return;
    qtyInput.value = String(qty).padStart(2, '0');
    if (minusBtn) {
      minusBtn.disabled = qty <= min;
      minusBtn.classList.toggle('disabled', minusBtn.disabled);
    }
    if (plusBtn) {
      plusBtn.disabled = qty >= max;
      plusBtn.classList.toggle('disabled', plusBtn.disabled);
    }
  }

  minusBtn?.addEventListener('click', (ev) => {
    ev.stopPropagation();
    if (qty > min) {
      qty = Math.max(min, qty - 1);
      refreshQty();
    }
  });

  plusBtn?.addEventListener('click', (ev) => {
    ev.stopPropagation();
    if (qty < max) {
      qty = Math.min(max, qty + 1);
      refreshQty();
    }
  });

  // allow typing but normalize
  qtyInput?.addEventListener('input', (ev) => {
    const v = (ev.target as HTMLInputElement).value.replace(/\D/g, '');
    let n = Number(v);
    if (isNaN(n) || n < min) n = min;
    if (n > max) n = max;
    qty = n;
    refreshQty();
  });

  // initialize
  refreshQty();

  // purchase button click (placeholder: stops propagation)
  const purchaseBtn = overlay.querySelector('.purchase-btn') as HTMLButtonElement | null;
  purchaseBtn?.addEventListener('click', (ev) => {
    ev.stopPropagation();
    // placeholder: integrate with cart flow
    close();
  });
}
