const drinks = [
  {
    id: "1",
    name: "Vodka",
    type: "Alcoholic",
    alcoholic: true,
    imageUrl: "/images/vodka.jpg",
    desc: "Vodka je bezbojni destilovani alkoholni napitak sa neutralnim ukusom, koji potiče iz Istočne Evrope. Pogodna je kao osnova za razne koktele zbog svoje sposobnosti da se dobro meša sa različitim ukusima.",
  },
  {
    id: "2",
    name: "Orange Juice",
    type: "Non-alcoholic",
    imageUrl: "/images/orange-juce.jpg",
    alcoholic: false,
    desc: "Sok od pomorandže je osvežavajući nealkoholni sok bogat vitaminom C, dobijen direktnim ceđenjem pomorandži. Popularan je kao dodatak u koktelima, dodajući slatkoću i citrusnu notu.",
  },
  {
    id: "3",
    name: "Gin",
    type: "Alcoholic",
    imageUrl: "/images/gin.jpg",
    alcoholic: true,
    desc: "Gin je alkoholno piće poznato po svom izraženom ukusu zahvaljujući botaničkim sastojcima poput kleke. Popularan je u koktelima kao što je Gin Tonic, gde se ističe njegov kompleksni aromatični profil.",
  },
  {
    id: "4",
    name: "Tonic Water",
    type: "Non-alcoholic",
    imageUrl: "/images/tonic-water.jpg",
    alcoholic: false,
    desc: "Tonična voda je gazirano nealkoholno piće koje sadrži kinin, što mu daje blago gorki ukus. Često se koristi u koktelima poput Gin Tonic-a, nudeći osvežavajući efekat.",
  },
  {
    id: "5",
    name: "Rum",
    type: "Alcoholic",
    imageUrl: "/images/rum.jpg",
    alcoholic: true,
    desc: "Rum je destilovani alkoholni napitak napravljen od šećerne trske ili melase, sa toplim, slatkastim ukusom. Osnova je za mnoge popularne koktele, uključujući Rum i Cola.",
  },
  {
    id: "6",
    name: "Cola",
    type: "Non-alcoholic",
    imageUrl: "/images/cola.jpg",
    alcoholic: false,
    desc: "Cola je popularno gazirano piće sa karakterističnim slatkim ukusom i notama vanile i cimeta. Često se koristi kao mixer u koktelima sa alkoholom, kao što su Rum i Cola i Viski i Cola.",
  },
  {
    id: "7",
    name: "Viski",
    type: "Alcoholic",
    imageUrl: "/images/visky.jpg",
    alcoholic: true,
    desc: "Viski je tip destilovanog alkoholnog pića napravljen od fermentovanih žitarica. Poznat po svojoj dubokoj, bogatoj aromi i ukusu, čest je izbor za klasične koktele poput Old Fashioned i Viski Sour.",
  },
  {
    id: "8",
    name: "vinjak",
    type: "Alcoholic",
    imageUrl: "/images/vinjak.jpg",
    alcoholic: true,
    desc: "Vinjak je vrsta brandija napravljena destilacijom vina. Karakteriše ga bogat, složen ukus sa voćnim i drvenastim notama, često služen sam ili u koktelima koji zahtevaju snažniji alkoholni uticaj.",
  },
  {
    id: "9",
    name: "Tequila",
    type: "Alcoholic",
    alcoholic: true,
    imageUrl: "/images/tequila.jpg",
    desc: "Tequila je destilovani alkoholni napitak proizveden iz plave agave. Poznata po svojoj oštrom i svježoj aromi, često se koristi u koktelima kao što su Margarita i Tequila Sunrise.",
  },
  {
    id: "10",
    name: "Soda Water",
    type: "Non-alcoholic",
    alcoholic: false,
    imageUrl: "/images/soda-water.jpg",
    desc: "Soda voda je gazirana voda koja se često koristi kao osnova ili za razblaživanje u koktelima, nudeći neutralan ukus i efekat osvježenja.",
  },
  {
    id: "11",
    name: "Lemonade",
    type: "Non-alcoholic",
    alcoholic: false,
    imageUrl: "/images/lemonade.jpg",
    desc: "Limonada je osvježavajuće piće napravljeno od soka limuna, vode i šećera. Popularna je u koktelima zbog svoje kiselosti i sposobnosti da se kombinuje sa raznim ukusima.",
  },
  {
    id: "12",
    name: "Bourbon",
    type: "Alcoholic",
    alcoholic: true,
    imageUrl: "/images/bourbon.jpg",
    desc: "Bourbon je vrsta viskija iz Amerike, poznat po svojoj glatkoći i blago slatkim notama. Idealno se koristi u koktelima kao što je Manhattan.",
  },
  {
    id: "13",
    name: "Champagne",
    type: "Alcoholic",
    alcoholic: true,
    imageUrl: "/images/champagne.jpg",
    desc: "Šampanjac je luksuzno pjenušavo vino koje dolazi iz regije Šampanj u Francuskoj. Koristi se za proslave i često se dodaje u koktele za dodatak elegancije.",
  },
  {
    id: "14",
    name: "Red Wine",
    type: "Alcoholic",
    alcoholic: true,
    imageUrl: "/images/red-wine.jpg",
    desc: "Crveno vino je napravljeno fermentacijom tamnog (crvenog) grožđa. Ima bogate ukuse i kompleksnost koja se odlično slaže sa hranom ili kao osnova za sangriju.",
  },
  {
    id: "15",
    name: "White Wine",
    type: "Alcoholic",
    alcoholic: true,
    imageUrl: "/images/white-wine.jpg",
    desc: "Belo vino je napravljeno fermentacijom bez kože grožđa. Lakše od crvenog vina, idealno je za piće tokom letnjih dana ili u koktelima poput Spritz-a.",
  },
  {
    id: "16",
    name: "Scotch",
    type: "Alcoholic",
    alcoholic: true,
    imageUrl: "/images/scotch.jpg",
    desc: "Scotch je vrsta viskija iz Škotske, poznat po svojoj dubini i složenim tresetnim notama. Izuzetno cijenjen među ljubiteljima žestokih pića.",
  },
  {
    id: "17",
    name: "Mojito Mix",
    type: "Non-alcoholic",
    alcoholic: false,
    imageUrl: "/images/mojito-mix.jpg",
    desc: "Mojito Mix je nealkoholni sirup koji se koristi za pripremu Mojito koktela. Sadrži sve potrebne sastojke osim ruma, olakšavajući pripremu ovog popularnog pića.",
  },
  {
    id: "19",
    name: "Cider",
    type: "Alcoholic",
    alcoholic: true,
    imageUrl: "/images/vodka.jpg",
    desc: "Cider je alkoholno piće napravljeno fermentacijom jabukovog soka. Slatko ili suvo, cider je popularan zbog svoje osvježavajuće prirode.",
  },
];

const cocktails = [
  {
    name: "Screwdriver",
    type: "Alcoholic",
    alcoholic: true,
    alcoholContent: "Single",
    imageUrl: "/images/screwdriver.jpg",
    videoUrl: "https://www.youtube.com/watch?v=HJa4XPdL5-g",
    ingredients: [
      { drinkId: "1", quantity: 50, unit: "ml" },
      { drinkId: "2", quantity: 100, unit: "ml" },
    ],
    desc: "Screwdriver je klasični koktel koji kombinuje vodka i sveže ceđeni sok od pomorandže. Ovaj jednostavan ali osvežavajući koktel je popularan zbog svoje slatke i citrusne arome, idealan za letnje dane ili kao brunch piće.",
  },
  {
    name: "Gin and Tonic",
    type: "Alcoholic",
    alcoholic: true,
    alcoholContent: "Single",
    imageUrl: "/images/gin-tonic.jpg",
    videoUrl: "https://www.youtube.com/watch?v=HJa4XPdL5-g",
    ingredients: [
      { drinkId: "3", quantity: 50 },
      { drinkId: "4", quantity: 100 },
    ],
    desc: "Gin and Tonic je bezvremenski koktel koji je jednostavan za pripremu sa samo dva sastojka: gin i tonična voda. Ovaj koktel se ceni zbog svoje osvežavajuće gorčine i aromatičnog profila, uz dodatak kriške limete ili limuna za dodatnu svježinu.",
  },
  {
    name: "Rum and Cola",
    type: "Alcoholic",
    alcoholic: true,
    alcoholContent: "Single",
    imageUrl: "/images/rum-cola.jpg",
    videoUrl: "https://www.youtube.com/watch?v=HJa4XPdL5-g",
    ingredients: [
      { drinkId: "5", quantity: 50, unit: "ml" },
      { drinkId: "6", quantity: 100, unit: "ml" },
    ],
    desc: "Rum and Cola, poznat i kao 'Cuba Libre', je popularan širom sveta zahvaljujući svojoj jednostavnoj kombinaciji slatkog ruma i gazirane cole. Često se služi sa kriškom limete, dodajući osvežavajući citrusni dodir klasičnom napitku.",
  },
  {
    name: "Viski and Cola",
    type: "Alcoholic",
    alcoholic: true,
    alcoholContent: "Single",
    imageUrl: "/images/visky-cola.jpg",
    videoUrl: "https://www.youtube.com/watch?v=HJa4XPdL5-g",
    ingredients: [
      { drinkId: "7", quantity: 50, unit: "ml" },
      { drinkId: "6", quantity: 100, unit: "ml" },
    ],
    desc: "Viski and Cola je robustan koktel koji spaja bogati, duboki ukus viskija sa slatkom, karbonizovanom colom. Ovaj koktel je jednostavan za pravljenje i omiljen je izbor za ljubitelje viskija koji žele osvežavajuće piće.",
  },
  {
    name: "Viski,Cola and tonic",
    type: "Alcoholic",
    alcoholic: true,
    alcoholContent: "Single",
    imageUrl: "/images/upalaMozga.jpg",
    videoUrl: "https://www.youtube.com/watch?v=HJa4XPdL5-g",
    ingredients: [
      { drinkId: "7", quantity: 50, unit: "ml" },
      { drinkId: "6", quantity: 100, unit: "ml" },
      { drinkId: "4", quantity: 100, unit: "ml" },
    ],
    desc: "Viski, Cola and Tonic je inovativna varijacija na standardni Viski i Cola, dodavanjem tonične vode koja unosi dodatnu složenost i osvežavajuću gorčinu. Ovaj koktel kombinuje slatkoću cole sa bogatim ukusom viskija i blagom gorčinom tonika.",
  },
  {
    name: "Demonski kapcitet",
    type: "Alcoholic",
    alcoholic: true,
    alcoholContent: "Multiple",
    imageUrl: "/images/demonski-kapacitet.jpg",
    videoUrl: "https://www.youtube.com/watch?v=HJa4XPdL5-g",
    ingredients: [
      { drinkId: "1", quantity: 50, unit: "ml" },
      { drinkId: "3", quantity: 100, unit: "ml" },
      { drinkId: "5", quantity: 100, unit: "ml" },
      { drinkId: "6", quantity: 100, unit: "ml" },
      { drinkId: "4", quantity: 100, unit: "ml" },
      { drinkId: "8", quantity: 100, unit: "ml" },
    ],
    desc: "Demonski kapacitet je eksplozivni koktel koji uključuje miks više vrsta alkohola: vodku, gin, rum, viski, uz dodatak cole i tonične vode. Ovaj moćni koktel je pun složenih ukusa i idealan je za one koji traže intenzivno iskustvo u piću.",
  },
  {
    name: "Virgin Screwdriver",
    alcoholContent: null,
    type: "Non-alcoholic",
    alcoholic: false,
    imageUrl: "/images/upalaMozga.jpg",
    videoUrl: "https://www.youtube.com/watch?v=HJa4XPdL5-g",
    ingredients: [{ drinkId: "2", quantity: 150, unit: "ml" }],
    desc: "Virgin Screwdriver je nealkoholna verzija klasičnog Screwdriver koktela, kombinujući samo sveže ceđeni sok od pomorandže. Ovo osvežavajuće piće je savršeno za one koji žele slatke i citrusne arome bez alkohola.",
  },
  {
    name: "Lemon Lime & Bitters",
    type: "Non-alcoholic",
    alcoholic: false,
    alcoholContent: null,
    imageUrl: "/images/lemon-lime-bitters.jpg",
    videoUrl: "https://www.youtube.com/watch?v=HJa4XPdL5-g",
    ingredients: [
      { drinkId: "4", quantity: 150, unit: "ml" },
      { drinkId: "2", quantity: 50, unit: "ml" },
    ],
    desc: "Lemon Lime & Bitters je popularan nealkoholni koktel koji kombinuje toničnu vodu i sok od pomorandže sa dodatkom bitera. Ovo piće je poznato po svojoj osvežavajućoj gorčini i citrusnoj svežini.",
  },
];

module.exports = { drinks, cocktails };
