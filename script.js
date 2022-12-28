var time=10
var greeting= 'HAPPY INDEPENDENCE DAY'
var timer =setInterval( () => {
    
    document.querySelector('.countdown').innerHTML= `${time}`
    time--
    console.log(timer)
    if(time<0){
        clearInterval(timer)
        document.querySelector('.countdown').innerHTML= `${greeting}`
       
        }
       
}, 1000)