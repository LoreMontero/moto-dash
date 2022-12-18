import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Sidebar from './scenes/global/Sidebar';
import Topbar from './scenes/global/Topbar';
import Dashboard from './scenes/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Topbar />
      <Routes>
        <Route exact path="/" component={Dashboard} />
      </Routes>
    </BrowserRouter>
  );
}