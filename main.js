var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {

    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if (Content == "take my selfie") {
        console.log("taking selfie --- ");
        speak(); //only function will be calle din c99 no if condition reqd
    }
}


function speak() {
    var synth = window.speechSynthesis;
    //speak_data = document.getElementById("textbox").value for class c99

    speak_data_1 = "Taking you Selfie in 5 ";
    var utterThis1 = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis1);
    timeone();
   

    speak_data_2 = "4";
    var utterThis2 = new SpeechSynthesisUtterance(speak_data_2);
    synth.speak(utterThis2);
    timeone();

    speak_data_3 = "3";
    var utterThis3 = new SpeechSynthesisUtterance(speak_data_3);
    synth.speak(utterThis3);
    timeone();

    speak_data_4 = "2";
    var utterThis4 = new SpeechSynthesisUtterance(speak_data_4);
    synth.speak(utterThis4);
    timeone();

    speak_data_5 = "1";
    var utterThis5 = new SpeechSynthesisUtterance(speak_data_5);
    synth.speak(utterThis5);
    timeone();

    Webcam.attach(camera);
    timeclick();

    function timeone() {
        setTimeout(function () {
            
        }, 1000);
    }


    function timeclick() {
        setTimeout(function () {
          take_snapshot();
          save(); 
        }, 8000);
    
}
}


camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>';
    });
}


function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}