import './Footer.scss';
import { Newsletter } from '../Newsletter/Newsletter';
import { Logo } from '../Logo/Logo';
import InstagramIcon from '../../assets/Footer/Instagram.svg';
import FacebookIcon from '../../assets/Footer/Facebook.svg';
import LinkedinIcon from '../../assets/Footer/Linkedin.svg';

export function Footer() {
  return `
    <footer class="footer">
      ${Newsletter()}
      <div class="footer-content">
        <div class="footer-column">
          ${Logo()}
          <p class="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div class="social-icons">
            <button class="social-button">
              <img src="${InstagramIcon}" alt="Instagram" />
            </button>
            <button class="social-button">
              <img src="${FacebookIcon}" alt="Facebook" />
            </button>
            <button class="social-button">
              <img src="${LinkedinIcon}" alt="Linkedin" />
            </button>
          </div>
        </div>
        <div class="footer-separator"></div>
        <div class="footer-links-container">
          <div class="footer-column-links">
            <h4>Institucional</h4>
            <a href="#">Sobre nós</a>
            <a href="#">Movimento</a>
            <a href="#">Trabalhe conosco</a>
          </div>
          <div class="footer-column-links">
            <h4>Ajuda</h4>
            <a href="#">Suporte</a>
            <a href="#">Fale conosco</a>
            <a href="#">Perguntas frequentes</a>
          </div>
          <div class="footer-column-links">
            <h4>Termos</h4>
            <a href="#">Termos e Condições</a>
            <a href="#">Política de Privacidade</a>
            <a href="#">Troca e Devolução</a>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  `
}