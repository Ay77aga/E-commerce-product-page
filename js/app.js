let menu = document.querySelector('[alt=menu_icon]');
let close_menu = document.querySelector('[alt=close]')
menu.addEventListener('click', () => {
  document.querySelector('.menu').classList.add('active')
});

close_menu.addEventListener('click', () => {
  document.querySelector('.menu').classList.remove('active')
});

let cart = document.querySelector('.cart [alt=cart]');
cart.addEventListener('click', () => {
  document.querySelector('.cart-container').classList.toggle('active')
});

let content = document.querySelector('.cart-container .content');
let cartProducts = () => {
  let x = document.querySelector('.cart').dataset.count = content.children.length;
  if (x == 0) {
    content.textContent = 'Your Cart Is Empty';
  }
}
cartProducts();
let plus = document.querySelector('[alt=plus]'),
  minus = document.querySelector('[alt=minus]'),
  counter = document.querySelector('.count span');

plus.addEventListener('click', () => {
  counter.textContent = parseInt(counter.textContent) + 1;
});
minus.addEventListener('click', () => {
  if (counter.textContent > 0)
    counter.textContent = parseInt(counter.textContent) - 1;

  console.log(counter.textContent)
});
let discountPric = mainPric - (mainPric * discount / 100);

function Crete_proudct(mainPric, discount, items) {

  content.textContent = '';
  product = document.createElement('div'),
    div = document.createElement('div'),
    img_product = document.createElement('img'),
    details = document.createElement('div'),
    titel = document.createElement('p'),
    pric_el = document.createElement('p'),
    count_pric = document.createElement('span'),
    total = document.createElement('span'),
    check = document.createElement('button'),
    del = document.createElement('img');


  product.className = 'product';
  product.appendChild(div);
  product.appendChild(check);
  check.className = 'btn';
  check.textContent = 'Check Out';
  div.appendChild(img_product);
  img_product.src = 'imgs/image-product-1.jpg';
  img_product.alt = 'product_img';
  details.className = 'details';
  div.appendChild(details);
  div.appendChild(del);
  del.src = 'imgs/icon-delete.svg';
  del.alt = 'delete';
  del.onclick = () => {
    product.remove();
    counter.textContent = 0;
    cartProducts();
  };
  details.appendChild(titel)
  titel.textContent = document.querySelector('.product_title').textContent;
  details.appendChild(pric_el);
  pric_el.appendChild(count_pric);
  count_pric.textContent = `$${discountPric.toFixed(2)} × ${items}`;
  pric_el.appendChild(total);
  total.textContent ='$'+ (discountPric * items).toFixed(2);
  content.appendChild(product)
}
document.querySelector('.pric p:first-child').dataset.discount = discount + '%';
document.querySelector('.pric p:first-child').textContent = `$${discountPric.toFixed(2)}`;
document.querySelector('.pric p:last-child').textContent = `$${mainPric.toFixed(2)}`;

// console.log(product);
