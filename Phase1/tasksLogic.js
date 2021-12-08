class Task{
    constructor(){
        this.isSolved = false;
        this.taskBody = document.getElementById('task1');
    }
    generateTask1(){
        //document.write(' <div id="taskPosition"></div>');
        
        this.taskBody.innerHTML = '<p id="timer">Timer : 0 </p><p class="temp">temp</p><button id="btn">click before timer</button>';
        this.taskBody.style.visibility = "visible"
        var timeDiv = document.querySelector("#timer");
        startTimer(60 , timeDiv);
        setTimeout(()=>{ 
            if(this.isSolved == false){
                this.endTask();
            }
            return false;

        },6000)
        document.getElementById("btn").addEventListener('click',()=>{
            console.log("task1 click")
            this.isSolved = true;
            this.endTask();
            return true;
        });


    }

    generateTask2(){
        this.taskBody.innerHTML = '<div><p>5araaaa3</p> <p id="timer">Timer : 0 </p> <input type="text" placeholder="number"> <button id="btn">click before timer</button></div>';
        this.taskBody.style.visibility = "visible"
        var timeDiv = document.querySelector("#timer");
        startTimer(60 , timeDiv);
        setTimeout(()=>{ 
            if(this.isSolved == false){
                this.endTask();
            }
            return false;

        },1000 * 60)

        // task2 logic 
        
        document.getElementById("btn").addEventListener('click',()=>{
            console.log("task2 click")
            this.isSolved = true;
            this.endTask();
            return true;
        });

    }
    endTask(){
        this.taskBody.style.visibility = "hidden";
    }


}

//  var task1 = new Task(false);
//   task1.generateTask1()



function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000)
}