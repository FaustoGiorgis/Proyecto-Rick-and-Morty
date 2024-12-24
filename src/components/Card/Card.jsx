import './card.css';
import { useState } from "react"


export default function Card({personaje}) {
    let [ocultar,setOcultar]=useState(true)
    return(
        <div className='d-flex gap-2 border rounded tarjeta border-5'>
            <div>
                <img src={personaje.image}/>
                <h2 id="personaje">{personaje.name}</h2>
                <button 
                onClick={()=>setOcultar(false)} 
                className={ocultar?"btn btn-warning":"d-none"}>Know More</button>            
            </div>
            { ocultar ?'':
                <div className="px-5 py-2" >
                <button onClick={()=>setOcultar(true)}style={{ float: 'right' }}>X</button>
                <table>
                    <tr>
                        <th>Character Status</th>
                        <td>{personaje.status}</td>
                    </tr>
                    <tr>
                        <th>Species</th>
                        <td>{personaje.species}</td>
                    </tr>
                    <tr>
                        <th>Origin</th>
                        <td>{personaje.origin.name}</td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>{personaje.gender}</td>
                    </tr>
                    </table>
            
                </div>}
            

        </div>
    )
}