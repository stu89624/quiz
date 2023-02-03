
let qnum = 1;
let question = "";
let btntext1 = "";
let btntext2 = "";
let btntext3 = "";
let btntext4 = "";

let score = 0;

let result1 = "fout";
let result2 = "fout";
let result3 = "fout";
let result4 = "fout";
let result5 = "fout";
let result6 = "fout";
let result7 = "fout";
let result8 = "fout";
let result9 = "fout";
let result10 = "fout";

document.getElementById("ansbtn1").innerHTML = btntext1;
document.getElementById("ansbtn2").innerHTML = btntext2;
document.getElementById("ansbtn3").innerHTML = btntext3;
document.getElementById("ansbtn4").innerHTML = btntext4;

document.getElementById("questionnum").innerHTML = "Vraag " + qnum + "";

function questionUpdate(questionNumber) {
    switch(questionNumber){
        case 1:
            document.getElementById("question").innerHTML = "In welke jaar kwam Valorant uit?";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "2019";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "2022";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "2020";//#
            btntext4 = document.getElementById("ansbtn4").innerHTML = "2016";
            btnsize();
            break;

        case 2:
         

            document.getElementById("question").innerHTML = "Wat was de naam die Valorant kreeg voor Valorant";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Valorant";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Project A";//#
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Project X";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "CSGO";
            break;
        
        case 3:
            document.getElementById("question").innerHTML = "Hoeveel agents zijn er in Valorant?";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "20";//#
            btntext2 = document.getElementById("ansbtn2").innerHTML = "15";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "17";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "24";
            btnsize();
            break;
    
        case 4:
          

            document.getElementById("question").innerHTML = "Welke wapen doet alleen 140 DMG met een headshot?";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Marshal";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Vandal";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Phantom";//#
            btntext4 = document.getElementById("ansbtn4").innerHTML = "AWP";
            btnsize();
            break;
            
        case 5:
            document.getElementById("question").innerHTML = "Hoeveel ranks zijn er in Valorant";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "5";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "7";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "9";//#
            btntext4 = document.getElementById("ansbtn4").innerHTML = "4";
            btnsize();
            break;

        case 6:
            document.getElementById("question").innerHTML = "Hoeveel kost een Operator? (sniper)";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "4750";//#
            btntext2 = document.getElementById("ansbtn2").innerHTML = "5000";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "4200";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "5200";
            btnsize();
            break;
        
        case 7:
            document.getElementById("question").innerHTML = "Wat is Cyphers afkomst?";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Egypte";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Afrika";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Rusland";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Marokko";//#
            btnsize();
            break;
    
        case 8:
            document.getElementById("question").innerHTML = "Wat is de voiceline van Phoenix?";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Here comes the party";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Open up the sky";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Watch them run";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Jokes over your dead";//#
            btnsize();
            break;
            
        case 9:
            document.getElementById("question").innerHTML = "Wie is de nieuwste agent?";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Neon";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Fade";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Astra";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Harbor";//#
            btnsize();
            break;
        
        case 10:
            document.getElementById("question").innerHTML = "Wat is de hoogste rank?";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Diamond";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Radiant";//#
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Immortal";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Ascendent";
            btnsize();
            break;
                
                
    }
}

questionUpdate(qnum);

function ans(a){

    document.getElementById("question2").innerHTML = "";

    switch(a) {
        case 1:
            if (qnum == 6){
                result6 = "goed";
                score ++;
            }

            if (qnum == 3){
                result3 = "goed";
                score ++;
            }
            qnum ++;
            questionUpdate(qnum);
            break;

        case 2:
            if (qnum == 2){
                result2 = "goed";
                score ++;
            }

            if (qnum == 10){
                result10 = "goed";
                score ++;
            }
            qnum ++;
            questionUpdate(qnum);
            break;

        case 3:
            if (qnum == 1){
                result1 = "goed";
                score ++;
            }

            if (qnum == 4){
                result4 = "goed";
                score ++;
            }

            if (qnum == 5){
                result5 = "goed";
                score ++;
            }
            qnum ++;
            questionUpdate(qnum);
            break;
        case 4:
            if (qnum == 7){
                result7 = "goed";
                score ++;
            }
            if (qnum == 8){
                result8 = "goed";
                score ++;
            }

            if (qnum == 9){
                result9 = "goed";
                score ++;
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
        document.getElementById("score").innerHTML = "Score: " + score + "/10";

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

        if (result1 == "goed"){
            document.getElementById("ans1").style.color = "green";
        }
        if (result2 == "goed"){
            document.getElementById("ans2").style.color = "green";
        }
        if (result3 == "goed"){
            document.getElementById("ans3").style.color = "green";
        }
        if (result4 == "goed"){
            document.getElementById("ans4").style.color = "green";
        }
        if (result5 == "goed"){
            document.getElementById("ans5").style.color = "green";
        }
        if (result6 == "goed"){
            document.getElementById("ans6").style.color = "green";
        }
        if (result7 == "goed"){
            document.getElementById("ans7").style.color = "green";
        }
        if (result8 == "goed"){
            document.getElementById("ans8").style.color = "green";
        }
        if (result9 == "goed"){
            document.getElementById("ans9").style.color = "green";
        }
        if (result10 == "goed"){
            document.getElementById("ans10").style.color = "green";
        }



        if (result1 == "fout"){
            document.getElementById("ans1").style.color = "red";
        }
        if (result2 == "fout"){
            document.getElementById("ans2").style.color = "red";
        }
        if (result3 == "fout"){
            document.getElementById("ans3").style.color = "red";
        }
        if (result4 == "fout"){
            document.getElementById("ans4").style.color = "red";
        }
        if (result5 == "fout"){
            document.getElementById("ans5").style.color = "red";
        }
        if (result6 == "fout"){
            document.getElementById("ans6").style.color = "red";
        }
        if (result7 == "fout"){
            document.getElementById("ans7").style.color = "red";
        }
        if (result8 == "fout"){
            document.getElementById("ans8").style.color = "red";
        }
        if (result9 == "fout"){
            document.getElementById("ans9").style.color = "red";
        }
        if (result10 == "fout"){
            document.getElementById("ans10").style.color = "red";
        }
    }

    function start(){
        document.getElementById("div3").style.display = "none";
        document.getElementById("div4").style.display = "none";

        let elements1 = document.getElementsByClassName('div1');
        for(let i=0; i<elements1.length; i++) { 
        elements1[i].style.display='block';
        }

        let elements2 = document.getElementsByClassName('div2');
        for(let i=0; i<elements2.length; i++) { 
        elements2[i].style.display='block';
        }
    }

    function fadein1(){
        let elements1 = document.getElementsByClassName('logo');
        for(let i=0; i<elements1.length; i++) { 
        elements1[i].style.opacity='1';
        elements1[i].style.transform='translate3d(0, 0, 0)';
        }
    }

    function fadein2(){
        document.getElementById("div3").style.opacity='1';
        document.getElementById("div3").style.transform='translate3d(0, 0, 0)';

        document.getElementById("div4").style.opacity='1';
        document.getElementById("div4").style.transform='translate3d(0, 0, 0)';
    }

    setTimeout(fadein1,1000);
    setTimeout(fadein2,1500);


    function btnsize(){
        if (btntext1.length > 13){
            document.getElementById("ansbtn1").style.fontSize = "2vw";
        }
        else {
            document.getElementById("ansbtn1").style.fontSize = "2vw";
        }

        if (btntext2.length > 13){
            document.getElementById("ansbtn2").style.fontSize = "2vw";
        }
        else {
            document.getElementById("ansbtn2").style.fontSize = "2vw";
        }

        if (btntext3.length > 13){
            document.getElementById("ansbtn3").style.fontSize = "2vw";
        }
        else {
            document.getElementById("ansbtn3").style.fontSize = "2vw";
        }

        if (btntext4.length > 13){
            document.getElementById("ansbtn4").style.fontSize = "2vw";
        }
        else {
            document.getElementById("ansbtn4").style.fontSize = "2vw";
        }
    }