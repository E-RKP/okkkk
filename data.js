let store = {
  prodotti: [

    {
      nome: 'NVIDIA MASTER',
      quantity: 10,
      price: 1049
    },

    {
      nome: 'PC HAUQ',
      quantity: 2,
      price: 899
    },

    {
      nome: 'EGGS',
      quantity: 145,
      price: 3.99
    },

    {
      nome: 'HISENSE',
      quantity: 11,
      price: 599.90
    },

    {
      nome: 'OP09',
      quantity: 15  ,
      price: 1049
    },

    {
      nome: 'NVIDIA MASTER',
      quantity: 10,
      price: 1049
    }


  ]
}


function aggiungiProdotti(oggetto){

  for (i=0; i<store.prodotti.length;i++){

    if(store.prodotti[i].nome === oggetto.nome){
      console.log('Prodotto già esistente')
      return;
    }else{
      store.prodotti.push(oggetto)
      return;
    }
  }
}

aggiungiProdotti( {
      nome: 'JJJ',
      quantity: 10,
      price: 1049
    });

console.log(store)

function calcolaTotale(oggetto){

  let somma = 0
  for (i=0; i<store.prodotti.length;i++){
    somma = somma + store.prodotti[i].price
  }

  return Math.round(somma);
}

console.log(calcolaTotale(store))


function cercaProdotto(nome){

  for (i=0; i<store.prodotti.length;i++){
    if (nome === store.prodotti[i].nome){
      return store.prodotti[i];
    }else{
      console.log('prodotto non esistente')
    }
  }
}

console.log(cercaProdotto('OP09'))

let registro = {

  attivitàLuca: [
    {
      titolo: 'nuoto',
      categoria: 'fisica',
      durataMinuti: 30,
      completata: false
    },

     {
      titolo: 'calcio',
      categoria: 'fisica',
      durataMinuti: 120,
      completata: true
    },

     {
      titolo: 'studio',
      categoria: 'sedentaria',
      durataMinuti: 180,
      completata: true
    },

     {
      titolo: 'lettura',
      categoria: 'sedentaria',
      durataMinuti: 60,
      completata: false
    },
  ],

  attivitàPaolo: [

    {
      titolo: 'nuoto',
      categoria: 'fisica',
      durataMinuti: 30,
      completata: false
    },

     {
      titolo: 'calcio',
      categoria: 'fisica',
      durataMinuti: 120,
      completata: true
    },

     {
      titolo: 'studio',
      categoria: 'sedentaria',
      durataMinuti: 180,
      completata: true
    },

     {
      titolo: 'lettura',
      categoria: 'sedentaria',
      durataMinuti: 60,
      completata: false
    },
  ]
}