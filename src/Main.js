import React from 'react';
import Header from './Header';
import HelpTopics from './HelpTasks';
import Footer from './Footer';
// import './Main.css';

const Main = () => {
  return (
    <div className="app">
      <Header />
      <HelpTopics />
      <Footer />
    </div>
  );
};

export default Main;
