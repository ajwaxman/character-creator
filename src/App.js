import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

const perspective = {
  position: 'fixed',
  background: 'hsl(195deg, 20%, 86%)',
  height: '40%',
  width: '100%',
  bottom: 0,
  'z-index': '-1', 
}

function App() {
  return (
    <>
      <CharacterEditor />
      <div style={perspective}></div>
      <Footer />
    </>
  );
}

export default App;
