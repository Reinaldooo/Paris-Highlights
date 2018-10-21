export const markers = [
    {
      name: "Eiffel Tower",
      latLng: {
        lat: 48.85837009999999,
        lng: 2.2944813
      },
      id: 1,
      animation: false,
      active: false,
      desc: "The Eiffel Tower is a wrought iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.",
      img: '../images/1.jpg'
    },
    {
      name: "Louvre Museum",
      latLng: {
        lat: 48.8606111,
        lng: 2.337644
      },
      id: 2,
      animation: false,
      active: false,
      desc: "The Louvre, or the Louvre Museum, is the world's largest art museum and a historic monument in Paris, France. A central landmark of the city, it is located on the Right Bank of the Seine in the city's 1st arrondissement.",
      img: '../images/2.jpg'
    },
    {
      name: "Notre-Dame",
      latLng: {
        lat: 48.85296820000001,
        lng: 2.3499021
      },
      id: 3,
      animation: false,
      active: false,
      desc: "Notre-Dame de Paris, also known as Notre-Dame Cathedral or simply Notre-Dame, is a medieval Catholic cathedral on the Île de la Cité in the fourth arrondissement of Paris, France. The cathedral is widely considered to be one of the finest examples of French Gothic architecture.",
      img: '../images/3.jpg'
    },
    {
      name: "Arc de Triomphe",
      latLng: {
        lat: 48.8737917,
        lng: 2.2950275
      },
      id: 4,
      animation: false,
      active: false,
      desc: "The Arc de Triomphe de l'Étoile is one of the most famous monuments in Paris, standing at the western end of the Champs-Élysées at the center of Place Charles de Gaulle, formerly named Place de l'Étoile — the étoile or 'star' of the juncture formed by its twelve radiating avenues.",
      img: '../images/4.jpg'
    },
    {
      name: "Sacré-Cœur Basilica",
      latLng: {
        lat: 48.8865473,
        lng: 2.3431221
      },
      id: 5,
      animation: false,
      active: false,
      desc: "The Basilica of the Sacred Heart of Paris, commonly known as Sacré-Cœur Basilica and often simply Sacré-Cœur, is a Roman Catholic church and minor basilica, dedicated to the Sacred Heart of Jesus, in Paris, France.",
      img: '../images/5.jpg'
    },
    {
      name: "Panthéon",
      latLng: {
        lat: 48.846191,
        lng: 2.346079
      },
      id: 6,
      animation: false,
      active: false,
      desc: "The Panthéon is a building in the Latin Quarter in Paris, France. It was originally built as a church dedicated to St. Genevieve and to house the reliquary châsse containing her relics but, after many changes, now functions as a secular mausoleum containing the remains of distinguished French citizens.",
      img: '../images/6.jpg'
    },
    {
      name: "Champs-Élysées",
      latLng: {
        lat: 48.868931,
        lng: 2.310340
      },
      id: 7,
      animation: false,
      active: false,
      desc: "The Avenue des Champs-Élysées is an avenue in the 8th arrondissement of Paris, France, 1.9 kilometres (1.2 mi) long and 70 metres (230 ft) wide, running between the Place de la Concorde and the Place Charles de Gaulle, where the Arc de Triomphe is located. It is known for its theatres, cafés, and luxury shops, for the annual Bastille Day military parade, and as the finish of the Tour de France cycle race.",
      img: '../images/7.jpg'
    },
    {
      name: "Musée de l'Armée",
      latLng: {
        lat: 48.857037,
        lng: 2.311878
      },
      id: 8,
      animation: false,
      active: false,
      desc: "Collections of weapons and uniforms tracing French military conflicts, plus Napoleon's gilded tomb.",
      img: '../images/8.jpg'
    },
    {
      name: "Pont Alexandre III",
      latLng: {
        lat: 48.863788,
        lng: 2.313546
      },
      id: 9,
      animation: false,
      active: false,
      desc: "The Pont Alexandre III is a deck arch bridge that spans the Seine in Paris. It connects the Champs-Élysées quarter with those of the Invalides and Eiffel Tower. The bridge is widely regarded as the most ornate, extravagant bridge in the city. It is classified as a French Monument historique since 1975.",
      img: '../images/9.jpg'
    },
    {
      name: "Jardin du Luxembourg",
      latLng: {
        lat: 48.846384,
        lng: 2.336750
      },
      id: 10,
      animation: false,
      active: false,
      desc: "The Jardin du Luxembourg, also known in English as the Luxembourg Gardens, is located in the 6th arrondissement of Paris, France. It was created beginning in 1612 by Marie de' Medici, the widow of King Henry IV of France, for a new residence she constructed, the Luxembourg Palace.",
      img: '../images/10.jpg'
    }
  ];

  export const defaultMarkers = [...markers];

  export const styles = [
      {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "gray"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#f2f2f2"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
        "featureType": 'poi',
        "elementType": 'labels.text.fill',
        "stylers": [{"visibility": 'off'}]
      },
      {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
              {
                  "saturation": -100
              },
              {
                  "lightness": 45
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#46bcec"
              },
              {
                  "visibility": "on"
              }
          ]
      }
  ];