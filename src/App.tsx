// import './App.css';
// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Main from './pages/Main';
// import { About } from './pages/About';
// import Header from './components/Header';
// import { NotFound } from './pages/NotFound';
// import FormPage from './pages/FormPage';

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <BrowserRouter>
//           <Header />
//           <Routes>
//             <Route path="/" element={<Main />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/form" element={<FormPage />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }

// export default App;
import React from "react";
import Main from "./pages/Main";
import { ContextWrapper } from "./Context";

export const App = () => {
  return (
    <ContextWrapper>
      <Main />
    </ContextWrapper>
  );
};

export default App;