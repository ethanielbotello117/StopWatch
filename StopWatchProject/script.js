
$(function () {
    let hour = 0;
    let minute = 0;
    let sec = 0;
    let milli = 0;
    let watch = true;
    let timeMilliseconds
    let lap = 1;

    function stopWatch(){
        if(watch){
            timeMilliseconds = setInterval(function () {
                milli++
                if (milli <= 9) {
                    milliseconds.innerHTML = `0${milli}`
                } else if (milli == 100) {
                    milli = 0
                    milliseconds.innerHTML = `0${milli}`
                    sec++
                    if (sec <= 9) {
                        seconds.innerHTML = `0${sec}.`
                    } else if (sec == 60) {
                        sec = 0
                        seconds.innerHTML = `0${sec}.`
                        minute++
                        if (minute <= 9) {
                            minutes.innerHTML = `0${minute}:`
                        } else if (minute == 60) {
                            minute = 0
                            minutes.innerHTML = `0${minute}:`
                            hour++
                            if (hour <= 9) {
                                hours.innerHTML = `0${hour}:`
                            } else {
                                hours.innerHTML = `${hour}:`
                            }
                        }
                        else {
                            minutes.innerHTML = `${minute}:`
                        }
                    }
                    else {
                        seconds.innerHTML = `${sec}.`
                    }
                }
                else {
                    milliseconds.innerHTML = `${milli}`
                }
            }, 10)
        }else{
            clearInterval(timeMilliseconds);
        }
    }

    function startOrStop(){
        if(watch){
            stopWatch();
            watch = false;
            startStop.innerHTML = 'Stop'
            lapRestart.innerHTML = 'Lap'
        }else{
            stopWatch();
            watch = true;
            startStop.innerHTML = 'Start'
            lapRestart.innerHTML = 'Restart'
        }
    }

    function lapOrRestart(){
        if(watch){
            // Restarting
            hours.innerHTML = '00:';
            minutes.innerHTML = '00:';
            seconds.innerHTML = '00.';
            milliseconds.innerHTML = '00';

            lapMI1.innerHTML = '00';
            lapS1.innerHTML = '00.';
            lapM1.innerHTML = '00:';
            lapH1.innerHTML = '00:';

            hour = 0;
            minute = 0;
            sec = 0;
            milli = 0;
        }else{
            // New Lap Time, Max: 4 at a time
            if (milli <= 9){
                milli = `0` + `${milli}`
            }else{
                lapMI.innerHTML = `${milli}`;
            }

            if (sec <= 9){
                lapS.innerHTML = `0${sec}.`;
            }else{
                lapS.innerHTML = `${sec}.`;
            }

            if (minute <= 9){
                lapM.innerHTML = `0${minute}:`;
            }else{
                lapM.innerHTML = `${minute}:`;
            }

            if (hour <= 9){
                lapH.innerHTML = `0${hour}:`;
            }else{
                lapH.innerHTML = `${hour}:`;
            }
        }
    }

    $('#startStop').on('click', startOrStop)
    $('#lapRestart').on('click', lapOrRestart)
})


// $(function () {
//     let hour = 0;
//     let minute = 0;
//     let sec = 0;
//     let milli = 0;
//     let watch = true;
//     let timeMilliseconds
//     let lap = 1;

//     function stopWatch(){
//         if(watch){
//             timeMilliseconds = setInterval(function () {
//                 milli++
//                 if (milli <= 9) {
//                     milliseconds.innerHTML = `0${milli}`
//                 } else if (milli == 100) {
//                     milli = 0
//                     milliseconds.innerHTML = `0${milli}`
//                     sec++
//                     if (sec <= 9) {
//                         seconds.innerHTML = `0${sec}.`
//                     } else if (sec == 60) {
//                         sec = 0
//                         seconds.innerHTML = `0${sec}.`
//                         minute++
//                         if (minute <= 9) {
//                             minutes.innerHTML = `0${minute}:`
//                         } else if (minute == 60) {
//                             minute = 0
//                             minutes.innerHTML = `0${minute}:`
//                             hour++
//                             if (hour <= 9) {
//                                 hours.innerHTML = `0${hour}:`
//                             } else {
//                                 hours.innerHTML = `${hour}:`
//                             }
//                         }
//                         else {
//                             minutes.innerHTML = `${minute}:`
//                         }
//                     }
//                     else {
//                         seconds.innerHTML = `${sec}.`
//                     }
//                 }
//                 else {
//                     milliseconds.innerHTML = `${milli}`
//                 }
//             }, 10)
//         }else{
//             clearInterval(timeMilliseconds);
//         }
//     }

//     function startOrStop(){
//         if(watch){
//             stopWatch();
//             watch = false;
//             startStop.innerHTML = 'Stop'
//             lapRestart.innerHTML = 'Lap'
//         }else{
//             stopWatch();
//             watch = true;
//             startStop.innerHTML = 'Start'
//             lapRestart.innerHTML = 'Restart'
//         }
//     }

//     function lapOrRestart(){
//         if(watch){
//             // Restarting
//             hours.innerHTML = '00:';
//             minutes.innerHTML = '00:';
//             seconds.innerHTML = '00.';
//             milliseconds.innerHTML = '00';

//             hour = 0;
//             minute = 0;
//             sec = 0;
//             milli = 0;

//             lap1.innerHTML = '00:00:00.00'
//         }else{
//             // New Lap Time, Max: 4 at a time
//             if (milli <= 9){
//                 milli = `0` + `${milli}`;
//             }else{
//                 milli = `${milli}`
//             }

//             if (sec <= 9){
//                 sec = `0` + `${sec}.`;
//             }else{
//                 sec = `${sec}.`
//             }

//             if (minute <= 9){
//                 minute = `0` + `${minute}:`
//             }else{
//                 minute = `${minute}:`
//             }

//             if (hour <= 9){
//                 hour = `0` + `${hour}:`
//             }else{
//                 hour = `${hour}:`
//             }

//             let row1 = `${hour + minute + sec + milli}`;
//             lap1.innerHTML = row1;
//         }
//     }

//     $('#startStop').on('click', startOrStop)
//     $('#lapRestart').on('click', lapOrRestart)
// })