
// clock code 
let myHour = document.querySelector('.clock')
// console.log(myh1);
setInterval(() => {
    let myDate = new Date()
    myClock = myDate.getHours()+':'+myDate.getMinutes()+':'+myDate.getSeconds();
    myHour.innerHTML = myClock;
}, 1000);

// dark mode code 
let myDark = document.querySelector('.m_dark')
// console.log(myDark);
let myBody = document.querySelector('body')
myDark.addEventListener('click',()=>{
    myBody.classList.toggle('darkMode');
    myHour.classList.toggle('hour')
    if (myDark.innerHTML==='Dark Mode') {
        myDark.innerHTML = 'light Mode'
        // myHour.style.color = 'red'
    }else if (myDark.innerHTML==='light Mode') {
        myDark.innerHTML = 'Dark Mode'
        myHour.style.color = ''
    }
})

//  calculater code 
let myCalc = document.querySelectorAll('.calc');
// console.log(myCalc);
let myResult = document.querySelector('.result')
// console.log(myResult);

myCalc.forEach((btns)=>{
    btns.addEventListener('click', (btn)=>{
        // console.log(btn.target.value);
        myResult.value += btn.target.value
        // console.log(myResult.value);
    })
})
let myFinalResult = document.querySelector('.finalResult')
// console.log(myFinalResult);
myFinalResult.addEventListener('click', ()=>{
    // console.log('kareem');
    // console.log(eval(myResult.value));
    myResult.value = eval(myResult.value)
})
let myClear = document.querySelector('.clearAll');
// console.log(myClear);
myClear.addEventListener('click',()=>{
    myResult.value = ''
})
let myDelet = document.querySelector('.delet');
// console.log(myDelet);
myDelet.addEventListener('click',()=>{

    myResult.value = myResult.value.toString().slice(0 , -1);

})







