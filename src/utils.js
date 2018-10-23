import { keyframes } from 'styled-components';

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
      img: '../images/1.jpg',
      foursquareId: "51a2445e5019c80b56934c75"
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
      img: '../images/2.jpg',
      foursquareId: "4adcda10f964a520af3521e3"
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
      img: '../images/3.jpg',
      foursquareId: "4adcda09f964a520e83321e3"
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
      img: '../images/4.jpg',
      foursquareId: "4adcda09f964a520de3321e3"
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
      img: '../images/5.jpg',
      foursquareId: "4bccc4e7937ca59381baab92"
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
      img: '../images/6.jpg',
      foursquareId: "4adcda09f964a520ea3321e3"
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
      desc: "The Avenue des Champs-Élysées is an avenue in the 8th arrondissement of Paris, France, 1.9 kilometres (1.2 mi) long and 70 metres (230 ft) wide, running between the Place de la Concorde and the Place Charles de Gaulle, where the Arc de Triomphe is located.",
      img: '../images/7.jpg',
      foursquareId: "4c8a4207a92fa093fe7e8fbf"
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
      img: '../images/8.jpg',
      foursquareId: "4adcda10f964a520ab3521e3"
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
      img: '../images/9.jpg',
      foursquareId: "4adcda09f964a520f63321e3"
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
      img: '../images/10.jpg',
      foursquareId: "4ba8b203f964a520a6e739e3"
    }
  ];

  export const defaultMarkers = [
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
      img: '../images/1.jpg',
      foursquareId: "51a2445e5019c80b56934c75"
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
      img: '../images/2.jpg',
      foursquareId: "4adcda10f964a520af3521e3"
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
      img: '../images/3.jpg',
      foursquareId: "4adcda09f964a520e83321e3"
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
      img: '../images/4.jpg',
      foursquareId: "4adcda09f964a520de3321e3"
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
      img: '../images/5.jpg',
      foursquareId: "4bccc4e7937ca59381baab92"
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
      img: '../images/6.jpg',
      foursquareId: "4adcda09f964a520ea3321e3"
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
      img: '../images/7.jpg',
      foursquareId: "4c8a4207a92fa093fe7e8fbf"
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
      img: '../images/8.jpg',
      foursquareId: "4adcda10f964a520ab3521e3"
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
      img: '../images/9.jpg',
      foursquareId: "4adcda09f964a520f63321e3"
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
      img: '../images/10.jpg',
      foursquareId: "4ba8b203f964a520a6e739e3"
    }
  ];

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

  export const venueExample = {
    "id": "4adcda09f964a520de3321e3",
    "name": "Arc de Triomphe (Arc de Triomphe de l'Étoile)",
    "contact": {
      "phone": "+33155377377",
      "formattedPhone": "+33 1 55 37 73 77",
      "twitter": "arcdetriomphe",
      "facebook": "341106565979071",
      "facebookName": "Arc de Triomphe"
    },
    "location": {
      "address": "Place Charles de Gaulle",
      "crossStreet": "Avenue des Champs-Élysées",
      "lat": 48.873783275868725,
      "lng": 2.2950589656829834,
      "labeledLatLngs": [
        {
          "label": "display",
          "lat": 48.873783275868725,
          "lng": 2.2950589656829834
        }
      ],
      "postalCode": "75008",
      "cc": "FR",
      "city": "Paris",
      "state": "Île-de-France",
      "country": "France",
      "formattedAddress": [
        "Place Charles de Gaulle (Avenue des Champs-Élysées)",
        "75008 Paris",
        "France"
      ]
    },
    "canonicalUrl": "https://foursquare.com/v/arc-de-triomphe/4adcda09f964a520de3321e3",
    "categories": [
      {
        "id": "4bf58dd8d48988d12d941735",
        "name": "Monument / Landmark",
        "pluralName": "Monuments / Landmarks",
        "shortName": "Landmark",
        "icon": {
          "prefix": "https://ss3.4sqi.net/img/categories_v2/building/government_monument_",
          "suffix": ".png"
        },
        "primary": true
      },
      {
        "id": "4bf58dd8d48988d165941735",
        "name": "Scenic Lookout",
        "pluralName": "Scenic Lookouts",
        "shortName": "Scenic Lookout",
        "icon": {
          "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/sceniclookout_",
          "suffix": ".png"
        }
      }
    ],
    "verified": true,
    "stats": {
      "tipCount": 710
    },
    "url": "http://www.monuments-nationaux.fr",
    "likes": {
      "count": 7277,
      "groups": [
        {
          "type": "others",
          "count": 7277,
          "items": []
        }
      ],
      "summary": "7277 Likes"
    },
    "dislike": false,
    "ok": false,
    "rating": 9.6,
    "ratingColor": "00B551",
    "ratingSignals": 8083,
    "beenHere": {
      "count": 0,
      "unconfirmedCount": 0,
      "marked": false,
      "lastCheckinExpiredAt": 0
    },
    "specials": {
      "count": 0,
      "items": []
    },
    "photos": {
      "count": 16385,
      "groups": [
        {
          "type": "checkin",
          "name": "Friends' check-in photos",
          "count": 0,
          "items": []
        },
        {
          "type": "venue",
          "name": "Venue photos",
          "count": 16385,
          "items": [
            {
              "id": "53c56868498e9934faef239a",
              "createdAt": 1405446248,
              "source": {
                "name": "Swarm for iOS",
                "url": "https://www.swarmapp.com"
              },
              "prefix": "https://igx.4sqi.net/img/general/",
              "suffix": "/256867_kX7yLb4xFUn0sLpCOQuWsYk2R7azc0-c8f-4jx2R9ho.jpg",
              "width": 641,
              "height": 960,
              "user": {
                "id": "256867",
                "firstName": "MikaelDorian",
                "gender": "male",
                "photo": {
                  "prefix": "https://igx.4sqi.net/img/user/",
                  "suffix": "/256867_cTycRQy4_mnK3GsGsNfgD798fMBa0JiWNldSeLuWQANimY91Nkry7tJILBUEUntdBnCBtAMiD.jpg"
                }
              },
              "visibility": "public"
            },
            {
              "id": "507633dde4b092f2e0976f85",
              "createdAt": 1349923805,
              "source": {
                "name": "Instagram",
                "url": "http://instagram.com"
              },
              "prefix": "https://igx.4sqi.net/img/general/",
              "suffix": "/1929706_Lst9NYtk5erkIoFH_-2M8MaswmmTcNHGqP9lqXvqF_o.jpg",
              "width": 612,
              "height": 612,
              "user": {
                "id": "1929706",
                "firstName": "Doug",
                "lastName": "Makishima",
                "gender": "male",
                "photo": {
                  "prefix": "https://igx.4sqi.net/img/user/",
                  "suffix": "/I3LGDNRLI1BEQZLS.jpg"
                }
              },
              "visibility": "public"
            }
          ]
        }
      ],
      "summary": "0 photos"
    },
    "reasons": {
      "count": 1,
      "items": [
        {
          "summary": "Lots of people like this place",
          "type": "general",
          "reasonName": "rawLikesReason"
        }
      ]
    },
    "description": "Haut de 50 mètres et large de 45 mètres, l'Arc de Triomphe a été construit de 1806 à 1836 sur ordre de Napoléon. Il surplombe la place de l'Étoile, domine les Champs-Élysées et offre un panorama unique sur Paris et La Défense.",
    "storeId": "",
    "page": {
      "pageInfo": {
        "banner": "https://is1.4sqi.net/userpix/XJVNML3XIDWARRPB.png",
        "links": {
          "count": 1,
          "items": [
            {
              "url": "http://www.monuments-nationaux.fr"
            }
          ]
        }
      },
      "user": {
        "id": "70104027",
        "firstName": "Centre des Monuments Nationaux",
        "gender": "none",
        "photo": {
          "prefix": "https://igx.4sqi.net/img/user/",
          "suffix": "/OKZQWROZ4Y2VVVLX.png"
        },
        "type": "chain",
        "tips": {
          "count": 1
        },
        "lists": {
          "groups": [
            {
              "type": "created",
              "count": 2,
              "items": []
            }
          ]
        },
        "homeCity": "Paris, France",
        "bio": "",
        "contact": {
          "twitter": "leCMN"
        }
      }
    },
    "hereNow": {
      "count": 2,
      "summary": "2 people are here",
      "groups": [
        {
          "type": "others",
          "name": "Other people here",
          "count": 2,
          "items": []
        }
      ]
    },
    "createdAt": 1255987721,
    "tips": {
      "count": 710,
      "groups": [
        {
          "type": "others",
          "name": "All tips",
          "count": 710,
          "items": [
            {
              "id": "4e372215a809a0c63b330d20",
              "createdAt": 1312236053,
              "text": "Go to the roof at night and watch the light show at the eiffel tower, if you're into that sort of thing.",
              "type": "user",
              "canonicalUrl": "https://foursquare.com/item/4e372215a809a0c63b330d20",
              "likes": {
                "count": 24,
                "groups": [
                  {
                    "type": "others",
                    "count": 24,
                    "items": []
                  }
                ],
                "summary": "24 likes"
              },
              "logView": true,
              "agreeCount": 24,
              "disagreeCount": 0,
              "todo": {
                "count": 15
              },
              "user": {
                "id": "2097",
                "firstName": "Neil",
                "lastName": "Sanchala",
                "gender": "male",
                "photo": {
                  "prefix": "https://igx.4sqi.net/img/user/",
                  "suffix": "/2097-RW1CK5XFVDYOB40F.jpg"
                }
              }
            },
            {
              "id": "4d51a63ed7eaa143f067750f",
              "createdAt": 1297196606,
              "text": "Depuis 1836, il offre une des plus belle vue de Paris! Admirez l'Axe Historique des Tuileries à la Défense, en passant par les Champs-Élysées. Ou encore la Tour Eiffel et le Sacré Cœur.",
              "type": "user",
              "canonicalUrl": "https://foursquare.com/item/4d51a63ed7eaa143f067750f",
              "lang": "fr",
              "likes": {
                "count": 103,
                "groups": [
                  {
                    "type": "others",
                    "count": 103,
                    "items": []
                  }
                ],
                "summary": "103 likes"
              },
              "logView": true,
              "editedAt": 1382755155,
              "agreeCount": 104,
              "disagreeCount": 0,
              "lastVoteText": "Upvoted Sep 11",
              "lastUpvoteTimestamp": 1536696950,
              "todo": {
                "count": 56
              },
              "user": {
                "id": "6082867",
                "firstName": "Parisian Geek",
                "gender": "none",
                "photo": {
                  "prefix": "https://igx.4sqi.net/img/user/",
                  "suffix": "/6082867-YRA5X0IQ1FO5OJA2.png"
                },
                "type": "page"
              },
              "authorInteractionType": "liked"
            }
          ]
        }
      ]
    },
    "shortUrl": "http://4sq.com/6qSXSy",
    "timeZone": "Europe/Paris",
    "listed": {
      "count": 3345,
      "groups": [
        {
          "type": "others",
          "name": "Lists from other people",
          "count": 3345,
          "items": [
            {
              "id": "58e3acffeb645b244376f079",
              "name": "Go Ahead, Be A Tourist",
              "description": "We’ve collected some of the top spots that travelers like to visit around the world. Use Swarm to check in at one of these places and you’ll unlock The Tourist sticker!",
              "type": "others",
              "user": {
                "id": "23438729",
                "firstName": "Foursquare City Guide",
                "gender": "none",
                "photo": {
                  "prefix": "https://igx.4sqi.net/img/user/",
                  "suffix": "/23438729-TODURDIUDUMY4JF5.png"
                },
                "type": "page"
              },
              "editable": false,
              "public": true,
              "collaborative": false,
              "url": "/foursquare/list/go-ahead-be-a-tourist",
              "canonicalUrl": "https://foursquare.com/foursquare/list/go-ahead-be-a-tourist",
              "createdAt": 1491315967,
              "updatedAt": 1492654084,
              "photo": {
                "id": "51ebd8f4e4b0cf59949e5806",
                "createdAt": 1374410996,
                "prefix": "https://igx.4sqi.net/img/general/",
                "suffix": "/9422249_uwEknPie4eGShUQwgWYtK-UfdzFt-UAi7aivCunvCRQ.jpg",
                "width": 960,
                "height": 720,
                "user": {
                  "id": "9422249",
                  "firstName": "Roberta",
                  "lastName": "SDREA",
                  "gender": "female",
                  "photo": {
                    "prefix": "https://igx.4sqi.net/img/user/",
                    "suffix": "/9422249-2JGCXQWJ2UGYSZQL.jpg"
                  }
                },
                "visibility": "public"
              },
              "logView": true,
              "followers": {
                "count": 1295
              },
              "listItems": {
                "count": 205,
                "items": [
                  {
                    "id": "t5865056c32b0721b937df222",
                    "createdAt": 1491323946,
                    "photo": {
                      "id": "586505709526bc1971ec199e",
                      "createdAt": 1483015536,
                      "prefix": "https://igx.4sqi.net/img/general/",
                      "suffix": "/121766508_2msnvPMQpqOBkphfNeDw07kx0Wadys0R8e-8qHaPIk4.jpg",
                      "width": 1920,
                      "height": 1440,
                      "user": {
                        "id": "121766508",
                        "firstName": "Caroline",
                        "lastName": "Deng",
                        "gender": "female",
                        "photo": {
                          "prefix": "https://igx.4sqi.net/img/user/",
                          "suffix": "/121766508_J7pMKIGs_ND4HOuiyjwamBvt5UNtL_lokuwfMVdBeIgVPQv45jNk5QRPN1ik7wvPvhEKNNarw.jpg"
                        }
                      },
                      "visibility": "public"
                    }
                  }
                ]
              }
            },
            {
              "id": "4fd71e98e4b06fc50d28b34d",
              "name": "wonders of the world",
              "description": "The wonders of the world. ( The Most Of The World.)",
              "type": "others",
              "user": {
                "id": "3057036",
                "firstName": "Kae  ?",
                "lastName": "? ? ??? ?? ? ?",
                "gender": "male",
                "photo": {
                  "prefix": "https://igx.4sqi.net/img/user/",
                  "suffix": "/ZO4OXTHV42EXBQL5.jpg"
                }
              },
              "editable": false,
              "public": true,
              "collaborative": false,
              "url": "/keapetpuang/list/wonders-of-the-world",
              "canonicalUrl": "https://foursquare.com/keapetpuang/list/wonders-of-the-world",
              "createdAt": 1339498136,
              "updatedAt": 1469966161,
              "photo": {
                "id": "4fa166b2e4b0ebb35365b97e",
                "createdAt": 1335977650,
                "prefix": "https://igx.4sqi.net/img/general/",
                "suffix": "/J-OedvHWvkikH9Nqf4bWIwsyhnh47KuncsXwTm92RDg.jpg",
                "width": 720,
                "height": 543,
                "user": {
                  "id": "3760400",
                  "firstName": "Rodrigo",
                  "lastName": "Román",
                  "gender": "male",
                  "photo": {
                    "prefix": "https://igx.4sqi.net/img/user/",
                    "suffix": "/ZARJIUP3C2IUXE0P.jpg"
                  }
                },
                "visibility": "public"
              },
              "followers": {
                "count": 286
              },
              "listItems": {
                "count": 155,
                "items": [
                  {
                    "id": "t4dff7a5e81dc5e4fd69e35c3",
                    "createdAt": 1339502313,
                    "photo": {
                      "id": "4fd67799e4b008dc37305d44",
                      "createdAt": 1339455385,
                      "prefix": "https://igx.4sqi.net/img/general/",
                      "suffix": "/56ZgO1_YrdCye-JqGv4twJIx7iWAp5bCZv_d5JqPYm4.jpg",
                      "width": 612,
                      "height": 612,
                      "user": {
                        "id": "13620694",
                        "firstName": "ᐯIᑕKY",
                        "lastName": "Cheng",
                        "gender": "female",
                        "photo": {
                          "prefix": "https://igx.4sqi.net/img/user/",
                          "suffix": "/13620694-ERI4W5PICUFNKNLB.jpg"
                        }
                      },
                      "visibility": "public"
                    }
                  }
                ]
              }
            },
            {
              "id": "4e4c944cae60bb50126754f8",
              "name": "Paris",
              "description": "Capitale de la France, connue dans le monde entier, la ville est riche d'un patrimoine exceptionnel.",
              "type": "others",
              "user": {
                "id": "6082867",
                "firstName": "Parisian Geek",
                "gender": "none",
                "photo": {
                  "prefix": "https://igx.4sqi.net/img/user/",
                  "suffix": "/6082867-YRA5X0IQ1FO5OJA2.png"
                },
                "type": "page"
              },
              "editable": false,
              "public": true,
              "collaborative": false,
              "url": "/parisiangeek/list/paris",
              "canonicalUrl": "https://foursquare.com/parisiangeek/list/paris",
              "createdAt": 1313641548,
              "updatedAt": 1496416598,
              "photo": {
                "id": "4dd9c43740a39dd5c93d8de8",
                "createdAt": 1306117175,
                "prefix": "https://igx.4sqi.net/img/general/",
                "suffix": "/GFTGATNT4AXNWZTTNHO21JOFSK1IG5OFU1FMDS3YBXRKUB1L.jpg",
                "width": 720,
                "height": 540,
                "user": {
                  "id": "256867",
                  "firstName": "MikaelDorian",
                  "gender": "male",
                  "photo": {
                    "prefix": "https://igx.4sqi.net/img/user/",
                    "suffix": "/256867_cTycRQy4_mnK3GsGsNfgD798fMBa0JiWNldSeLuWQANimY91Nkry7tJILBUEUntdBnCBtAMiD.jpg"
                  }
                },
                "visibility": "public"
              },
              "logView": true,
              "followers": {
                "count": 1514
              },
              "listItems": {
                "count": 201,
                "items": [
                  {
                    "id": "t4d51a63ed7eaa143f067750f",
                    "createdAt": 1313641548,
                    "photo": {
                      "id": "4dd9c43740a39dd5c93d8de8",
                      "createdAt": 1306117175,
                      "prefix": "https://igx.4sqi.net/img/general/",
                      "suffix": "/GFTGATNT4AXNWZTTNHO21JOFSK1IG5OFU1FMDS3YBXRKUB1L.jpg",
                      "width": 720,
                      "height": 540,
                      "user": {
                        "id": "256867",
                        "firstName": "MikaelDorian",
                        "gender": "male",
                        "photo": {
                          "prefix": "https://igx.4sqi.net/img/user/",
                          "suffix": "/256867_cTycRQy4_mnK3GsGsNfgD798fMBa0JiWNldSeLuWQANimY91Nkry7tJILBUEUntdBnCBtAMiD.jpg"
                        }
                      },
                      "visibility": "public"
                    }
                  }
                ]
              }
            },
            {
              "id": "4e63ff6dc65b2dc8a04e084a",
              "name": "Incontournable de Paris",
              "description": "",
              "type": "others",
              "user": {
                "id": "6082867",
                "firstName": "Parisian Geek",
                "gender": "none",
                "photo": {
                  "prefix": "https://igx.4sqi.net/img/user/",
                  "suffix": "/6082867-YRA5X0IQ1FO5OJA2.png"
                },
                "type": "page"
              },
              "editable": false,
              "public": true,
              "collaborative": false,
              "url": "/parisiangeek/list/incontournable-de-paris",
              "canonicalUrl": "https://foursquare.com/parisiangeek/list/incontournable-de-paris",
              "createdAt": 1315176301,
              "updatedAt": 1437408476,
              "photo": {
                "id": "4e4ff5b181dcf21a878ea88c",
                "createdAt": 1313863089,
                "prefix": "https://igx.4sqi.net/img/general/",
                "suffix": "/JJVQBOH1MXFNPPM0XTQZUT431SE1DLYPDPUNOKXHDUWS04NU.jpg",
                "width": 3000,
                "height": 4000,
                "user": {
                  "id": "6082867",
                  "firstName": "Parisian Geek",
                  "gender": "none",
                  "photo": {
                    "prefix": "https://igx.4sqi.net/img/user/",
                    "suffix": "/6082867-YRA5X0IQ1FO5OJA2.png"
                  },
                  "type": "page"
                },
                "visibility": "public"
              },
              "logView": true,
              "followers": {
                "count": 606
              },
              "listItems": {
                "count": 118,
                "items": [
                  {
                    "id": "t4d51a63ed7eaa143f067750f",
                    "createdAt": 1315176301,
                    "photo": {
                      "id": "4d51a643970428fd5a0af3ea",
                      "createdAt": 1297196611,
                      "prefix": "https://igx.4sqi.net/img/general/",
                      "suffix": "/CZRRO4MKGV1PCM3YBKYVTDV0EWUY1TPDSM10JQSPJO3LT4PL.jpg",
                      "width": 720,
                      "height": 540,
                      "user": {
                        "id": "6082867",
                        "firstName": "Parisian Geek",
                        "gender": "none",
                        "photo": {
                          "prefix": "https://igx.4sqi.net/img/user/",
                          "suffix": "/6082867-YRA5X0IQ1FO5OJA2.png"
                        },
                        "type": "page"
                      },
                      "visibility": "public"
                    }
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    "hours": {
      "status": "Open until 11:00 PM",
      "richStatus": {
        "entities": [],
        "text": "Open until 11:00 PM"
      },
      "isOpen": true,
      "isLocalHoliday": false,
      "dayData": [],
      "timeframes": [
        {
          "days": "Mon–Sun",
          "includesToday": true,
          "open": [
            {
              "renderedTime": "10:00 AM–11:00 PM"
            }
          ],
          "segments": []
        }
      ]
    },
    "popular": {
      "status": "Likely open",
      "richStatus": {
        "entities": [],
        "text": "Likely open"
      },
      "isOpen": true,
      "isLocalHoliday": false,
      "timeframes": [
        {
          "days": "Today",
          "includesToday": true,
          "open": [
            {
              "renderedTime": "11:00 AM–10:00 PM"
            }
          ],
          "segments": []
        },
        {
          "days": "Mon–Tue",
          "open": [
            {
              "renderedTime": "11:00 AM–10:00 PM"
            }
          ],
          "segments": []
        },
        {
          "days": "Wed",
          "open": [
            {
              "renderedTime": "11:00 AM–9:00 PM"
            }
          ],
          "segments": []
        },
        {
          "days": "Thu–Fri",
          "open": [
            {
              "renderedTime": "11:00 AM–10:00 PM"
            }
          ],
          "segments": []
        },
        {
          "days": "Sat",
          "open": [
            {
              "renderedTime": "10:00 AM–11:00 PM"
            }
          ],
          "segments": []
        }
      ]
    },
    "pageUpdates": {
      "count": 0,
      "items": []
    },
    "inbox": {
      "count": 0,
      "items": []
    },
    "attributes": {
      "groups": [
        {
          "type": "payments",
          "name": "Credit Cards",
          "summary": "Credit Cards",
          "count": 5,
          "items": [
            {
              "displayName": "Credit Cards",
              "displayValue": "Yes (incl. Visa & MasterCard)"
            }
          ]
        }
      ]
    },
    "bestPhoto": {
      "id": "53c56868498e9934faef239a",
      "createdAt": 1405446248,
      "source": {
        "name": "Swarm for iOS",
        "url": "https://www.swarmapp.com"
      },
      "prefix": "https://igx.4sqi.net/img/general/",
      "suffix": "/256867_kX7yLb4xFUn0sLpCOQuWsYk2R7azc0-c8f-4jx2R9ho.jpg",
      "width": 641,
      "height": 960,
      "visibility": "public"
    },
    "colors": {
      "highlightColor": {
        "photoId": "53c56868498e9934faef239a",
        "value": -10461096
      },
      "highlightTextColor": {
        "photoId": "53c56868498e9934faef239a",
        "value": -1
      },
      "algoVersion": 3
    }
  }

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`