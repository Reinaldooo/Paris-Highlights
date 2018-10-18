export const markers = [
    {
      name: "Torre Eiffel",
      latLng: {
        lat: 48.85837009999999,
        lng: 2.2944813
      },
      id: 1
    },
    {
      name: "Museu do Louvre",
      latLng: {
        lat: 48.8606111,
        lng: 2.337644
      },
      id: 2
    },
    {
      name: "Notre Dame",
      latLng: {
        lat: 48.85296820000001,
        lng: 2.3499021
      },
      id: 3
    },
    {
      name: "Arco do Triunfo",
      latLng: {
        lat: 48.8737917,
        lng: 2.2950275
      },
      id: 4
    },
    {
      name: "Basílica do Sagrado Coração",
      latLng: {
        lat: 48.8865473,
        lng: 2.3431221
      },
      id: 5
    },
    {
      name: "Panteão",
      latLng: {
        lat: 48.846191,
        lng: 2.346079
      },
      id: 6
    },
    {
      name: "Champs-Élysées",
      latLng: {
        lat: 48.868931,
        lng: 2.310340
      },
      id: 7
    },
    {
      name: "Palácio Les Invalides",
      latLng: {
        lat: 48.857037,
        lng: 2.311878
      },
      id: 8
    },
    {
      name: "Ponte Alexandre III",
      latLng: {
        lat: 48.863788,
        lng: 2.313546
      },
      id: 9
    },
    {
      name: "Jardim de Luxemburgo",
      latLng: {
        lat: 48.846384,
        lng: 2.336750
      },
      id: 10
    }
  ];

  export const styles = [
      {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#f08080"
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