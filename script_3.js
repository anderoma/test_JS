let nb_étage = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let str;
let compt = 1;
while (nb_étage > 0){
  str = '';
  let i = 1;
  while (i < nb_étage){
    str = str + ' ';
    i++;
  }
  i = 0;
  while (i < compt){
    str = str + '#';
    i++;
  }
  console.log(str);
  compt++;
  nb_étage--;
}