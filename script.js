let nomeHeroi = "4LPha_Br" // Aqui se declara o nome.
let xpHeroi = 15000 // aqui o nivel de xp do herói .
let acunhaHeroi

if(xpHeroi <= 1000){
    acunhaHeroi = "Ferro"
    console.log("O Herói de nome " + nomeHeroi + " está no nivel de " + acunhaHeroi);
}
else if(xpHeroi >= 1001 && xpHeroi <= 2000){
    acunhaHeroi = "Bronze"
    console.log("O Herói de nome " + nomeHeroi + " está no nivel de " + acunhaHeroi);
}
else if(xpHeroi >= 2001 && xpHeroi <= 5000){
    acunhaHeroi = "Prata"
    console.log("O Herói de nome " + nomeHeroi + " está no nivel de " + acunhaHeroi);
}
else if(xpHeroi >= 5001 && xpHeroi <= 7000){
    acunhaHeroi = "Ouro"
    console.log("O Herói de nome " + nomeHeroi + " está no nivel de " + acunhaHeroi);
}
else if(xpHeroi >= 7001 && xpHeroi <= 8000){
    acunhaHeroi = "Platina"
    console.log("O Herói de nome " + nomeHeroi + " está no nivel de " + acunhaHeroi);
}
else if(xpHeroi >= 8001 && xpHeroi <= 9000){
    acunhaHeroi = "Ascedente"
    console.log("O Herói de nome " + nomeHeroi + " está no nivel de " + acunhaHeroi);
}
else if(xpHeroi >= 9001 && xpHeroi <= 10000){
    acunhaHeroi = "Imortal"
    console.log("O Herói de nome " + nomeHeroi + " está no nivel de " + acunhaHeroi);
}
else{
    acunhaHeroi = "Radiante"
    console.log("O Herói de nome " + nomeHeroi + " está no nivel de " + acunhaHeroi);
}

// A estrutura que eu escolhi foi o if e else, validando duas condições em cada else if.
// Não introduzi uma forma da pessoa inserir o nome do Herói e/ou o nivel de xp, visto que não foi ensinado até o momento do curso.