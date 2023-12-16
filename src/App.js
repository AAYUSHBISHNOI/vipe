import './App.css';
import Agile from './Components/Agile';
import All from './Components/All';
import Featured from './Components/Featured';
import Integer from './Components/Integer';
import Long from './Components/Long';
import Myfooter from './Components/Myfooter';
import Myheader from './Components/Myheader';
import Sucess from './Components/Sucess';
import Tean from './Components/Tean';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Tell from './Components/Tell';
import Mybacktotop from './Components/Mybacktotop';

function App() {
  return (
    <>
    <Myheader/>
    <Mybacktotop/>
    <Tell/>
    <Featured/>
    <Integer/>
    <All/>
    <Long/>
    <Agile/>
    <Tean/>
    <Sucess/>
    <Myfooter/>
    </>
  );
}

export default App;
