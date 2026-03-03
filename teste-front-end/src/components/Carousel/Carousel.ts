import './Carousel.scss'
import { ProductCard, type Product } from '../ProductCard/ProductCard'
import { openProductModal } from '../ProductModal/ProductModal'
import data from '../../data/produtos.json'

let products: Product[] = data.products;

if (products.length < 4) {
  const copy = [...products];
  while (products.length < 4) {
    products.push(copy[products.length % copy.length]);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track') as HTMLElement;
  const prevBtn = document.querySelector('.carousel-nav.prev') as HTMLElement | null;
  const nextBtn = document.querySelector('.carousel-nav.next') as HTMLElement | null;

  if (!track || !prevBtn || !nextBtn) return;

  const cards = Array.from(track.querySelectorAll('.product-card')) as HTMLElement[];
  let currentIndex = 0;

  function updateView() {
    if (cards.length === 0) return;

    const gap = 18; 
    const cardWidth = cards[0].offsetWidth;
    const cardFullWidth = cardWidth + gap;
    
    const container = track.parentElement as HTMLElement;
    const visibleWidth = (cardWidth * 4) + (gap * 3) + 40;
    container.style.width = `${visibleWidth}px`;

    const offset = currentIndex * cardFullWidth;

    track.style.transform = `translateX(-${offset}px)`;
  }

  prevBtn.addEventListener('click', () => {
    if (currentIndex === 0) return;
    currentIndex = Math.max(0, currentIndex - 4);
    updateView();
  });

  nextBtn.addEventListener('click', () => {
    const total = cards.length;
    let candidate = currentIndex + 4;
    if (candidate >= total) {
      currentIndex = Math.max(0, total - 4);
    } else if (candidate + 4 <= total) {
      currentIndex = candidate;
    } else {
      const remaining = total - candidate;
      const overlap = 4 - remaining;
      currentIndex = candidate - overlap;
    }
    updateView();
  });

  window.addEventListener('resize', updateView);

  document.body.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const card = target.closest('.product-card') as HTMLElement | null;
    if (!card) return;
    const idxAttr = card.getAttribute('data-index');
    if (!idxAttr) return;
    const index = Number(idxAttr);
    if (isNaN(index)) return;
    const product = products[index];
    if (product) {
      openProductModal(product);
    }
  });

  updateView();
});

export function Carousel() {
  return `
    <div class="carousel-container">
      <button class="carousel-nav prev">
        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 1L1 6.5L7 12" stroke="#3F3F40" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="carousel-content">
        <div class="carousel-track">
          ${products.map((product, idx) => ProductCard(product, idx)).join('')}
        </div>
      </div>
      <button class="carousel-nav next">
        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L7 6.5L1 12" stroke="#3F3F40" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  `
}