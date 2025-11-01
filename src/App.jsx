import React from 'react'
import NavigationBar from './components/NavigationBar';
// import { useScrollToTop } from './hooks/useScrollToTop';
import HeroSection from './components/Hero';

const App = () => {
  return (
    <div>
      <NavigationBar/>
      <HeroSection/>
    </div>
  )
}

export default App;
