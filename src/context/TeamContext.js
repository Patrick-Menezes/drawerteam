import { createContext, useState} from  "react";



export const TeamContext = createContext();


export const TeamContextProvider=({children})=>{

  const [NPlayers,setPlayers]=useState("");
  const [NTeam,setTeam]=useState("");
  const [Player,setPlayer]=useState("");

 const [crew,setCrew] =useState([]); 
const[Sides,setSides]=useState([]);

const createCrew=()=>{

  var times = Math.floor(NPlayers / NTeam);
  var reservas = NPlayers% NTeam;
  while(times>0){
    var i=0;
    
    do {
      crew.push("time "+times);
      i = i + 1;
    } while (i < NTeam);
    
    times--;
    
    if(times===0){
    
    while(reservas )
    {
      crew.push(" Próximo");
        reservas--;
    }
    
    }
    
    
    }





}



const draw=()=>{

  var Rand= Math.floor(Math.random() * (crew.length - 0));
const myPlayer = crew[Rand]

setPlayer(myPlayer); 

if(crew){
Sides.push(myPlayer);
  crew.splice(Rand, 1);


}
  console.log(Sides);
}


  if(crew.length>0){
draw();

  }



return(
    <TeamContext.Provider value={{NPlayers,setPlayers,NTeam,setTeam,crew,setCrew,createCrew,draw,setSides,Sides,Player}}>
      {children}
    </TeamContext.Provider>
)

}