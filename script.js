
var tab= ["","","","","","","","",""]

let i = 0;
let etat = false;

function jouer(element)
{
    let cochez=document.getElementById("coche");

    if(element.innerHTML==="X" || element.innerHTML==="O")
    {

        cochez.innerHTML="Cochez une case vide !";
        cochez.classList.add("joueurx");
    }
    else{
        cochez.innerHTML=null;
        cochez.classList.remove("joueurx");
    }


    if(tab[i]=="" && etat==false)
    {

        if(element.innerHTML!=="X" && element.innerHTML!=="O") {
            tab[i] = "X";
            element.innerHTML = tab[i];
            etat = true;
            element.setAttribute("class", "rouge");
            let a= document.getElementById("image");
            a.setAttribute("src","imgo.png");

            let joueurO = document.getElementById("joueurxo");
            joueurO.innerHTML="Joueur O";
            joueurO.setAttribute("class","joueuro");
            i++;

        }

    }
    else if(tab[i]=="" && etat==true)
    {


        if(element.innerHTML!=="X" && element.innerHTML!=="O") {
            tab[i] = "O";
            element.innerHTML = tab[i];
            element.setAttribute("class", "bleu");
            let a= document.getElementById("image");
            a.setAttribute("src","imgx.png");

            let joueurX = document.getElementById("joueurxo");
            joueurX.innerHTML="Joueur X";
            joueurX.setAttribute("class","joueurx");

            i++;
            etat = false;
        }

    }
    else
        alert("Message d'erreur");


    XOgagne();

}

function XOgagne() {

    let c1 = document.getElementById("c1").innerHTML;
    let c2 = document.getElementById("c2").innerHTML;
    let c3 = document.getElementById("c3").innerHTML;
    let c4 = document.getElementById("c4").innerHTML;
    let c5 = document.getElementById("c5").innerHTML;
    let c6 = document.getElementById("c6").innerHTML;
    let c7 = document.getElementById("c7").innerHTML;
    let c8 = document.getElementById("c8").innerHTML;
    let c9 = document.getElementById("c9").innerHTML;
    let gagne = document.getElementById("gagne");

    let etat = 0;

    if ((c1 === c2) && (c2 === c3) && (c3 === "X" || c3 === "O")) {
        if (c3 === "X") etat = 1;
        else   etat = 2;
    }
    else if ((c4 === c5) && (c5 === c6) && (c6 === "X" || c6 === "O")) {
        if (c6 === "X") etat = 1;
        else  etat = 2;
    }
    else if ((c7 === c8) && (c8 === c9) && (c9 === "X" || c9 === "O")) {
        if (c9 === "X")   etat = 1;
        else  etat = 2;
    }
    else  if ((c1 === c4) && (c4 === c7) && (c7 === "X" || c7 === "O")) {
        if (c7 === "X") etat = 1;
        else  etat = 2;
    }
    else if ((c2 === c5) && (c5 === c8) && (c8 === "X" || c8 === "O")) {
        if (c8 === "X") etat = 1;
        else  etat = 2;
    }
    else if ((c3 === c6) && (c6 === c9) && (c9 === "X" || c9 === "O")) {
        if (c9 == "X") etat = 1;
        else  etat = 2;
    }
    else if ((c1 === c5) && (c5 === c9) && (c9 === "X" || c9 === "O")) {
        if (c9 === "X") etat = 1;
        else  etat = 2;

    }
    else if ((c3 === c5) && (c5 === c7) && (c7 === "X"|| c7 === "O")) {
        if (c7 === "X") etat = 1;
        else  etat = 2;
    }


    if (etat === 1)
    {
        gagne.innerHTML = "X gagne!";
        gagne.setAttribute("class", "gagne");
    }
    else if(etat===2)
    {
        gagne.innerHTML = "O gagne!";
        gagne.setAttribute("class", "gagne");
    }

    let occ=0;
    for (let i=0 ; i<tab.length;i++)
    {
        if(tab[i]!=="")
        {
            occ++;
        }
    }
    if(occ===9 && etat !==(1 || 2))
    {
        gagne.innerHTML = "Partie nulle !";
        gagne.setAttribute("class", "gagne");
        let a= document.getElementById("image");
        a.setAttribute("src","imgnulle.png");
    }

}

