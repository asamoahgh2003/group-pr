// This is for the footer to appear on each page

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` 
    <footer id="footer">
      <section class="footer">
        <div class="row">
          <div class="footer__container">
            <div class="footer__item--info">
              <div class="footer-logo__container">
                <figure>
                  <img
                    class="footer__logo"
                    src="../Products/logo/logo.png"
                    alt="ostech"
                  />
                </figure>
                <h2>OS TECH</h2>
              </div>
              <p>
                Best information about the company gies hree but now lorem ispum
                is
              </p>
              <div class="socials">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                <a href="#"><i class="fa-brands fa-youtube"></i></a>
              </div>
            </div>
            <div class="footer__items">
              <div class="footer__item">
                <ul>
                  <li>About</li>
                  <li><a href="#">Our Branches</a></li>
                  <li><a href="#">Find Store</a></li>
                  <li><a href="#">Categories</a></li>
                  <li><a href="#">Terms & Conditions</a></li>
                </ul>
              </div>
              <div class="footer__item">
                <ul>
                  <li>Information</li>
                  <li><a href="#">Help Center</a></li>
                  <li><a href="#">Shipping</a></li>
                  <li><a href="#">Money Refund</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div class="footer__item">
                <ul>
                  <li>Business</li>
                  <li><a href="#">Sell with us</a></li>
                  <li><a href="#">Solutions</a></li>
                  <li><a href="#">Corporate</a></li>
                  <li><a href="#">Support</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
    `;
  }
}

customElements.define('my-footer', MyFooter);

class MyCopyRight extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="copyright">
    <h2>All Rights Reserved. © 2023 OS Technologies.</h2>
    </section>
    `;
  }
}

customElements.define('my-copyright', MyCopyRight);
