import logo from './logo.svg';
import './App.scss';
import HelloWorld from './components/HelloWorld/HelloWorld';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as firebase from 'firebase/app';
import * as auth from 'firebase/auth';
import * as firestore from 'firebase/firestore';
import * as storage from 'firebase/storage';
import * as analytics from 'firebase/analytics';
import * as functions from 'firebase/functions';

initializeApp(firebaseConfig);
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
