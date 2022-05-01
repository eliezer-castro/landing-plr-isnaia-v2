const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


// const header = document.querySelector('.header-duvida')

// console.log(header.nextElementSibling);


// header.forEach(item =>{
//   console.log(header)
//   item.addEventListener('click', function (item){
//     console.log(item.target)
//     console.log(item.length)

  
//     const e = item.target.nextElementSibling
//     e.classList.toggle('active')
  
//   })
// })


