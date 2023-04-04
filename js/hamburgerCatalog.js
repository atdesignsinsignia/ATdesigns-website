const myFunction = (x) => {
    x.classList.toggle("change");
    const burgerNav = document.querySelector('.burger-nav');
    if (!burgerNav) {
      const newBurgerNav = document.createElement('div');
      newBurgerNav.classList.add('burger-nav');
      const ul = document.createElement('ul');
      const li1 = document.createElement('li');
      const li2 = document.createElement('li');
      const li3 = document.createElement('li');
      const li4 = document.createElement('li');
      const a1 = document.createElement('a');
      const a2 = document.createElement('a');
      const a3 = document.createElement('a');
      const a4 = document.createElement('a');
      a1.textContent = 'HOME';
      a1.setAttribute('href', '../index.html');
      li1.appendChild(a1);
      a2.textContent = 'ABOUT US';
      a2.setAttribute('href', '../about.html');
      li2.appendChild(a2);
      a3.textContent = 'PRODUCTS';
      a3.setAttribute('href', '../products.html');
      li3.appendChild(a3);
      a4.textContent = 'GET A QUOTE';
      a4.setAttribute('href', '../quotes.html');
      a4.classList.add('btn');
      li4.appendChild(a4);
      ul.appendChild(li1);
      ul.appendChild(li2);
      ul.appendChild(li3);
      ul.appendChild(li4);
      newBurgerNav.appendChild(ul);
      const burgerNavContainer = document.querySelector('.burger-nav-container');
      burgerNavContainer.appendChild(newBurgerNav);
  
      // Add slide-down effect
      const height = newBurgerNav.clientHeight;
      newBurgerNav.style.height = '0px';
      newBurgerNav.style.transition = '';
  
      setTimeout(() => {
        newBurgerNav.style.height = height + 'px';
        newBurgerNav.style.transition = 'height 0.3s ease-in';
  
        // Add fade-in effect to each list item
        ul.querySelectorAll('li').forEach((li) => {
          li.classList.add('fade-in');
        });
      }, 0);
    } else {
      // Remove slide-down effect
      const height = burgerNav.clientHeight;
      burgerNav.style.height = height + 'px';
      burgerNav.style.transition = '';
  
      // Remove fade-in effect from each list item
      burgerNav.querySelectorAll('li').forEach((li) => {
        li.classList.remove('fade-in');
      });
  
      // Add fade-out effect
      burgerNav.style.opacity = 1;
      burgerNav.style.transition = 'opacity 0.3s ease-out';
  
      setTimeout(() => {
        burgerNav.style.opacity = 0;
      }, 0);
  
      setTimeout(() => {
        burgerNav.remove();
      }, 300);
    }
  };
  