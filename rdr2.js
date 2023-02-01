let qnum = 1;
let question = "";
let btntext1 = "";
let btntext2 = "";
let btntext3 = "";
let btntext4 = "";

let result1 = false;
let result2 = false;
let result3 = false;
let result4 = false;
let result5 = false;
let result6 = false;
let result7 = false;
let result8 = false;
let result9 = false;
let result10 = false;

document.getElementById("ansbtn1").innerHTML = btntext1;
document.getElementById("ansbtn2").innerHTML = btntext2;
document.getElementById("ansbtn3").innerHTML = btntext3;
document.getElementById("ansbtn4").innerHTML = btntext4;

document.getElementById("questionnum").innerHTML = "Vraag " + qnum + "";

function questionUpdate(questionNumber) {
    switch(questionNumber){
        case 1:
            document.getElementById("question").innerHTML = "Er vlogen 2 crocodillen. Een is blauw, de tweede naar het noorden. Hoe oud is de egel?";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Antwoord 1.1";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Antwoord 1.2";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Antwoord 1.3";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Antwoord 1.4";
            break;

        case 2:
            document.getElementById("question").innerHTML = "vraag text 2";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Antwoord 2.1";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Antwoord 2.2";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Antwoord 2.3";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Antwoord 2.4";
            break;
        
        case 3:
            document.getElementById("question").innerHTML = "vraag text 3";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Antwoord 3.1";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Antwoord 3.2";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Antwoord 3.3";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Antwoord 3.4";
            break;
    
        case 4:
            document.getElementById("question").innerHTML = "vraag text 4";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Antwoord 4.1";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Antwoord 4.2";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Antwoord 4.3";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Antwoord 4.4";
            break;
            
        case 5:
            document.getElementById("question").innerHTML = "vraag text 5";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Antwoord 5.1";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Antwoord 5.2";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Antwoord 5.3";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Antwoord 5.4";
            break;

        case 6:
            document.getElementById("question").innerHTML = "vraag text 6";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Antwoord 6.1";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Antwoord 6.2";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Antwoord 6.3";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Antwoord 6.4";
            break;
        
        case 7:
            document.getElementById("question").innerHTML = "vraag text 7";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Antwoord 7.1";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Antwoord 7.2";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Antwoord 7.3";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Antwoord 7.4";
            break;
    
        case 8:
            document.getElementById("question").innerHTML = "vraag text 8";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Antwoord 8.1";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Antwoord 8.2";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Antwoord 8.3";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Antwoord 8.4";
            break;
            
        case 9:
            document.getElementById("question").innerHTML = "vraag text 9";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Antwoord 9.1";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Antwoord 9.2";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Antwoord 9.3";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Antwoord 9.4";
            break;
        
        case 10:
            document.getElementById("question").innerHTML = "vraag text 10";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Antwoord 10.1";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Antwoord 10.2";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Antwoord 10.3";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Antwoord 10.4";
            break;
                
                
    }
}

questionUpdate(qnum);

function ans(a){

    switch(a) {
        case 1:
            if (qnum == 1){
                result1 = true;
            }
            if (qnum == 3){
                result3 = true;
            }
            if (qnum == 6){
                result6 = true;
            }
            qnum ++;
            questionUpdate(qnum);
            break;

        case 2:
            if (qnum == 2){
                result2 = true;
            }
            if (qnum == 10){
                result10 = true;
            }
            qnum ++;
            questionUpdate(qnum);
            break;

        case 3:
            if (qnum == 4){
                result4 = true;
            }
            if (qnum == 5){
                result5 = true;
            }
            qnum ++;
            questionUpdate(qnum);
            break;
        case 4:
            if (qnum == 7){
                result7 = true;
            }
            if (qnum == 8){
                result8 = true;
            }
            if (qnum == 9){
                result9 = true;
            }
            qnum ++;
            questionUpdate(qnum);
            break;
      } 

      if (qnum == 11) {
        document.getElementById("ansbtn1").style.display = "none";
        document.getElementById("ansbtn2").style.display = "none";
        document.getElementById("ansbtn3").style.display = "none";
        document.getElementById("ansbtn4").style.display = "none";

        document.getElementById("resbtn1").style.display = "block";

        document.getElementById("questionnum").innerHTML = "Einde!";
        document.getElementById("question").innerHTML = "Click op de knop onderaan om je resultaten te zien.";
    }

    else {
        document.getElementById("questionnum").innerHTML = "Vraag " + qnum + "";
    }
}

    function res(){
        document.getElementById("ans1").innerHTML = "Vraag 1: " + result1;
        document.getElementById("ans2").innerHTML = "Vraag 2: " + result2;
        document.getElementById("ans3").innerHTML = "Vraag 3: " + result3;
        document.getElementById("ans4").innerHTML = "Vraag 4: " + result4;
        document.getElementById("ans5").innerHTML = "Vraag 5: " + result5;
        document.getElementById("ans6").innerHTML = "Vraag 6: " + result6;
        document.getElementById("ans7").innerHTML = "Vraag 7: " + result7;
        document.getElementById("ans8").innerHTML = "Vraag 8: " + result8;
        document.getElementById("ans9").innerHTML = "Vraag 9: " + result9;
        document.getElementById("ans10").innerHTML = "Vraag 10: " + result10;

        document.getElementById("ans1").style.display = "block";
        document.getElementById("ans2").style.display = "block";
        document.getElementById("ans3").style.display = "block";
        document.getElementById("ans4").style.display = "block";
        document.getElementById("ans5").style.display = "block";
        document.getElementById("ans6").style.display = "block";
        document.getElementById("ans7").style.display = "block";
        document.getElementById("ans8").style.display = "block";
        document.getElementById("ans9").style.display = "block";
        document.getElementById("ans10").style.display = "block";
    }