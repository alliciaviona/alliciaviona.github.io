var i = 0;
var text = 'Hello, Iqi!'; 
var speed = 20; 

function typeWriter() {
  if (i < text.length) {
    document.getElementById("hewoo").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function Validate(){
  var string = "greenhamandeggs";
  var clue = "dragonstaco";
  var string_input = document.getElementById("pwd").value;
  console.log(document.getElementById("pwd").value);
  var result = string.localeCompare(string_input);
  var clueRes = string_input.localeCompare(clue);
  var answer = string_input.localeCompare(string);

  if(clueRes == 0){
    window.location.replace("clue.html");
  }

  if(answer == 0){
    window.location.replace("reason.html");
  }
  
  if(result == 0){
    window.location.replace("wishes.html");
  }else{
    console.log("false");
    document.getElementById("lblError").innerHTML = "Wrong Password.";
  }

}