export const culturePlaces = [

    {
        name: "Vorarlberg Museum",
        location: {
            lat: 47.50439,
            lng: 9.74681
        },
        filters: "culture",
        icon: "./img/culture-icon.png"
  },
    {
        name: "Kornmarktplatz",
        location: {
            lat: 47.50360586605752,
            lng: 9.746611225148172
        },
        category: "culture",
        icon: "./img/culture-icon.png"
  },
    {
        name: "Seebühne Bregenz",
        location: {
            lat: 47.505129314212155,
            lng: 9.738204903058858
        },
        category: "culture",
        icon: "./img/culture-icon.png"
  },
    {
        name: "Platz der Wiener Symphoniker",
        location: {
            lat: 47.50296631538697,
            lng: 9.740050355501628
        },
       category: "culture",
        icon: "./img/culture-icon.png"
  },
    {
        name: "Kunsthaus",
        location: {
            lat: 47.504800714042595,
            lng: 9.747399912846843
  },
        category: "culture",
        icon: "./img/culture-icon.png"
    }
];

export const beachPlaces = [
{
        name: "Pipeline Beach",
        location: {
            lat: 47.5077076819904,
            lng: 9.750087261199951
        },
        category: "beach",
        icon: "./img/beach-icon.png"
  },
    {
        name: "Strandbad Bregenz",
        location: {
            lat: 47.505523213923844,
            lng: 9.734527669022066
        },
        category: "beach",
        icon: "./img/beach-icon.png"
  }
];

export const naturePlaces = [
   {
        name: "Pfänderbahn Talstation",
        location: {
            lat: 47.50486051802419,
            lng: 9.75307570937797
        },
       category: "nature",
        icon: "./img/nature-icon.png"
  }
];

export const foodPlaces = [
    {
        name: "Trattoria IL Monello",
        location: {
            lat: 47.503229,
            lng: 9.747482
        },
        category: "food",
        icon: "./img/food-icon.png"
  },
    {
        name: "Cafesito",
        location: {
            lat: 47.503324,
            lng: 9.747652
        },
        category: "food",
        icon: "./img/food-icon.png"
  },
     {
        name: "Theatercafe",
        location: {
            lat: 47.50406203779997,
            lng: 9.746818681418302
        },
        category: "food",
        icon: "./img/food-icon.png"
  },
    {
        name: "KUB Café",
        location: {
            lat: 47.5046613675818,
            lng: 9.747513540224059
        },
        category: "food",
        icon: "./img/food-icon.png"
  },
        {
        name: "Museumscafe",
        location: {
            lat:47.504265,
            lng: 9.746683
        },
        category: "food",
        icon: "./img/food-icon.png"
  },

        {
        name: "Manga",
        location: {
            lat:  47.50597532128078,
            lng: 9.748984806202664
        },
        category: "food",
        icon: "./img/food-icon.png"
  },

    {
        name: "Eispavillon am See",
        location: {
          lat: 47.5052601734501,
            lng: 9.745489375784231
        },
        category: "food",
        icon: "./img/food-icon.png"
  },
 {
        name: "Burgrestaurant Gebhardsberg",
        location: {
          lat: 47.5052601734501,
            lng: 9.745489375784231
        },
        category: "food",
        icon: "./img/food-icon.png"
  },
    {
        name:  "Poseidon",
        location: {
          lat: 47.50405,
            lng: 9.74762
        },
        category: "food",
        icon: "./img/food-icon.png"
  },


];

export const funPlaces = [

    {
        name: "Cuba",
        location: {
            lat: 47.50398041816723,
            lng: 9.745341975740516
        },
       category: "fun",
        icon: "./img/fun-icon.png"
    },

    {
        name: "Casino Bregenz",
        location: {
            lat:  47.50367169653811,
            lng: 9.738447838711325
        },
        category: "fun",
        icon: "./img/fun-icon.png"
    },

];

export const shoppingPlaces = [
 {
        name: "4D OUTFITTERS Concept store",
        location: {
            lat: 47.50506418740349,
            lng: 9.74851280450821
        },
        category: "shopping",
        icon: "./img/shopping-icon.png"
  },
    {
        name: "Sutterlüty Bregenz Hafen",
        location: {
            lat: 47.506260476942145,
            lng: 9.749385380276165
        },
        category: "shopping",
        icon: "./img/shopping-icon.png"
  },
    {
        name: "Wolford Factory Outlet",
        location: {
            lat: 47.49549467481232,
            lng: 9.7153902053833
        },
        category: "shopping",
        icon: "./img/shopping-icon.png"
  },
];

export const allPlaces = [...culturePlaces, ...beachPlaces, ...naturePlaces, ...foodPlaces, ...funPlaces, ...shoppingPlaces];
