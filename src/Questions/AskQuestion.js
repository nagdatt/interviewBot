var speech=new SpeechSynthesisUtterance()
var synth=window.speechSynthesis
const askQuestion=(question)=>{
      
        speech.text=question
        synth.speak(speech)
    }
export default askQuestion;