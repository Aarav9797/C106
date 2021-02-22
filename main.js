clasifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/HujyfbNId/model.json", modelloaded);

function modelloaded() {
    console.log("model has been loaded");

}

Webcam.set({
    width: 350,
    height: 250,
    image_format: "PNG",
    png_quality: 90,
});
Webcam.attach("#webcam");

function capture(){
    Webcam.snap( function(datauri){
        document.getElementById("results").innerHTML='<img id="image" src="'+datauri+'"/>';
    })
}

function check(){
    var image=document.getElementById("image");
    clasifier.classify(image,showresults);

}

function showresults(error,results){
console.log(results);
document.getElementById("prediction1").innerHTML=results[0].label.toUpperCase();
document.getElementById("prediction2").innerHTML=results[1].label.toUpperCase();
}
