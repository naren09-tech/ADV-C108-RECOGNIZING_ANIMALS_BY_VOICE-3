//https://teachablemachine.withgoogle.com/models/jFgWvYT6L/model.json
var img=document.getElementById("img");
function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/jFgWvYT6L/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        var r=Math.floor(Math.random()*255)+1;
        var g=Math.floor(Math.random()*255)+1;
        var b=Math.floor(Math.random()*255)+1;
        var result=results[0].label;
        var confidence=results[0].confidence;
        document.getElementById("can_hear").innerHTML="I can hear - "+result;
        document.getElementById("confidence").innerHTML="Accuracy - "+confidence;
        document.getElementById("can_hear").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("confidence").style.color="rgb("+r+","+g+","+b+")";
        if(result=="Dog"){
            document.getElementById("img").src="dog.jfif";   
        }
        else if(result=="Cat"){
            document.getElementById("img").src="cat.jfif";   
        }
        else if(result=="Cow"){
            document.getElementById("img").src="cow.jpg";
        }
        else if(result=="Lion"){
            document.getElementById("img").src="lion.jpg";
        }
        else{
            document.getElementById("img").src="background.jpeg";
        }
    }
}