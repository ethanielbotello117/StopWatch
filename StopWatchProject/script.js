
$(function(){
    let hour = 0;
    let minute = 0;
    let sec = 0;
    let milli = 0;


    let timeHours = setInterval(function(){
        hour++
        if(hour <= 9){
            hours.innerHTML = `0${hour}:`
        }else{
            hours.innerHTML = `${hour}:`
        }
    }, 3600000)

    let timeMinutes = setInterval(function(){
        minute++
        if(minute <= 9){
            minutes.innerHTML = `0${minute}:`
        }else if(minute == 60){
        minute = 0
            minutes.innerHTML = `0${minute}:`
        }
        else{
            minutes.innerHTML = `${minute}:`
        }
    }, 60000)

    let timeSeconds = setInterval(function(){
        sec++
        if(sec <= 9){
            seconds.innerHTML = `0${sec}:`
        }else if(sec == 60){
            sec = 0
            seconds.innerHTML = `0${sec}:`
        }
        else{
            seconds.innerHTML = `${sec}:`
        }
    }, 1000)

    let timeMilliseconds = setInterval(function(){
        milli++
        if(milli <= 9){
            milliseconds.innerHTML = `0${milli}`
        }else if(milli == 100){
            milli = 0
            milliseconds.innerHTML = `0${milli}`
        }
        else{
            milliseconds.innerHTML = `${milli}`
        }
    }, 10)
})