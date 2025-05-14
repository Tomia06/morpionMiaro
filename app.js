// jeu du morpion
// faire un compteur de points
// faire un bouton démarrer la partie
// pouvoir choisir entre rond et croix
// A la fin écrire le gagnant et incrémenter 1 au gagnant
// Pouvoir reset les scores

const caseMorpion = document.querySelectorAll('.caseMorpion');

const case1 = caseMorpion[0];
const case2 = caseMorpion[1];
const case3 = caseMorpion[2];
const case4 = caseMorpion[3];
const case5 = caseMorpion[4];
const case6 = caseMorpion[5];
const case7 = caseMorpion[6];
const case8 = caseMorpion[7];
const case9 = caseMorpion[8];


console.log(caseMorpion);

let j = 1;
let score = 0
caseMorpion.forEach((element) => {
    element.addEventListener('click', () => {
        if (element.classList.contains('croix') === false && element.classList.contains('rond') === false) {
            if (j === 1) {
                element.classList.add("croix");
                j = j * -1
            } else if (j === -1) {
                element.classList.add("rond");
                j = j * -1
            }
            winCheck();
            score++
            egalcheck();
            
        }
    });

})

// condition de win
// role : Afficher si le joueur à gagner
// paramtre : rien
// return : rien
function winCheck() {
    // croix
    if (case1.classList.contains('croix') === true && case2.classList.contains('croix') === true && case3.classList.contains('croix') === true) {
        setTimeout(() => {
        alert("Vous avez gagné");
        }, 1000);
        
    } 
    else if (case1.classList.contains('croix') === true && case4.classList.contains('croix') === true && case7.classList.contains('croix') === true) {
    setTimeout(() => {
        alert("Vous avez gagné");
        }, 1000);
    } 
    else if (case2.classList.contains('croix') === true && case5.classList.contains('croix') === true && case8.classList.contains('croix') === true) {
        setTimeout(() => {
        alert("Vous avez gagné");
        }, 1000);
    } 
    else if (case3.classList.contains('croix') === true && case6.classList.contains('croix') === true && case9.classList.contains('croix') === true) {
        setTimeout(() => {
        alert("Vous avez gagné");
        }, 1000);
    } 
    else if (case4.classList.contains('croix') === true && case5.classList.contains('croix') === true && case6.classList.contains('croix') === true) {
        setTimeout(() => {
        alert("Vous avez setTimeout") 
        }, 1000);
    } 
    else if (case7.classList.contains('croix') === true && case8.classList.contains('croix') === true && case9.classList.contains('croix') === true) {
        setTimeout(() => {
        alert("Vous avez gagné");
        }, 1000);
    } 
    else if (case1.classList.contains('croix') === true && case5.classList.contains('croix') === true && case9.classList.contains('croix') === true) {
        setTimeout(() => {
        alert("Vous avez gagné");
        }, 1000);
    } 
    else if (case3.classList.contains('croix') === true && case5.classList.contains('croix') === true && case7.classList.contains('croix') === true) {
        setTimeout(() => {
        alert("Vous avez gagné");
        }, 1000);
    }
   
    // rond
    else if (case1.classList.contains('rond') === true && case2.classList.contains('rond') === true && case3.classList.contains('rond') === true) {
        setTimeout(() => {
        alert("Vous avez gagné");
        }, 1000);
    } 
    else if (case1.classList.contains('rond') === true && case4.classList.contains('rond') === true && case7.classList.contains('rond') === true) {
        setTimeout(() => {
        alert("Vous avez gagné");
        }, 1000);
    } 
    else if (case2.classList.contains('rond') === true && case5.classList.contains('rond') === true && case8.classList.contains('rond') === true) {
        setTimeout(() => {
        alert("Vous avez gagné");
        }, 1000);
    } 
    else if (case3.classList.contains('rond') === true && case6.classList.contains('rond') === true && case9.classList.contains('rond') === true) {
        setTimeout(() => {
        alert("Vous avez gagné");
        }, 1000);
    } 
    else if (case4.classList.contains('rond') === true && case5.classList.contains('rond') === true && case6.classList.contains('rond') === true) {
        setTimeout(() => {
        alert("Vous avez gagné");
        }, 1000);
    } 
    else if (case7.classList.contains('rond') === true && case8.classList.contains('rond') === true && case9.classList.contains('rond') === true) {
        setTimeout(() => {
        alert("Vous avez gagné");
        }, 1000);
    } 
    else if (case1.classList.contains('rond') === true && case5.classList.contains('rond') === true && case9.classList.contains('rond') === true) {
        setTimeout(() => {
        alert("Vous avez gagné");
        }, 1000);
    } 
    
    else if (case3.classList.contains('rond') === true && case5.classList.contains('rond') === true && case7.classList.contains('rond') === true) {
        setTimeout(() => {
        alert("Vous avez gagné");
        }, 1000);
    }
}
function egalcheck(){
    if(score === 9){
        alert("Vous êtes égaliter")    
    }    
        
}