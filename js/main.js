const circle1 = document.querySelector('.circle1');
const circle2 = document.querySelector('.circle2');
const circle3 = document.querySelector('.circle3');
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.main-nav');


circle1.addEventListener('mouseover', () => {
    document.querySelector('#hover-title').textContent = 'Lightest circle is on hover';
        document.querySelector('#hover-subtitle').textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempora impedit cum id rem eos adipisci sint dolorum minima nulla voluptatum praesentium tempore';
});

circle2.addEventListener('mouseover', () => {
    document.querySelector('#hover-title').textContent = 'Dark circle is on hover';
    document.querySelector('#hover-subtitle').textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempora impedit cum id rem eos adipisci sint dolorum minima nulla voluptatum praesentium tempore Quasi tempora impedit cum id rem eos adipisci sint dolorum minima nulla voluptatum praesentium tempore';
});

circle3.addEventListener('mouseover', () => {
    document.querySelector('#hover-title').textContent = 'Darkest circle is on hover';
    document.querySelector('#hover-subtitle').textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempora impedit cum id rem eos adipisci sint dolorum minima nulla voluptatum praesentium tempore Quasi tempora impedit cum id rem eos';
});

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
