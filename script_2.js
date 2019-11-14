// Un prompt s'affiche avec la question suivante
let factorielle = prompt("De quel nombre veux-tu calculer la factorielle ?");
let i = factorielle - 1;
if (factorielle == 0){
  factorielle = 1;
}
while (i > 0){
  factorielle = factorielle * i;
  i--;
}
console.log(`Le résultat est : ${factorielle}`);