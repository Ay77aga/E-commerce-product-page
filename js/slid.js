let next_btn = document.querySelector('[alt=next]'),
  prev_btn = document.querySelector('[alt=prev]'),
  slid = document.querySelector('.slid .box ');

for (let i = 1; i <= 4; i++) {
  let img = document.createElement('img');
  img.src = `imgs/image-product-${i}.jpg`;
  slid.appendChild(img);
}
let imgs = document.querySelectorAll('.slid .box img');
let count_img = 0;

if (count_img == 0) {
  prev_btn.style.display = 'none';
}

next_btn.addEventListener('click', () => {
  count_img++;
  prev_btn.style.display = 'block';
  if (count_img == 3) {
    next_btn.style.display = 'none';
  }
  imgs.forEach((img) => img.style.animation = '');
  imgs[count_img].style = 'opacity: 0; animation: i .3s both linear';
  slid.style = `transform:  translateX(-${count_img * 100 }%); `;
  console.log(count_img);


});

prev_btn.addEventListener('click', () => {
  next_btn.style.display = 'block';
  if (count_img == 1) {
    prev_btn.style.display = 'none';
  }
  count_img--;
  imgs.forEach((img) => img.style.animation = '');
  imgs[count_img].style = 'opacity: 0; animation: i .3s both linear ;';

  console.log(count_img)
  slid.style = `transform: translateX(-${count_img * 100 }%)`;

})
