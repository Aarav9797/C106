clasifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/HujyfbNId/model.json", modelloaded);
var predec1;
var predec2;

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

function capture() {
    Webcam.snap(function (datauri) {
        document.getElementById("results").innerHTML = '<img id="image" src="' + datauri + '"/>';
    })
}

function check() {
    var image = document.getElementById("image");
    clasifier.classify(image, showresults);

}

function showresults(error, results) {
    console.log(results);
    document.getElementById("prediction1").innerHTML = results[0].label.toUpperCase();
    document.getElementById("prediction2").innerHTML = results[1].label.toUpperCase();
    predec1 = results[0].label.toUpperCase();
    predec2 = results[1].label.toUpperCase();
    if (predec1 == "HAPPY") {
        document.getElementById("emoji1").innerHTML = "&#128512;";
    }
    if (predec1 == "SAD") {
        document.getElementById("emoji1").innerHTML = "&#128542;";
    }
    if (predec1 == "ANGRY") {
        document.getElementById("emoji1").innerHTML = "&#128545;";
    }
    if (predec2 == "HAPPY") {
        document.getElementById("emoji2").innerHTML = "&#128512;";
    }
    if (predec2 == "SAD") {
        document.getElementById("emoji2").innerHTML = "&#128542;";
    }
    if (predec2 == "ANGRY") {
        document.getElementById("emoji2").innerHTML = "&#128545;";
    }
    speak(predec1,predec2);
}
function speak(predec1,predec2){
    var synthe=window.speechSynthesis;
    var utter=new SpeechSynthesisUtterance("The first prediction is"+predec1+"and the second prediction is"+predec2);
    synthe.speak(utter);
}