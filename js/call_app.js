const mainPric = 250,
  discount = 50;

document.querySelector('.add').addEventListener('click', () => {
  if (counter.textContent != 0 )
    Crete_proudct(mainPric, discount, counter.textContent)
  cartProducts();

});
