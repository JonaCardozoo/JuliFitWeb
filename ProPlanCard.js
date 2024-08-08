class ProPlanCard extends HTMLElement {
  constructor() {
    super();

    // Crear un shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    // Crear los elementos de la tarjeta
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'Pro';

    const pricing = document.createElement('p');
    pricing.classList.add('pricing');
    pricing.innerHTML = '$12000 <span class="pricing-time">/ mes</span>';

    const subTitle = document.createElement('div');
    subTitle.classList.add('sub-title');
    subTitle.textContent = 'Contiene:';

    const list = document.createElement('ul');
    list.classList.add('list');

    const items = [
      'Ganancia de masa muscular',
      'Pérdida de grasa',
      'Atención 24/7',
      'Whatsapp',
      'Instagram'
    ];

    items.forEach(item => {
      const listItem = document.createElement('li');
      listItem.classList.add('list-item');
      listItem.innerHTML = `<span class="check">✓</span> ${item}`;
      list.appendChild(listItem);
    });

    const button = document.createElement('button');
    button.classList.add('button');
    const buttonText = document.createElement('div');
    buttonText.classList.add('text-button');
    buttonText.textContent = 'Obtener plan ahora';
    button.appendChild(buttonText);

    // Adjuntar los elementos al shadow root
    shadow.appendChild(card);
    card.appendChild(title);
    card.appendChild(pricing);
    card.appendChild(subTitle);
    card.appendChild(list);
    card.appendChild(button);

    // Adjuntar el estilo
    const style = document.createElement('style');
    style.textContent = `
      .card {
        border: 1px solid #ccc;
        padding: 16px;
        border-radius: 8px;
        width: 300px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .title {
        font-size: 1.5em;
        margin-bottom: 0.5em;
      }
      .pricing {
        font-size: 1.25em;
        color: #333;
      }
      .pricing-time {
        font-size: 0.75em;
        color: #666;
      }
      .sub-title {
        font-size: 1em;
        margin-top: 1em;
      }
      .list {
        list-style: none;
        padding: 0;
      }
      .list-item {
        margin: 0.5em 0;
      }
      .check {
        color: green;
        margin-right: 0.5em;
      }
      .button {
        background-color: #007BFF;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 1em;
        display: flex;
        justify-content: center;
      }
      .button:hover {
        background-color: #0056b3;
      }
      .text-button {
        font-size: 1em;
      }
    `;
    shadow.appendChild(style);
  }
}

// Definir el nuevo elemento
customElements.define('pro-plan-card', ProPlanCard);
