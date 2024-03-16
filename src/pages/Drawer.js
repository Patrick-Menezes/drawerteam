import './Drawer.css'
import './Home.css'
import {Link} from 'react-router-dom'
import { useContext,useState} from 'react'
import {TeamContext} from '../context/TeamContext'

const Drawer = () => {

  const{setCrew,setSides,Sides}=useContext(TeamContext);

const [count, setCount] = useState(0);
const reset=()=>{
  setCrew([]);
  let botao = document.getElementById('back');
  botao.click();
  setSides([]);
   
}
const list=()=>{
  let botao = document.getElementById('team');
  botao.click();

}



  return (

<>
<div className="itens">



<div className="player">
<h3>jogador:<h3>
<h2>{count+1}</h2>
</h3>escalação:</h3>
 <h2>{Sides[count]}</h2>
</div>



<>


</>
<div className="butons">

<button id='ant' onClick={()=>{
if(count===0) {
  return;
  }
  setCount(count-1);
 
}}>anterior</button>

<button onClick={()=>{
if(count===Sides.length-1){
  return;
}
   setCount(count+1);

}}>próximo </button>


</div>


 
<div className="back">


<button onClick={list}>resultado completo</button>
  <button onClick={reset}>página inicial</button>
  <Link to={'/team'} id='team'></Link>
  <Link to={'/'} id='back'></Link>
</div>

</div>


</>



  )
}

export default Drawer
