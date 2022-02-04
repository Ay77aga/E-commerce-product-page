let next_btn = document.querySelector('[alt=next]'),
  prev_btn = document.querySelector('[alt=prev]'),
  slid = document.querySelector('.slid '),
  img = document.querySelector('.slid img');

let count_img = 1;
if (count_img == 1) {
  prev_btn.style.display = 'none';
}

next_btn.addEventListener('click', () => {
  count_img++;
  prev_btn.style.display = 'block';
  if (count_img == 4) {
    next_btn.style.display = 'none';
  }
  img.classList.remove('active');
  img.src = `imgs/image-product-${count_img}.jpg`;
  setTimeout(() => img.classList.add('active'), 0);

});

prev_btn.addEventListener('click', () => {
  count_img--;
  next_btn.style.display = 'block';
  if (count_img == 1) {
    prev_btn.style.display = 'none';
  }
  // imgs.forEach((img) => img.style.animation = '');
  img.classList.remove('active');
  img.src = `imgs/image-product-${count_img}.jpg`;
  setTimeout(() => img.classList.add('active'), 0);
});

let t_imgs = document.querySelector('.product_view .imgs');

for (let i = 1; i <= 4; i++) {
  let t_img = document.createElement('img');
  t_img.src = `imgs/image-product-${i}-thumbnail.jpg`;
  t_img.className = 't_img';
  t_imgs.appendChild(t_img);
  t_img.setAttribute('data-src', `imgs/image-product-${i}.jpg`);
}
let thum_imgs = Array.from(document.querySelectorAll('.t_img'));

thum_imgs.forEach((i) => {
  i.addEventListener('click', function() {
    img.classList.remove('active');
    img.src = this.dataset.src;
    setTimeout(() => img.classList.add('active'), 0);
    thum_imgs.forEach((im) => im.classList.remove('active'))
    this.classList.add('active');
  });
});