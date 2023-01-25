let secondArrow = document.querySelector('.s'),
    minuteArrow = document.querySelector('.m'),
    hourArrow = document.querySelector('.h'),
    hourNumber = document.querySelector('.hours'),
    minuteNumber = document.querySelector('.minutes'),
    
    secondTimer = document.querySelector('.stopwatch__seconds'),
    minuteTimer = document.querySelector('.stopwatch__minutes'),
    hourTimer = document.querySelector('.stopwatch__hours'),
    startBtn = document.querySelector('.stopwatch__btn'),
    span = document.querySelector('.tabsLink__span');
    
    
    // Рекурсия - это когда функция вызывает саму себя
    
    /* let i = 0;
    function rek() {
        console.log(i);
        if(i < 10) {
            i++
            rek()
        }
    }
    rek(); */
    
    
    function clock() {
        let time = new Date(),
            seconds = time.getSeconds() * 6,
            minutes = time.getMinutes() * 6,
            hours = time.getHours() * 30;
            
            secondArrow.style = `transform: rotate(${seconds}deg)`;
            minuteArrow.style = `transform: rotate(${minutes}deg)`;
            hourArrow.style = `transform: rotate(${hours}deg)`;
            
            hourNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
            minuteNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
            
            // setTimeout() - создает задержку
            setTimeout(() => clock(),1000) // задержка на 1000мсек = 1сек
    }
    clock()
    

let links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');
    
for(let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        for(let x = 0; x < tabs.length; x++) {
            tabs[x].classList.remove('active')
            links[x].classList.remove('active')
        }
        links[i].classList.add('active')
        tabs[i].classList.add('active')
    })
}
    



   

    
startBtn.addEventListener('click', () => {
    if(startBtn.innerHTML == 'start') {
        startBtn.innerHTML = 'stop',
        span.classList.add('active');
        
        
    }else if(startBtn.innerHTML == 'stop') {
        startBtn.innerHTML = 'clear',
        span.style.background = 'red';
    }else {
        startBtn.innerHTML = 'start',
        span.style.background = 'white',
        span.classList.remove('active'),
        secondTimer.innerHTML = '0',
        minuteTimer.innerHTML = '0',
        hourTimer.innerHTML = '0';
    }
})

function timer() {
    if(startBtn.innerHTML == 'stop') {
        secondTimer.innerHTML++;
        if(secondTimer.innerHTML == '60') {
            secondTimer.innerHTML = '0',
            minuteTimer.innerHTML++;
            if(minuteTimer.innerHTML == '60') {
                minuteTimer.innerHTML = '0',
                hourTimer.innerHTML++;
            }
        }
    }
        
    
    setTimeout(() => timer(),1000)
}
    
   timer() 
    