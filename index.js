// menue button event
const menueBtn = document.querySelector('.menue-button');
console.log(menueBtn)
const menueClose = document.querySelector('.close-mob-menue');
// open menue
menueBtn.addEventListener('click', () => {
  const menuContainer = document.querySelector('.menue-container');
  menuContainer.classList.add('display-block');
  menuContainer.style.width = '95%';
})
// close menue
menueClose.addEventListener('click', () => {
  const menuContainer = document.querySelector('.menue-container');
  menuContainer.classList.remove('display-block');
})


const instructors = [
  {
    name: 'Daniel James',
    photo: './assests/imgs/handsome-bearded-guy-posing-against-white-wall.jpg',
    title: 'software desinger and project manager at google',
    backgroung: 'James studies software enginering in harvard university lasvegas, publishes 2n2 application'
  },
  {
    name: 'Loky Sandiago',
    photo: './assests/imgs/handsome-bearded-businessman-rubbing-hands-having-deal.jpg',
    title: 'software desinger and project manager at google',
    backgroung: 'Sandiago studies AI harvard university lasvegas, and publishes gogo search engin'
  },
  {
    name: 'marioto Kasiya',
    photo: './assests/imgs/handsome-businessman-suit-glasses-cross-arms-chest-look.jpg',
    alt: 'Kasiya photo',
    title: 'software desinger and project manager at google',
    backgroung: 'James studies software enginering in harvard university lasvegas, publishes 2n2 application'
  },
  {
    name: 'Ball Locky',
    photo: './assests/imgs/handsome-young-businessman-suit.jpg',
    alt: 'Lockys photo',
    title: 'software desinger and project manager at Twiiter',
    backgroung: 'James studies software enginering in harvard university lasvegas, publishes 2n2 application'
  },
  {
    name: 'Daniel James',
    photo: './assests/imgs/confident-businessman-working-his-laptop.jpg',
    alt: 'Tesfaye Paul',
    title: 'Data Analitics  and AI developer at google',
    backgroung: 'Paul studies computer sicne in Hilce university, publishes many ecomercy application'
  },
  {
    name: 'Rober Alibanos',
    photo: './assests/imgs/prosperous-businessman-keeps-hands-crossed-has-satisfied-expression.jpg',
    alt: 'rober alibanos photo',
    title: 'software desinger and project manager at faccebook',
    backgroung: 'Alibanos studies software enginering in Addis Ababa university, he owns share ride applicatiion'
  }
];


// mobile two cards
for(let i = 0; i < 2; i++) {
  const leftCards = document.querySelector('.cards3-left');
const card = document.createElement('div');
card.innerHTML = `
<div class="inst-card">
  <div class="inst-card-left">
    <img class="inst-photo" src="${instructors[i].photo}" alt="${instructors[i].alt}">
  </div>
  <div class="inst-card-right">
    <h3 class="inst-name">${instructors[i].name}</h3>
    <p class="inst-stats">${instructors[i].title}</p>
    <div class="sm-line"></div>
    <p class="inst-about">${instructors[i].backgroung}</p>
  </div>
</div>`

leftCards.appendChild(card);
}


const restFourCards = () => {
  const rightCArds = document.querySelector('.cards3-right');
  for(let i = 2; i < 6; i++) {
    const leftCards = document.querySelector('.cards3-left');
  const card = document.createElement('div');
  card.innerHTML = `
  <div class="inst-card">
    <div class="inst-card-left">
      <img class="inst-photo" src="${instructors[i].photo}" alt="${instructors[i].alt}">
    </div>
    <div class="inst-card-right">
      <h3 class="inst-name">${instructors[i].name}</h3>
      <p class="inst-stats">${instructors[i].title}</p>
      <div class="sm-line"></div>
      <p class="inst-about">${instructors[i].backgroung}</p>
    </div>
  </div>`
  
  if (i > 2) {
    rightCArds.appendChild(card);
  } else 
  {
    card.classList.add('card-h');
    leftCards.appendChild(card);
  }
  
  }
}

// call for desktop cards diplay
restFourCards();

const moreBtn = document.querySelector('.more-btn');
const lessBtn = document.querySelector('.less-btn');
moreBtn.addEventListener('click', ()=> {
  const rightCArds = document.querySelector('.cards3-right');
  rightCArds.classList.add('display-block');
  moreBtn.classList.add('display-none');
  lessBtn.classList.add('display-block');
})

lessBtn.addEventListener('click', ()=> {
  const rightCArds = document.querySelector('.cards3-right');
  rightCArds.classList.remove('display-block');
  moreBtn.classList.remove('display-none');
  lessBtn.classList.remove('display-block');
})