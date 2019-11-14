const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

function entrepreneurs70(){
  let entrepreneurs_70 = [];
  let i = 0;
  let j = 0;
  while (i < entrepreneurs.length){
    if (entrepreneurs[i].year >= 1970 && entrepreneurs[i].year < 1980){
      entrepreneurs_70[j] = entrepreneurs[i];
      j++;
    }
    i++;
  }
  return (entrepreneurs_70);
}

function affichage(entrepreneurs_70){
  j = 0;
  while (j < entrepreneurs.length){
    console.log(entrepreneurs_70[j])
    j++;
  }
}

function AffichageNoms(entrepreneurs){
  let name = [];
  let i = 0;
  while (i < entrepreneurs.length){
    name[i] = entrepreneurs[i].first + " " + entrepreneurs[i].last;
    i++;
  }
  console.log(name);
}

function AffichageNomsAges(entrepreneurs){
  let i = 0;
  let age;
  while (i < entrepreneurs.length){
    age = 2019 - entrepreneurs[i].year;
    console.log(entrepreneurs[i].first + " " + entrepreneurs[i].last + " aurait " + age + " ans aujourd'hui");
    i++;
  }
}

function swap(entrepreneurs){
  let i = 0;
  let tmp;
  while (i + 1 < entrepreneurs.length){
    if (entrepreneurs[i].last > entrepreneurs[i + 1].last){
      tmp = entrepreneurs[i];
      entrepreneurs[i] = entrepreneurs[i + 1];
      entrepreneurs[i + 1] = tmp;
      i = -1;
    }
    i++;
  }
  return (entrepreneurs);
}

console.log("Liste des entrepreneurs qui sont nés dans les années 70");
affichage(entrepreneurs70());

console.log("Prénom et noms des entrepreneurs");
AffichageNoms(entrepreneurs);

console.log("Quel âge aurait chaque inventeur aujourd'hui?");
AffichageNomsAges(entrepreneurs);

console.log("les entrepreneurs par ordre alphabétique du nom de famille")
let entrepreneurs_trie = swap(entrepreneurs);
affichage(entrepreneurs_trie);
