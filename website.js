var accessKey = "A745EER"
var evalResult = document.getElementById("evaluation")
var progressBar = document.getElementsByClassName("progress-bar")[0]
document.getElementById("accessButton").onclick = function(){
    if(document.getElementById("userInput").value === accessKey){
        evalResult.innerHTML = "GRANTED"
        evalResult.style.fontSize = '90px';
        evalResult.style.color = 'rgb(24, 233, 24)';
        document.getElementById("startInfo").style.display = "none";
        setTimeout(() => {progressBar.style.setProperty("visibility", "visible");}, 1000)
        
        var width;
        var loading = setInterval(() => {
            const computedStyle = getComputedStyle(progressBar);
            width = parseFloat(computedStyle.getPropertyValue ('--width')) || 0
            progressBar.style.setProperty("--width", width + .1)
            if(width >= 100){
                clearInterval(loading);
                console.log("DONE")
                progressBar.style.setProperty("visibility", "hidden"); 
                evalResult.style.display = "none"
                document.getElementById('pictures').style.display = 'block';
            }
            console.log(width)
        
        }, 5)
        
        

    }
    else{
        var denier = false;
        evalResult.innerHTML = "DENIED"
        evalResult.style.fontSize = '90px';
        evalResult.style.color = "red";
        document.getElementById("startInfo").style.display = "none";
        setTimeout(() => {
            document.getElementById("startInfo").style.display = "block";
            evalResult.innerHTML = ''
            document.getElementById("userInput").value = '';
        }, 5000)
        
    }




}

