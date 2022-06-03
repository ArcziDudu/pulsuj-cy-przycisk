const btn = document.querySelector('.btn');

const btnAnimation = (e) => {
    
    //pozycja w którą klikamy
    const top = e.clientY
    const left = e.clientX

    const btnTop = e.target.offsetTop
    const btnleft = e.target.offsetLeft

    const insideBtnTop = top - btnTop;
    const insideBtnleft = left - btnleft;
    
    const circle = document.createElement('span')
    circle.classList.add('circle');
    circle.style.top = insideBtnTop + 'px';
    circle.style.left = insideBtnleft + 'px';
    //zapobiegnięcie spamowaniu elementem w DOMie
    e.target.appendChild(circle);
   setTimeout(()=>{
       circle.remove();
   },300)
}

btn.addEventListener('click', btnAnimation)
