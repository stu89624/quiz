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
            document.getElementById("question").innerHTML = "Wie is de hoofdpersoon?";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "John";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Arthur";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Dutch";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Sadie";
            break;

        case 2:
            document.getElementById("question").innerHTML = "Hoelang is er aan de game gewerkt?";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "3 Jaar";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "5 Jaar";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "6 Jaar";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "8 jaar";
            break;
        
        case 3:
            document.getElementById("question").innerHTML = "In welk jaar vind de game plaats";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "1909";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "1899";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "1809";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "1890";
            break;
    
        case 4:
            document.getElementById("question").innerHTML = "De hoeveelste RDR game is dit?";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "1e";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "2e";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "3e";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "4e";
            break;
            
        case 5:
            document.getElementById("question").innerHTML = "In welk jaar is de game gereleased?";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "2016";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "2018";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "2019";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "2020";
            break;

        case 6:
            document.getElementById("question").innerHTML = "Hoe heet de gang waar je in zit?";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Del Lobo Gang";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Lemoyne Raiders";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Van Der Linde Gang";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "O'Driscoll's";
            break;
        
        case 7:
            document.getElementById("question").innerHTML = "Met wie gaat Arthur drinken?";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Lenny";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Hosea";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Javier";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Sadie";
            break;
    
        case 8:
            document.getElementById("question").innerHTML = "Bij welke locatie is je kamp in Chapter 2?";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Strawberry";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Rhodes";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Valentine";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Annesburg";
            break;
            
        case 9:
            document.getElementById("question").innerHTML = "Hoe heet de eerste missie?";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Outlaws from the West";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Old Friends";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Eastward Bound";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "A Quiet Time";
            break;
        
        case 10:
            document.getElementById("question").innerHTML = "Vanuit waar is de gang gevlucht?";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Rhodes";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Tumbleweed";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Valentine";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Blackwater";
            break;
                
                
    }
}

questionUpdate(qnum);

function ans(a){

    switch(a) {
        case 1:
            if (qnum == 9){
                result9 = true;
            }
            if (qnum == 7){
                result7 = true;
            }
            qnum ++;
            questionUpdate(qnum);
            break;

        case 2:
            if (qnum == 1){
                result1 = true;
            }
            if (qnum == 5){
                result5 = true;
            }
            if (qnum == 3){
                result3 = true;
            }
            qnum ++;
            questionUpdate(qnum);
            break;

        case 3:
            if (qnum == 8){
                result8 = true;
            }
            if (qnum == 4){
                result4 = true;
            }
            if (qnum == 6){
                result6 = true;
            }
            qnum ++;
            questionUpdate(qnum);
            break;
        case 4:
            if (qnum == 2){
                result2 = true;
            }
            if (qnum == 10){
                result10 = true;
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