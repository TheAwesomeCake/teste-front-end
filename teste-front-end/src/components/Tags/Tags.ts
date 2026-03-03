import './Tags.scss'

const tagsList = [
  'Celular',
  'Acessórios',
  'Tablets',
  'Notebooks',
  'TVs',
  'Ver todos'
]

export function Tags() {
  return `
    <div class="tags-container">
      ${tagsList.map((tag, index) => `
        <button class="tag-button ${index === 0 ? 'active' : ''}">${tag}</button>
      `).join('')}
    </div>
  `
}
