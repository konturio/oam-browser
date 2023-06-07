module.exports = {
  awsRegion: "us-east-1",
  feedbackSubmissionURL:
    "https://getsimpleform.com/messages/ajax?form_api_token=506fc2ac58582416b6086a68a343e344",
  catalog: {
    url: "https://api-staging.openaerialmap.org"
  },
  environment: "staging",
  uploadBucket: "oam-uploader-staging-temp",
  googleClient:
    "36015894456-3d5ka80qtpaqcjhco3lsl38s1fj0dr71.apps.googleusercontent.com",
  googleDeveloperKey: "",
  googleAppId: "",
  OAMBrowserUrl: "https://map-staging.openaerialmap.org/",
  awsKey: "AKIAZYDVV4ILLVLO3RFN",
  map: {
    mapbox: {
      accessToken:
        "pk.eyJ1Ijoib3BlbmFlcmlhbG1hcCIsImEiOiJjaXl4MjM5c20wMDBmMzNucnZtbnYwZTcxIn0.IKG5flWCS6QfpO3iOdRveg"
    },
    initialZoom: 3,
    minZoom: 2,
    maxZoom: 18,

    initialView: [-18.632, 18.479],

    oamMosaicLayer: {
      id: "oam-mosaic",
      name: "OAM Mosaic",
      url: "https://api-staging.openaerialmap.org/mosaic/tiles/{z}/{x}/{y}.png"
    },

    baseLayers: [
      {
        id: "osm",
        name: "OpenStreetMap (Standard)",
        url: "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
      }
    ]
  }
};
