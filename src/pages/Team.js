
import {Link} from 'react-router-dom'
import { useContext} from 'react'
import {TeamContext} from '../context/TeamContext'
export const Team = () => {

 const{Sides,}=useContext(TeamContext);
  return (

<>

<div className="list">
   <ol>
      {Sides.map((item, index) => (
        <li key={index}>{item}</li>
      ))} 
    </ol> 
</div>
  
<div className="link">
    <Link to={'/drawer'} id='back'>Voltar</Link>
</div>
  

</>



)

      }


      export default Team