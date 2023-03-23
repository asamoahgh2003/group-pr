// This is for the navbars to appear on each page

class MyNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="nav1">
    <div class="nav1__container">
    <a href="index.html" class="logo-name__wrapper"> 
    <figure class="logo__wrapper">
      <img class="logo" src="../Products/logo/logo.png" alt="ostech" />
    </figure>
    <h1 class="logo__name">OS TECH</h1>
    </a>
      <form class="form" action="">
        <input
          class="nav1__search"
          type="search"
          placeholder="Search"
          name="search"
        />
        <select class="nav1__categories" name="categories">
          <option class="options" value="categories">All Categories</option>
          <option value="laptops">Laptops</option>
          <option value="desktops">Desktops</option>
          <option value="smartphones">Smartphones</option>
          <option value="gaming">Gaming</option>
          <option value="watches">Watches</option>
          <option value="virtual reality">Virtual Reality</option>
          <option value="headsets">Headsets</option>
        </select>
        <button class="nav1__btn btn" type="submit">Search</button>
      </form>
      <div class="cart__search">
        <div class="nav1__cart flex__column">
          <i class="fa-solid fa-cart-shopping"></i>
          <p>My Cart</p>
        </div>
        <div class="nav1__search--small flex__column">
          <i class="fa-solid fa-magnifying-glass"></i>
          <p>Search</p>
        </div>
      </div>
    </div>
  </nav>
  <nav class="nav2">
    <div class="nav2__container">
      <div class="wrapper">
        <ul class="nav2__items">
          <li><a href="../html/index.html">Home</a></li>
          <li><a href="../html/laptops.html">Laptops</a></li>
          <li><a href="../html/desktops.html">Desktops</a></li>
          <li><a href="../html/accessories.html">Accessories</a></li>
          <li><a href="../html/contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div class="currency__dropdown">
        <div class="currency__select currency__box">
          <span class="selected">English, USD</span>
          <div class="caret"></div>
        </div>
        <ul class="currency__menu">
          <li>English, USD</li>
          <li>English, AUD</li>
        </ul>
      </div>
      <div class="currency__dropdown country__dropdown">
        <div class="currency__select country__select">
          <span class="selected">Ship To</span>
          <div class="caret"></div>
        </div>
        <ul class="currency__menu country__menu">
          <li>Ghana</li>
          <li>Uk</li>
        </ul>
      </div>
    </div>
  </nav>
    `;
  }
}

customElements.define('my-nav', MyNav);

const dropdowns = document.querySelectorAll('.currency__dropdown');

// Loop through all the dropdown elements
dropdowns.forEach((dropdown) => {
  // inner elements from each dropdown
  const select = dropdown.querySelector('.currency__select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.currency__menu');
  const options = dropdown.querySelectorAll('.currency__menu li ');
  const selected = dropdown.querySelector('.selected');

  // Add a click event to the select element

  select.addEventListener('click', () => {
    select.classList.toggle('currency__select--clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('currency__menu--open');
  });

  options.forEach((option) => {
    option.addEventListener('click', () => {
      selected.innerText = option.innerText;
      select.classList.remove('currency__select--clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('currency__menu--open');

      options.forEach((option) => {
        // remove active class from all option elements
        option.classList.remove('active');
      });

      option.classList.add('active');
    });
  });
});

// This is for nav items to be bold when i click the nav buttons
const navItems = document.querySelectorAll('.nav2__items a');
const activePage = window.location.pathname;
navItems.forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add('bold');
  }
});
