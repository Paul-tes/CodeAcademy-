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
    photo: '',
    title: 'software desinger and project manager at google',
    backgroung: 'James studies software enginering in harvard university lasvegas, publishes 2n2 application'
  },

]