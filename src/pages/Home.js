import './Home.css'
import { useContext,useState} from 'react'
import {TeamContext} from '../context/TeamContext'

import { Link } from 'react-router-dom'


const Home = () => {
 
const drawT=(e)=>
{
e.preventDefault();

if(!NPlayers||!NTeam)return;


createCrew();
console.log(crew);
const botao = document.getElementById('clicado');
botao.click();

setPlayers("");
setTeam("");

}
const{NPlayers,setPlayers,NTeam,setTeam,createCrew,crew,setCrew}=useContext(TeamContext);
var times = Math.floor(NPlayers / NTeam);
 var reservas = NPlayers% NTeam;
var show;
 if(NPlayers && NTeam ){

if(NPlayers !==0 && NTeam !==0)
 { show=true;}
  

    }


 


  return (



<div className="Home">
<form onSubmit={drawT}>

<label>jogadores presentes:
  <input type="number" value={NPlayers}   placeholder='...'onChange={(e)=>setPlayers(e.target.value)} />
</label>

<label>jogadores por time:
  <input type="number" value={NTeam} placeholder='...' onChange={(e)=>setTeam(e.target.value)}/>
</label>


<button  type='submit'>sortear</button>
<Link to={'/drawer'} id='clicado'></Link>
</form>

<div className="banner">
{show&&(
<p>o resultado é {times} times, e {reservas}  reserva(s)</p> 
)
}
</div>



</div>



  )
}

export default Home