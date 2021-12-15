var hr = 0;
var min =0;
var sec= 0;
var mini_sec = 0;

var timer = false;
// this function for start button
function start(){
    timer = true;
    stopwatch();
}

// this function is for sto the time
function stop(){
    timer = false;
}

// this function is used to rest the time to 00:00:00
function reset(){
    timer= false;
    hr=0;
    min=0;
    sec = 0;
    mini_sec=0;
    document.getElementById('hr').innerHTML = '00';
    document.getElementById('min').innerHTML = '00';
    document.getElementById('sec').innerHTML = '00';
    document.getElementById('mini_sec').innerHTML = '00';

}

// in this function i do a important task to play with timer how timer work 

function stopwatch(){

    if(timer == true){

        mini_sec=mini_sec+1;
        if(mini_sec ==100){
            sec=sec+1;
            mini_sec=0;
        }

        if(sec ==60){
            min=min+1;
            sec=0;
        }
        if(min ==60){
            hr=hr+1;
            min=0;
            sec=0;
        }

        var hr_String = hr;
        var min_String = min;
        var sec_String =sec;
        var count_String = mini_sec;

        if(hr < 10){
            hr_String = '0'+hr_String;
        }

        if(sec < 10){
            sec_String = '0'+sec_String;
        }
        if(min < 10){
            min_String = '0'+min_String;
        }
        if(mini_sec < 10){
            count_String = '0'+count_String;
        }
        
        document.getElementById('hr').innerHTML = hr_String;
        document.getElementById('min').innerHTML = min_String;
        document.getElementById('sec').innerHTML = sec_String;
        document.getElementById('mini_sec').innerHTML = count_String;


        setTimeout( "stopwatch()",10);
    }

}
