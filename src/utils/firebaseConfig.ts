import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAfZZdnwDKF4khnoWkGiDtt90rVXUR8TEY',
  authDomain: 'legashfund-5a20b.firebaseapp.com',
  projectId: 'legashfund-5a20b',
  storageBucket: 'legashfund-5a20b.appspot.com',
  messagingSenderId: '854202045633',
  appId: '1:854202045633:web:8b7ed21f4e5e517fd7b040',
  measurementId: 'G-T9R51RJGBR',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
