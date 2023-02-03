let qnum = 1;
let score = 0;
let question = "";
let btntext1 = "";
let btntext2 = "";
let btntext3 = "";
let btntext4 = "";

let result1 = "Fout";
let result2 = "Fout";
let result3 = "Fout";
let result4 = "Fout";
let result5 = "Fout";
let result6 = "Fout";
let result7 = "Fout";
let result8 = "Fout";
let result9 = "Fout";
let result10 = "Fout";

document.getElementById("ansbtn1").innerHTML = btntext1;
document.getElementById("ansbtn2").innerHTML = btntext2;
document.getElementById("ansbtn3").innerHTML = btntext3;
document.getElementById("ansbtn4").innerHTML = btntext4;

document.getElementById("questionnum").innerHTML = "Vraag " + qnum + "";

function questionUpdate(questionNumber) {
    let img1 = new Image;
    img1.height = 200;
    img1.src = "demon1.webp";
    switch(questionNumber){
        case 1:
            document.getElementById("question").innerHTML = "In welk jaar kwam het eerste DOOM game uit?";
            document.getElementById("question2").appendChild(img1);
            btntext1 = document.getElementById("ansbtn1").innerHTML = "1993";//#
            btntext2 = document.getElementById("ansbtn2").innerHTML = "1994";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "2016";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "1999";
            break;

        case 2:
            document.getElementById("question").innerHTML = "Wat is de naam van deze demon?";
            document.getElementById("question2").appendChild(img1);
            document.getElementById("question2").style.opacity = "1";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Hellknight";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Baron of Hell";//#
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Imp";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Hell Lord";
            break;
        
        case 3:
            document.getElementById("question").innerHTML = "Hoeveel wapens waren er in de eerste DOOM game?";
            document.getElementById("question2").appendChild(img1);
            document.getElementById("question2").style.opacity = "0";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "8";//#
            btntext2 = document.getElementById("ansbtn2").innerHTML = "10";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "6";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "5";
            break;
    
        case 4:
            img1.src = "weapon1.webp";

            document.getElementById("question").innerHTML = "Wat is de naam van deze wapen?";
            document.getElementById("question2").appendChild(img1);
            document.getElementById("question2").style.opacity = "1";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Plasmagun";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Chaingun";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "BFG 9000";//#
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Rocket Launcher";
            break;
            
        case 5:
            document.getElementById("question").innerHTML = "Wie was de eindbaas in Doom 2?";
            document.getElementById("question2").appendChild(img1);
            document.getElementById("question2").style.opacity = "0";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Spider Mastermind";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Cyberdemon";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Icon of Sin";//#
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Mother Demon";
            break;

        case 6:
            img1.src = "weapon2.webp";

            document.getElementById("question").innerHTML = "Wat is de naam van deze wapen?";
            document.getElementById("question2").appendChild(img1);
            document.getElementById("question2").style.opacity = "1";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Unmaykr";//#
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Unmaker";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Plasmagun";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "BFG 9000";
            break;
        
        case 7:
            img1.src = "demon2.webp";

            document.getElementById("question").innerHTML = "Wat is de naam van deze demon?";
            document.getElementById("question2").appendChild(img1);
            document.getElementById("question2").style.opacity = "1";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Pinky";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Mancubus";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Cyberdemon";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Cybermancubus";//#
            break;
    
        case 8:
            document.getElementById("question").innerHTML = "In DOOM (2016) kan elke demon worden afgemaakt met een melee attack. Er is maar een demon waarbij dat niet kan. Welke demon is dat?";
            document.getElementById("question2").appendChild(img1);
            document.getElementById("question2").style.opacity = "0";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Spider Mastermind";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Cyberdemon";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Baron of Hell";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Lost Soul";//#
            break;
            
        case 9:
            document.getElementById("question").innerHTML = "Wat is de naam van de demon die onzichtbaar is?";
            document.getElementById("question2").appendChild(img1);
            document.getElementById("question2").style.opacity = "0";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "Archvile";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Lost Soul";
            btntext3 = document.getElementById("ansbtn3").innerHTML = "Nightmare Imp";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Spectre";//#
            break;
        
        case 10:
            document.getElementById("question").innerHTML = "Elke Doom game heeft een Berserk powerup. Maar in slechts een game maakt Berserk jou onsterfelijk. In welke Doom game was dat het geval?";
            document.getElementById("question2").appendChild(img1);
            document.getElementById("question2").style.opacity = "0";
            btntext1 = document.getElementById("ansbtn1").innerHTML = "DOOM (2016)";
            btntext2 = document.getElementById("ansbtn2").innerHTML = "Doom 3";//#
            btntext3 = document.getElementById("ansbtn3").innerHTML = "DOOM ETERNAL";
            btntext4 = document.getElementById("ansbtn4").innerHTML = "Doom 64";
            break;
                
                
    }
}

questionUpdate(qnum);

function ans(a){

    document.getElementById("question2").innerHTML = ""; //remove the image

    switch(a) {
        case 1:
            if (qnum == 1){
                result1 = "Correct";
                score ++;
            }
            if (qnum == 3){
                result3 = "Correct";
                score ++;
            }
            if (qnum == 6){
                result6 = "Correct";
                score ++;
            }
            qnum ++;
            questionUpdate(qnum);
            break;

        case 2:
            if (qnum == 2){
                result2 = "Correct";
                score ++;
            }
            if (qnum == 10){
                result10 = "Correct";
                score ++;
            }
            qnum ++;
            questionUpdate(qnum);
            break;

        case 3:
            if (qnum == 4){
                result4 = "Correct";
                score ++;
            }
            if (qnum == 5){
                result5 = "Correct";
                score ++;
            }
            qnum ++;
            questionUpdate(qnum);
            break;
        case 4:
            if (qnum == 7){
                result7 = "Correct";
                score ++;
            }
            if (qnum == 8){
                result8 = "Correct";
                score ++;
            }
            if (qnum == 9){
                result9 = "Correct";
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
        let elements1 = document.getElementsByClassName('div1');
        for(let i=0; i<elements1.length; i++) { 
        elements1[i].style.display='none';
        }

        let elements2 = document.getElementsByClassName('div2');
        for(let i=0; i<elements2.length; i++) { 
        elements2[i].style.display='none';
        }

        document.getElementById("div3").style.display = "block";
        document.getElementById("div4").style.display = "block";

        document.getElementById("welcome").innerHTML = "Resultaten: ";
        document.getElementById("welcome2").style.display = "none";
        document.getElementById("div5").style.display = "none";
        document.getElementById("startbtn1").style.display = "none";

        document.getElementById("ans1").innerHTML = "Vraag 1: <b>" + result1+"</b>";
        document.getElementById("ans2").innerHTML = "Vraag 2: <b>" + result2+"</b>";
        document.getElementById("ans3").innerHTML = "Vraag 3: <b>" + result3+"</b>";
        document.getElementById("ans4").innerHTML = "Vraag 4: <b>" + result4+"</b>";
        document.getElementById("ans5").innerHTML = "Vraag 5: <b>" + result5 +"</b>";
        document.getElementById("ans6").innerHTML = "Vraag 6: <b>" + result6 +"</b>";
        document.getElementById("ans7").innerHTML = "Vraag 7: <b>" + result7 +"</b>";
        document.getElementById("ans8").innerHTML = "Vraag 8: <b>" + result8 +"</b>";
        document.getElementById("ans9").innerHTML = "Vraag 9: <b>" + result9+"</b>";
        document.getElementById("ans10").innerHTML = "Vraag 10: <b>" + result10+"</b>";

        if (result1 == "Correct"){
            document.getElementById("ans1").children[0].style.color = "green";
        }
        if (result2 == "Correct"){
            document.getElementById("ans2").children[0].style.color = "green";
        }
        if (result3 == "Correct"){
            document.getElementById("ans3").children[0].style.color = "green";
        }
        if (result4 == "Correct"){
            document.getElementById("ans4").children[0].style.color = "green";
        }
        if (result5 == "Correct"){
            document.getElementById("ans5").children[0].style.color = "green";
        }
        if (result6 == "Correct"){
            document.getElementById("ans6").children[0].style.color = "green";
        }
        if (result7 == "Correct"){
            document.getElementById("ans7").children[0].style.color = "green";
        }
        if (result8 == "Correct"){
            document.getElementById("ans8").children[0].style.color = "green";
        }
        if (result9 == "Correct"){
            document.getElementById("ans9").children[0].style.color = "green";
        }
        if (result10 == "Correct"){
            document.getElementById("ans10").children[0].style.color = "green";
        }

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
        document.getElementById("startbtn2").style.display = "block";
        document.getElementById("score").style.display = "block";
}

    function start(){
        document.getElementById("div3").style.display = "none";
        document.getElementById("div4").style.display = "none";

        let elements3 = document.getElementsByClassName('logo');
        for(let i=0; i<elements3.length; i++) { 
        elements3[i].style.display='none';
        }

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
