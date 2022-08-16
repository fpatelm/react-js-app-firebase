import logo from './logo.svg';
import './App.scss';
import HelloWorld from './components/HelloWorld/HelloWorld';
import { addDoc, collection, connectFirestoreEmulator } from 'firebase/firestore';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { db, auth, store, func } from './config';
import { connectAuthEmulator } from 'firebase/auth';
import { connectStorageEmulator } from 'firebase/storage';
import { connectFunctionsEmulator } from 'firebase/functions';


// eslint-disable-next-line no-restricted-globals
if (location.hostname === 'locahost') { 
  connectFirestoreEmulator(db, 'localhost', 8080);
  connectAuthEmulator(auth, 'localhost:8040');
  connectStorageEmulator(store, 'localhost', 8081);
  connectFunctionsEmulator(func,'localhost', 8082);
}

var col = collection(db, 'testabc');
addDoc(col, { name: 'test' });


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< HelloWorld />} />
      </Routes>
    </BrowserRouter >
  );
};

export default App;
