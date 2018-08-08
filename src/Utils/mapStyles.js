/*CUSTOM STYLE for Google Maps*/
//src: https://snazzymaps.com/style/7/icy-blue
export const mapStyles = [
    {
        "stylers": [
            {
                "hue": "#2c3e50"
            },
            {
                "saturation": 250
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 50
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
    featureType: "all",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  }
];
