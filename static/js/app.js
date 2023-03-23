const items = document.querySelectorAll('.header__item  a');
const hotSaleItems = document.querySelector('.header__items2');

// This is for changing images onclick
function changeImage(filename) {
  let img = document.querySelector('.header-items2__img');
  img.setAttribute('src', filename);
}

// This is for changing text on click
function changeText(text, text2) {
  let productName = document.querySelector('.header__items2 h2');
  let price = document.querySelector('.header__description h3');

  productName.innerText = text;
  price.innerText = text2;
}

items.forEach((item) => {
  // This is for the background to move to another item when clicked
  item.addEventListener('click', (e) => {
    let changeItem = document.querySelector('.header-items__background');
    if (changeItem !== null) {
      changeItem.classList.remove('header-items__background');
    }
    e.target.className = 'header-items__background';
  });
});

// This is for the contact and offer

class ContactOffer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section id="partners__section">
    <div class="main__container contact__offer">
      <div class="row">
        <div class="deals__container">
          <div class="first__deal">
            <div>
              <h2>UP TO 55% OFF</h2>
              <p>This week on OsTech</p>
            </div>
            <figure class="guy__img--wrapper">
              <img class="guy__img" src="../Products/people/guy.png" />
            </figure>
          </div>
          <div class="contact">
            <div>
              <h2>
                Have your purchases directly delivered to your doorstep on
                time
              </h2>
              <p>Just call 0800-000-111</p>
            </div>
            <figure class="lady__img--wrapper">
              <img class="lady__img" src="../Products/people/lady1.png" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
    `;
  }
}

customElements.define('contact-offer', ContactOffer);

// This is for the newsletter to appear on every html page

class MyNewsLetter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="newsletter">
        <div class="row">
          <div class="newsletter__container">
            <h1>Subscribe to Our Newsletter</h1>
            <p>
              Get news and updates on our latest products, offers and promos!
            </p>
            <form>
              <input
                type="email"
                name="email"
                placeholder="Type Your Email Address Here"
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('my-news-letter', MyNewsLetter);

// Onclick the bold should move from home to laptops
