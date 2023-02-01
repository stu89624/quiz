let qnum = 1;
let question = "";
let btntext1 = "";
let btntext2 = "";
let btntext3 = "";
let btntext4 = "";

let score = 0;

document.getElementById("ansbtn1").innerHTML = btntext1;
document.getElementById("ansbtn2").innerHTML = btntext2;
document.getElementById("ansbtn3").innerHTML = btntext3;
document.getElementById("ansbtn4").innerHTML = btntext4;

document.getElementById("questionnum").innerHTML = "Vraag " + qnum + "";

function questionUpdate(questionNumber) {
  switch (questionNumber) {
    case 1:
      document.getElementById("question").innerHTML = "Wie is de hoofdpersoon?";
      btntext1 = document.getElementById("ansbtn1").innerHTML = "John";
      btntext2 = document.getElementById("ansbtn2").innerHTML = "Arthur";
      btntext3 = document.getElementById("ansbtn3").innerHTML = "Dutch";
      btntext4 = document.getElementById("ansbtn4").innerHTML = "Sadie";
      break;

    case 2:
      document.getElementById("question").innerHTML =
        "Hoelang is er aan de game gewerkt?";
      btntext1 = document.getElementById("ansbtn1").innerHTML = "3 Jaar";
      btntext2 = document.getElementById("ansbtn2").innerHTML = "5 Jaar";
      btntext3 = document.getElementById("ansbtn3").innerHTML = "6 Jaar";
      btntext4 = document.getElementById("ansbtn4").innerHTML = "8 jaar";
      break;

    case 3:
      document.getElementById("question").innerHTML =
        "In welk jaar vind de game plaats";
      btntext1 = document.getElementById("ansbtn1").innerHTML = "1909";
      btntext2 = document.getElementById("ansbtn2").innerHTML = "1899";
      btntext3 = document.getElementById("ansbtn3").innerHTML = "1809";
      btntext4 = document.getElementById("ansbtn4").innerHTML = "1890";
      break;

    case 4:
      document.getElementById("question").innerHTML =
        "De hoeveelste RDR game is dit?";
      btntext1 = document.getElementById("ansbtn1").innerHTML = "1e";
      btntext2 = document.getElementById("ansbtn2").innerHTML = "2e";
      btntext3 = document.getElementById("ansbtn3").innerHTML = "3e";
      btntext4 = document.getElementById("ansbtn4").innerHTML = "4e";
      break;

    case 5:
      document.getElementById("question").innerHTML =
        "In welk jaar is de game gereleased?";
      btntext1 = document.getElementById("ansbtn1").innerHTML = "2016";
      btntext2 = document.getElementById("ansbtn2").innerHTML = "2018";
      btntext3 = document.getElementById("ansbtn3").innerHTML = "2019";
      btntext4 = document.getElementById("ansbtn4").innerHTML = "2020";
      break;

    case 6:
      document.getElementById("question").innerHTML =
        "Hoe heet de gang waar je in zit?";
      btntext1 = document.getElementById("ansbtn1").innerHTML = "Lobo";
      btntext2 = document.getElementById("ansbtn2").innerHTML = "Lemoyne";
      btntext3 = document.getElementById("ansbtn3").innerHTML = "Van Der Linde";
      btntext4 = document.getElementById("ansbtn4").innerHTML = "O'Driscoll's";
      break;

    case 7:
      document.getElementById("question").innerHTML =
        "Met wie gaat Arthur drinken?";
      btntext1 = document.getElementById("ansbtn1").innerHTML = "Lenny";
      btntext2 = document.getElementById("ansbtn2").innerHTML = "Hosea";
      btntext3 = document.getElementById("ansbtn3").innerHTML = "Javier";
      btntext4 = document.getElementById("ansbtn4").innerHTML = "Sadie";
      break;

    case 8:
      document.getElementById("question").innerHTML =
        "Bij welke locatie is je kamp in Chapter 2?";
      btntext1 = document.getElementById("ansbtn1").innerHTML = "Strawberry";
      btntext2 = document.getElementById("ansbtn2").innerHTML = "Rhodes";
      btntext3 = document.getElementById("ansbtn3").innerHTML = "Valentine";
      btntext4 = document.getElementById("ansbtn4").innerHTML = "Annesburg";
      break;

    case 9:
      document.getElementById("question").innerHTML =
        "Hoe heet de eerste missie?";
      btntext1 = document.getElementById("ansbtn1").innerHTML =
        "Outlaws from the West";
      btntext2 = document.getElementById("ansbtn2").innerHTML = "Old Friends";
      btntext3 = document.getElementById("ansbtn3").innerHTML =
        "Eastward Bound";
      btntext4 = document.getElementById("ansbtn4").innerHTML = "A Quiet Time";
      break;

    case 10:
      document.getElementById("question").innerHTML =
        "Vanuit waar is de gang gevlucht?";
      btntext1 = document.getElementById("ansbtn1").innerHTML = "Rhodes";
      btntext2 = document.getElementById("ansbtn2").innerHTML = "Tumbleweed";
      btntext3 = document.getElementById("ansbtn3").innerHTML = "Valentine";
      btntext4 = document.getElementById("ansbtn4").innerHTML = "Blackwater";
      break;
  }
}

questionUpdate(qnum);

function ans(a) {
  switch (a) {
    case 1:
      if (qnum == 9) {
        score++;
      }
      if (qnum == 7) {
        score++;
      }
      qnum++;
      questionUpdate(qnum);
      break;

    case 2:
      if (qnum == 1) {
        score++;
      }
      if (qnum == 5) {
        score++;
      }
      if (qnum == 3) {
        score++;
      }
      qnum++;
      questionUpdate(qnum);
      break;

    case 3:
      if (qnum == 8) {
        score++;
      }
      if (qnum == 4) {
        score++;
      }
      if (qnum == 6) {
        score++;
      }
      qnum++;
      questionUpdate(qnum);
      break;
    case 4:
      if (qnum == 2) {
        score++;
      }
      if (qnum == 10) {
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

    document.getElementById("questionnum").innerHTML = "Einde!";
    document.getElementById("question").innerHTML =
      "Click op de knop onderaan om je resultaten te zien.";
  }
   else {
    document.getElementById("questionnum").innerHTML = "Vraag " + qnum + "";
  }
}

function res() {
  document.getElementById("resultaat").innerHTML = score + "/10";
}
