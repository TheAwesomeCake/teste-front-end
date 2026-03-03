import './AdBanner.scss'

export function AdBanner(imageSrc: string, title: string, description: string) {
  return `
    <div class="ad-banner">
      <img src="${imageSrc}" alt="${title}">
      <div class="overlay"></div>
      <div class="content">
        <h2 class="ad-banner-title">${title}</h2>
        <p class="ad-banner-description">${description}</p>
        <button class="ad-banner-button">
          CONFIRA
        </button>
      </div>
    </div>
  `
}