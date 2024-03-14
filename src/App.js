import './App.css';
import Ostukorv from './Ostukorv';
import {useState} from 'react'
import UusOst from './UusOst'

function App() {
  const [ostud, setOstud] = useState([
    {nimetus: 'Pirnid', yhik: 'kg', kogus: 1, korvis: true },
    {nimetus: 'Leib', yhik: 'tk', kogus: 1, korvis: false },
  ])

  const toggleKasKorvis = (index) => {
    console.log('Klikiti real ' + index)
    const uusMassiiv = ostud.map((ost, i)=>{
      if (index !== i) {
        return ost;
      }
      ost.korvis = !ost.korvis
      return ost;
    });

    setOstud(uusMassiiv)
  }

  const lisaToode = (nimetus, kogus, yhik) => {
    const uusToode = {
      nimetus,
      yhik,
      kogus,
      korvis: false
    }
    console.log(uusToode)
    setOstud([...ostud, uusToode])
  }

  return (
    <div className="container">
      <h1>Ostukorv</h1>
      <UusOst lisaToode={lisaToode} />
      <Ostukorv ostud={ostud} toggleKasKorvis={toggleKasKorvis} />
      <h4>Ostukorvis on {ostud.filter(ost=>ost.korvis).length} toodet</h4>
    </div>
  );
}

export default App;
