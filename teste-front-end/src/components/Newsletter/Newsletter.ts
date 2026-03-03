import './Newsletter.scss'

export function Newsletter() {
  return `
    <div class="newsletter-container">
      <div class="newsletter-content">
        <div class="text-section">
          <h3>Inscreva-se na nossa newsletter</h3>
          <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
        </div>
        <div class="form-section">
          <div class="inputs-group">
            <input type="text" placeholder="Digite seu nome" class="newsletter-input">
            <input type="email" placeholder="Digite seu e-mail" class="newsletter-input">
            <button class="newsletter-button">INSCREVER</button>
          </div>
          <div class="terms-group">
            <input type="checkbox" id="terms" class="terms-checkbox">
            <label for="terms" class="terms-text">Aceito os termos e condições</label>
          </div>
        </div>
      </div>
    </div>
  `
}