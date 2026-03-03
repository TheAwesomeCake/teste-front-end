import './Tags.scss'

const tagsList = [
  'CELULAR',
  'ACESSÓRIOS',
  'TABLETS',
  'NOTEBOOKS',
  'TVS',
  'VER TODOS'
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
