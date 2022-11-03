const header = document.querySelector('header')
let preY = window.scrollY;

// 마우스 휠?
// 마우스휠은 단순히 마우스위 휠이 움직이는 이벤트를 감지한다.
// 모바일환경 or 스크롤을 마우스로 클릭해서 드래그할때 작동x

/*
window.addEventListener('mousewheel',(e)=>{
    if(e.wheelDelta > 0 ) {
        header.classList.remove('scroll-down')
    }else {
        header.classList.add('scroll-down')
    }
})
*/

window.addEventListener('scroll', (e)=>{
    if(window.scrollY===0) {
        header.classList.remove('scrolled')
    }else {
        // 파란글씨,흰배경
        header.classList.add('scrolled');
    }
    
    // 위로 스크롤됐으면 true, 아래로 스크롤됐으면 false
    
    const scrollDelta = preY-window.scrollY > 0;
    if(scrollDelta){
        header.classList.remove('scroll-down')  
    }else {
        header.classList.add('scroll-down')
    }
 
   preY = window.scrollY;
})