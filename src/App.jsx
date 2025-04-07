import React from 'react';
import Hero from './components/Hero.jsx';
import Section from './components/Section.jsx';
import HealthcareSection from './components/HealthcareSection.jsx';
import FinanceSection from './components/FinanceSection.jsx';
import AIDetailsSection from './components/AIDetailsSection.jsx';
import Automotive from './components/Automative.jsx';

function App() 
{
  return (
    <div className="App">
      {/* Google Adds */}
      <div className="adsense">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <ins className="adsbygoogle"
          style={{display: 'block'}}
          data-ad-client="your-client-id"
          data-ad-slot="your-ad-slot"
          data-ad-format="auto"></ins>
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
      </div>

      <Hero />
      <Section />
      <HealthcareSection />
      <FinanceSection />
      <Automotive />
      <AIDetailsSection />
    </div>
  );
}

export default App;