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

function shearch_id(books){
  let i = 0;                       
  while (i < books.length){
    if (books[i].id == 873495){
      return (console.log(books[i]));
    }
    i++;
  }
}

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
if_rented(books);

console.log("Quel est livre le plus emprunté ?");
most_rented(books);

console.log("Quel est livre le moins emprunté ?");
less_rented(books);

console.log("le livre avec l'ID: 873495");
shearch_id(books);