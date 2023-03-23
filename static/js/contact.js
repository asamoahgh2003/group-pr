class MyContact extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <main>
    <section id="clearance__section">
        <div class="main__container">
          <div class="row main__row">
            <div class="top__header--wrapper">
              <div class="first">
                <h1 class="top__header">Contact Us</h1>
                <span
                  ><i class="fa-solid products-logo fa-address-book"></i
                ></span>
              </div>
            </div>
            <div class="item__container contact__container">
              <p class="contact__info">
                We're delighted that you're interested in getting in touch with
                us. Whether you have a question, suggestion, or feedback, we're
                here to assist you in any way we can. You can reach us through
                the following channels:
              </p>
              <p class="contact__info">
                <span class="ostech__color bold">Email</span>: If you prefer to
                communicate with us via our email:
                <span class="ostech__color bold">info@ostech.com</span>We will
                get back to you as soon as possible, typically within 24 hours.
              </p>
              <p class="contact__info">
                <span class="ostech__color bold">Phone</span>: If you would like
                to speak with us over the phone, please call
                <span class="ostech__color bold">+1-234-5678</span>. Our
                customer service team is available to answer your calls 24/7.
              </p>
              <p class="contact__info">
                <span class="ostech__color bold">Social Media</span>: You can
                also reach out to us through our social media accounts on
                <span class="ostech__color bold">Facebook</span>,
                <span class="ostech__color bold">Twitter</span>, and
                <span class="ostech__color bold">Instagram</span>. Follow us and
                send us a message, and we'll respond as soon as we can.
              </p>
              <p class="contact__info">
                We value your feedback and strive to provide the best customer
                service possible. Don't hesitate to contact us if you have any
                questions, concerns, or suggestions. We look forward to hearing
                from you!
              </p>
            </div>
          </div>
        </div>
      </section>
      </main>
    `;
  }
}

customElements.define('my-contact', MyContact);
