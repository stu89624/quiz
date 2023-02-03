let username = window.prompt("Vul je naam in");

let qnum = 1;
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

let score = 0;

document.getElementById("ansbtn1").innerHTML = btntext1;
document.getElementById("ansbtn2").innerHTML = btntext2;
document.getElementById("ansbtn3").innerHTML = btntext3;
document.getElementById("ansbtn4").innerHTML = btntext4;

document.getElementById("questionnum").innerHTML = "Vraag " + qnum + "";

function questionUpdate(questionNumber) {
  switch (questionNumber) {
    case 1:
      document.getElementById("question").innerHTML = "Wie is de main character?";
      btntext1 = document.getElementById("ansbtn1").innerHTML = "John";
      btntext2 = document.getElementById("ansbtn2").innerHTML = "Arthur"; //x
      btntext3 = document.getElementById("ansbtn3").innerHTML = "Dutch";
      btntext4 = document.getElementById("ansbtn4").innerHTML = "Sadie";
      break;

    case 2:
      document.getElementById("question").innerHTML = "Hoelang is er aan de game gewerkt?";
      btntext1 = document.getElementById("ansbtn1").innerHTML = "3 Jaar";
      btntext2 = document.getElementById("ansbtn2").innerHTML = "5 Jaar";
      btntext3 = document.getElementById("ansbtn3").innerHTML = "6 Jaar";
      btntext4 = document.getElementById("ansbtn4").innerHTML = "8 jaar";//x
      break;

    case 3:
      document.getElementById("question").innerHTML = "In welk jaar vind de game plaats";
      btntext1 = document.getElementById("ansbtn1").innerHTML = "1909";
      btntext2 = document.getElementById("ansbtn2").innerHTML = "1899";//x
      btntext3 = document.getElementById("ansbtn3").innerHTML = "1809";
      btntext4 = document.getElementById("ansbtn4").innerHTML = "1890";
      break;

    case 4:
      document.getElementById("question").innerHTML = "De hoeveelste Red Dead game is dit?";
      btntext1 = document.getElementById("ansbtn1").innerHTML = "1e";
      btntext2 = document.getElementById("ansbtn2").innerHTML = "2e";
      btntext3 = document.getElementById("ansbtn3").innerHTML = "3e";//x
      btntext4 = document.getElementById("ansbtn4").innerHTML = "4e";
      break;

    case 5:
      document.getElementById("question").innerHTML = "In welk jaar is de game gereleased?";
      btntext1 = document.getElementById("ansbtn1").innerHTML = "2016";
      btntext2 = document.getElementById("ansbtn2").innerHTML = "2018";//x
      btntext3 = document.getElementById("ansbtn3").innerHTML = "2019";
      btntext4 = document.getElementById("ansbtn4").innerHTML = "2020";
      break;

    case 6:
      document.getElementById("question").innerHTML = "Wie is de leider van de Van Der Linde gang";
      btntext1 = document.getElementById("ansbtn1").innerHTML = "Charles";
      btntext2 = document.getElementById("ansbtn2").innerHTML = "Micah";
      btntext3 = document.getElementById("ansbtn3").innerHTML = "Dutch";//x
      btntext4 = document.getElementById("ansbtn4").innerHTML = "Arthur";
      break;

    case 7:
      document.getElementById("question").innerHTML = "Met wie gaat Arthur drinken?";
      btntext1 = document.getElementById("ansbtn1").innerHTML = "Lenny";//x
      btntext2 = document.getElementById("ansbtn2").innerHTML = "Hosea";
      btntext3 = document.getElementById("ansbtn3").innerHTML = "Javier";
      btntext4 = document.getElementById("ansbtn4").innerHTML = "Sadie";
      break;

    case 8:
      document.getElementById("question").innerHTML = "Bij welke locatie is je kamp in Chapter 2?";
      btntext1 = document.getElementById("ansbtn1").innerHTML = "Strawberry";
      btntext2 = document.getElementById("ansbtn2").innerHTML = "Rhodes";
      btntext3 = document.getElementById("ansbtn3").innerHTML = "Valentine";//x
      btntext4 = document.getElementById("ansbtn4").innerHTML = "Annesburg";
      break;

    case 9:
      document.getElementById("question").innerHTML = "Welk dier zit niet in de game?";
      btntext1 = document.getElementById("ansbtn1").innerHTML = "Nijlpaard";//x
      btntext2 = document.getElementById("ansbtn2").innerHTML = "Eland";
      btntext3 = document.getElementById("ansbtn3").innerHTML = "Alligator";
      btntext4 = document.getElementById("ansbtn4").innerHTML = "Grizzlybeer";
      break;

    case 10:
      document.getElementById("question").innerHTML = "Vanuit waar is de gang gevlucht?";
      btntext1 = document.getElementById("ansbtn1").innerHTML = "Rhodes";
      btntext2 = document.getElementById("ansbtn2").innerHTML = "Tumbleweed";
      btntext3 = document.getElementById("ansbtn3").innerHTML = "Valentine";
      btntext4 = document.getElementById("ansbtn4").innerHTML = "Blackwater";//x
      break;
  }
}

questionUpdate(qnum);

function ans(a) {
  switch (a) {
    case 1:
      if (qnum == 9) {
        result9 = "Goed";
        document.getElementById("detailscore9").classList.add("dtscore")
        score++;
      }
      if (qnum == 7) {
        result7 = "Goed";
        document.getElementById("detailscore7").classList.add("dtscore")
        score++;
      }
      qnum++;
      questionUpdate(qnum);
      break;

    case 2:
      if (qnum == 1) {
        result1 = "Goed";
        document.getElementById("detailscore1").classList.add("dtscore")
        score++;
      }
      if (qnum == 5) {
        result5 = "Goed";
        document.getElementById("detailscore5").classList.add("dtscore")
        score++;
      }
      if (qnum == 3) {
        result3 = "Goed";
        document.getElementById("detailscore3").classList.add("dtscore")
        score++;
      }
      qnum++;
      questionUpdate(qnum);
      break;

    case 3:
      if (qnum == 8) {
        result8 = "Goed";
        document.getElementById("detailscore8").classList.add("dtscore")
        score++;
      }
      if (qnum == 4) {
        result4 = "Goed";
        document.getElementById("detailscore4").classList.add("dtscore")
        score++;
      }
      if (qnum == 6) {
        result6 = "Goed";
        document.getElementById("detailscore6").classList.add("dtscore")
        score++;
      }
      qnum++;
      questionUpdate(qnum);
      break;
    case 4:
      if (qnum == 2) {
        result2 = "Goed";
        document.getElementById("detailscore2").classList.add("dtscore")
        score++;
      }
      if (qnum == 10) {
        result10 = "Goed";
        document.getElementById("detailscore10").classList.add("dtscore")
        score++;
      }
      qnum++;
      questionUpdate(qnum);
      break;
  }

  if (qnum == 11) {
    document.getElementById("ansbtn1").style.display = "none";
    document.getElementById("ansbtn2").style.display = "none";
    document.getElementById("ansbtn3").style.display = "none";
    document.getElementById("ansbtn4").style.display = "none";

    document.getElementById("resbtn1").style.display = "block";
    document.getElementById("collapsible").style.display = "block";

    document.getElementById("questionnum").innerHTML = "Einde!";
    document.getElementById("question").innerHTML = "Klik hieronder om je score te bekijken";
  }
  else {
    document.getElementById("questionnum").innerHTML = "Vraag " + qnum + "";
  }
}

//Score tekst
function res() {
  if (username == "") {
    document.getElementById("resultaat").innerHTML = `Je hebt ${score}/10 goed`;
  }
  else if (username == null) {
    document.getElementById("resultaat").innerHTML = `Je hebt ${score}/10 goed`;
  }
  else if (username == undefined) {
    document.getElementById("resultaat").innerHTML = `Je hebt ${score}/10 goed`;
  }
  else {
    document.getElementById("resultaat").innerHTML = `Score van ${username}: ${score}/10 goed`;
  }
}

//fades
function fadein1() {
  let elements1 = document.getElementsByClassName('logo');
  for (let i = 0; i < elements1.length; i++) {
    elements1[i].style.opacity = '1';
    elements1[i].style.transform = 'translate3d(0, 0, 0)';
  }
}

function fadein2() {
  let elements1 = document.getElementsByClassName('div1');
  for (let i = 0; i < elements1.length; i++) {
    elements1[i].style.opacity = '1';
    elements1[i].style.transform = 'translate3d(0, 0, 0)';
  }
}

function fadein3() {
  let elements1 = document.getElementsByClassName('div2');
  for (let i = 0; i < elements1.length; i++) {
    elements1[i].style.opacity = '1';
    elements1[i].style.transform = 'translate3d(0, 0, 0)';
  }
}

function fadein4() {
  let elements1 = document.getElementsByClassName('vraagnr');
  for (let i = 0; i < elements1.length; i++) {
    elements1[i].style.opacity = '1';
    elements1[i].style.transform = 'translate3d(0, 0, 0)';
  }
}

setTimeout(fadein1, 800);
setTimeout(fadein2, 1200);
setTimeout(fadein3, 1600);
setTimeout(fadein4, 1600);


let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function detail() {
  document.getElementById("detailscore1").innerHTML = "Vraag 1: " + `<strong>${result1}</strong>`;
  document.getElementById("detailscore2").innerHTML = "Vraag 2: " + `<strong>${result2}</strong>`;
  document.getElementById("detailscore3").innerHTML = "Vraag 3: " + `<strong>${result3}</strong>`;
  document.getElementById("detailscore4").innerHTML = "Vraag 4: " + `<strong>${result4}</strong>`;
  document.getElementById("detailscore5").innerHTML = "Vraag 5: " + `<strong>${result5}</strong>`;
  document.getElementById("detailscore6").innerHTML = "Vraag 6: " + `<strong>${result6}</strong>`;
  document.getElementById("detailscore7").innerHTML = "Vraag 7: " + `<strong>${result7}</strong>`;
  document.getElementById("detailscore8").innerHTML = "Vraag 8: " + `<strong>${result8}</strong>`;
  document.getElementById("detailscore9").innerHTML = "Vraag 9: " + `<strong>${result9}</strong>`;
  document.getElementById("detailscore10").innerHTML = "Vraag 10: " + `<strong>${result10}</strong>`;
}

