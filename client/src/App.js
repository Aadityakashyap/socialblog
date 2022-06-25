import React from 'react';
import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Footer from './components/Footer/Footer';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/" exact component={() => <Navigate to="/posts" />} element={<Home />} />
          <Route path="/posts" exact component={Home} element={<Home />} />
          <Route path="/posts/search" exact component={Home} element={<Home />} />
          <Route path="/posts/:id" exact component={PostDetails} element={<PostDetails />} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Navigate to="/posts" replace={true} />)} element={<Auth />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
};

export default App;
