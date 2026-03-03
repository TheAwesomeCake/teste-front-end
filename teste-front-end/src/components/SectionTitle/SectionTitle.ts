import './SectionTitle.scss'

export function SectionTitle(title: string) {
  return `
    <div class="section-title">
      <div class="title-content">
        <h3>${title}</h3>
      </div>
    </div>
  `
}