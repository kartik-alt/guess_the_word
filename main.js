document.getElementById("player1_name").innerHTML= localStorage.getItem("player1_name");
document.getElementById("player2_name").innerHTML= localStorage.getItem("player2_name");

function send(){
get_word= document.getElementById("word").value;
word_lc=  get_word.toLowerCase();
charat0=  word_lc.charAt(0);
charat4=  word_lc.charAt(4);
charatlast= word_lc.charAt(word_lc.length-1);
console.log(charat0);
console.log(charat4);
console.log(charatlast);
removecharat_0= word_lc.replace(charat0,"_");
removecharat_4= removecharat_0.replace(charat4,"_");
removecharat_last= removecharat_4.replace(charatlast,"_");
console.log(removecharat_last);
display_word= "<h3>"+removecharat_last+"</h3>";
input_box= "<input id='answer'> <button onclick='submit_answer()'> submit </button>";
document.getElementById("output").innerHTML= display_word+input_box;

}
function submit_answer(){
if(word_lc==document.getElementById("answer").value){
    if(a_turn==2){
        score_2=score_2+1;
        document.getElementById("player2_score").innerHTML=score_2;
        a_turn=1;
        q_turn=2;
    }
    else{score_1=score_1+1;
         document.getElementById("player1_score").innerHTML=score_1;
          a_turn=2;
          q_turn=1;
    }
}


}
var score_2= 0;
var score_1=0;
var q_turn=1;
var a_turn=2;




