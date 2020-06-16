// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  host : 'https://chumtravel.herokuapp.com/',
  api : 'https://chumtravel.herokuapp.com/api/',
  // api : 'http://localhost:4200/api/',
  firebase : {
    google : {
      token : '980062097702-fg2a1hlkrgll55icqd93661hlbo5p811.apps.googleusercontent.com',
      secret : 'BvG4IxoAMWWWoPa6zINKgPty'
    },
    facebook : {
      token : '',
      secret : ''
    },
    twitter : {
      token : 'yA1IE48zVHNGIn2MndYAPhL5V',
      secret : '7jg6EhZq5oGS9wVxvMAMMGvZWMJW1bmOwlw537q77wGbQd3Vma'
    }
  },
  firebaseConfig : {
    apiKey: 'AIzaSyDlQGoB2BMxdjSJpw1YTQnnTuVafmDiyHk',
    authDomain: 'come-chum.firebaseapp.com',
    databaseURL: 'https://come-chum.firebaseio.com',
    projectId: 'come-chum',
    storageBucket: 'come-chum.appspot.com',
    messagingSenderId: '980062097702',
    appId: '1:980062097702:web:e774e6bb2280b04a9131e7',
    measurementId: 'G-RLSWS9PCVW'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
