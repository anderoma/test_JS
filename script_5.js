const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

function if_rented(books){
  let i = 0;
  while (i < books.length){
    if (books[i].rented == 0){
      return (console.log("non"));
    }
    i++;
  }
  console.log("oui");
}

function most_rented(books){
  let i = 1;
  let tmp = 0;
  while (i < books.length){
    if (books[i].rented > books[tmp].rented){
      tmp = i;
    }
    i++;
  }
  console.log(books[tmp]);
}

function less_rented(books){
  let i = 1;                       
  let tmp = 0;
  while (i < books.length){
    if (books[i].rented < books[tmp].rented){
      tmp = i;
    }
    i++;
  }
  console.log(books[tmp]);
}

function shearch_id(books, id){
  let i = 0;                       
  while (i < books.length){
    if (books[i].id == id){
      return (console.log(books[i]));
    }
    i++;
  }
  return (console.log(`le livre n° ${id} n'as pas était trouvé`));
}

function supprime(books, id){
  let i = 0;                       
  while (i < books.length){
    if (books[i].id == id){
      books.splice(i,i + 1);
    }
    i++;
  }
  return (books);
}
function affichage(books_2){
  j = 0;
  while (j < books_2.length){
    console.log(books_2[j])
    j++;
  }
}
function swap(books_2){
  let i = 0;
  let tmp;
  while (i + 1 < books_2.length){
    if (books_2[i].title > books_2[i + 1].title){
      tmp = books_2[i];
      books_2[i] = books_2[i + 1];
      books_2[i + 1] = tmp;
      i = -1;
    }
    i++;
  }
  return (books_2);
}

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
if_rented(books);

console.log("Quel est livre le plus emprunté ?");
most_rented(books);

console.log("Quel est livre le moins emprunté ?");
less_rented(books);

console.log("le livre avec l'ID: 873495");
shearch_id(books, 873495);

console.log("Supprime le livre avec l'ID: 133712");
shearch_id(books, 133712);
let books_2 = supprime(books, 133712);
shearch_id(books, 133712);

console.log("Trie les livres par ordre alphabétique");
books_2 = swap(books_2);
affichage(books_2);