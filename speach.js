var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'en-EN';
recognition.interimResults = false;
recognition.maxAlternatives = 5;




function botGreetings() {

          var speakyDude = new SpeechSynthesisUtterance('Welcome to Speaky Hub. Tell me your username to look for you in the database.');
          window.speechSynthesis.speak(speakyDude);

      }
      botGreetings();


var dataResult;

recognition.onresult = function(event) {

	dataResult = event.results[0][0].transcript;
    //alert(dataResult);
    console.log(dataResult);

      /*if (dataResult === "Joel" || "joel") {
        
          var speaky = new SpeechSynthesisUtterance("Welcome Joel, nice to have you back. Where do you like to navigate?");
          window.speechSynthesis.speak(speaky);
      }

      if (dataResult === "Mail" || "mail") {

          document.location.assign('https://gmail.com');


      }*/



      switch (dataResult) {
          
          case 'Joe':
          var speaky1 = new SpeechSynthesisUtterance("Welcome Joel, nice to have you back. Where do you like to go?");
          window.speechSynthesis.speak(speaky1);
          break;

          case 'joe':
          var speaky2 = new SpeechSynthesisUtterance("Welcome Joel, nice to have you back. Where do you like to navigate?");
          window.speechSynthesis.speak(speaky2);
          brake;

          case 'mail':
          window.open("https://gmail.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
          break;

          case 'Mail':
          window.open("https://gmail.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
          break;

          case 'Facebook':
          window.open("https://facebook.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
          break;

          case 'facebook':
          window.open("https://facebook.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
          break;

          case 'One':
          document.location.assign('https://www.youtube.com/watch?v=uOUyB1kqPrc');
          break;

          case 'Crunchy Roll':
          window.open("https://www.crunchyroll.com/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
          break;

          case 'News':
          document.getElementsByTagName("iframe")[0].setAttribute("src", "https://www.endi.com/"); 
          break;

          

          default:
          var defaultSpeak = new SpeechSynthesisUtterance('I dont understand');
          window.speechSynthesis.speak(defaultSpeak);



    }

      
};

function but(){
    
    recognition.start();
    
}








