var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()

function save() {
    console.log("start function working...");
    recognition.start()
}

recognition.onresult = function (event) {
    console.log(event)
}