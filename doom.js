let qnum = 1;
let question = "";
let btntext1 = "";
let btntext2 = "";
let btntext3 = "";
let btntext4 = "";
let text = "";
let text2 = "";

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
document.getElementById("ans").innerHTML = text;
document.getElementById("ans2").innerHTML = text2;

function questionUpdate(questionNumber) {
    switch(questionNumber){
        case 1:
            question = document.getElementById("question").innerHTML = "Er vlogen 2 crocodillen. Een is blauw, de tweede naar het noorden. Hoe oud is de egel?";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Antwoord 1.1";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Antwoord 1.2";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Antwoord 1.3";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Antwoord 1.4";
            break;

        case 2:
            question = document.getElementById("question").innerHTML = "vraag text 2";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Antwoord 2.1";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Antwoord 2.2";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Antwoord 2.3";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Antwoord 2.4";
            break;
        
        case 3:
            question = document.getElementById("question").innerHTML = "vraag text 3";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Antwoord 3.1";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Antwoord 3.2";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Antwoord 3.3";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Antwoord 3.4";
            break;
    
        case 4:
            question = document.getElementById("question").innerHTML = "vraag text 4";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Antwoord 4.1";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Antwoord 4.2";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Antwoord 4.3";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Antwoord 4.4";
            break;
            
        case 5:
            question = document.getElementById("question").innerHTML = "vraag text 5";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Antwoord 5.1";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Antwoord 5.2";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Antwoord 5.3";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Antwoord 5.4";
            break;

        case 6:
            question = document.getElementById("question").innerHTML = "vraag text 6";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Antwoord 6.1";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Antwoord 6.2";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Antwoord 6.3";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Antwoord 6.4";
            break;
        
        case 7:
            question = document.getElementById("question").innerHTML = "vraag text 7";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Antwoord 7.1";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Antwoord 7.2";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Antwoord 7.3";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Antwoord 7.4";
            break;
    
        case 8:
            question = document.getElementById("question").innerHTML = "vraag text 8";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Antwoord 8.1";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Antwoord 8.2";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Antwoord 8.3";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Antwoord 8.4";
            break;
            
        case 9:
            question = document.getElementById("question").innerHTML = "vraag text 9";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Antwoord 9.1";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Antwoord 9.2";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Antwoord 9.3";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Antwoord 9.4";
            break;
        
        case 10:
            question = document.getElementById("question").innerHTML = "vraag text 10";
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
        default:
            text = "0";
      } 

    document.getElementById("questionnum").innerHTML = "Vraag " + qnum + "";
    }