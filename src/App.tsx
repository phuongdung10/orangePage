import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Header2 from './components/Header2';
import Body from './components/Body';
import Body1 from './components/Body1';
import Body2 from './components/Body2';
import Body3 from './components/Body3';
import Body4 from './components/Body4';
import Body5 from './components/Body5';
import Body6 from './components/Body6';
import Body7 from './components/Body7';
import Footers from './components/Footers';
import { Container } from 'react-bootstrap';
import "./App.css";
import Whatapp from "./components/Whatsapp"
import Whatsapp from './components/Whatsapp';


function App() {
  return (
    <div className='App-header'>
      <Container>

        <Header />

        <Header2 />
        <div style={{padding:"30px"}}  className="fixed-bottom">
          <Whatsapp />
        </div>
        <Body />
        <Body1 />
        <Body2 />
        <Body3 />
        <Body4 />
        <Body5 />
        <Body6 />
        <Body7 />

        <Footers />
      </Container>


    </div>






  );
}

export default App;
