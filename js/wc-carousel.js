class WCCarousel extends HTMLElement {
  constructor() {
    super();

    console.log("### running!")

    // Setup shadow dom so we can create/manipulate elements
    this.attachShadow({ mode: "open" });

    const container = document.createElement('div');
    this.shadowRoot.append(container);


    // Get and parse given images sources
    const imagesRaw = this.getAttribute('data-images')
    const imageSources = imagesRaw.split(',')


    // create image el for each
    imageSources.forEach(imageSrc => {
      const imageEl = document.createElement('img')

      imageEl.setAttribute('src', imageSrc.trim())

      container.appendChild(imageEl)
    })


    // Style so it's all in a row and scrollable 
  }
}

customElements.define('wc-carousel', WCCarousel);