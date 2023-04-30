import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import { About } from './pages/About';
import Header from './components/Header';
import { NotFound } from './pages/NotFound';
import FormPage from './pages/FormPage';

function App() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      {isMounted && (
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
