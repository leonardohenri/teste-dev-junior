import { useEffect, useState } from "react";
import { PACKAGES } from "../../../util/array";
import './styles.css'

export const ContentThree =()=>{
    const array = PACKAGES();
    const [newArray,setNewArray] = useState([]);
    useEffect(()=>{
      setNewArray([array[0],array[1],array[2]])
   
    },[array])

  
    const handleChange = (e)=>{
      const remove = document.querySelectorAll('label')
      remove.forEach((e)=>
      e.classList.remove('ativo-color')
      )
      if(e.target.value === 'filter1'){
        document.getElementById('label1').classList.add('ativo-color')
        setNewArray([array[0],array[1],array[2]])
      }
      else if(e.target.value === 'filter2'){
        document.getElementById('label2').classList.add('ativo-color')
        setNewArray([array[3],array[4],array[5]])
      }
      if(e.target.value === 'filter3'){
        document.getElementById('label3').classList.add('ativo-color')
        setNewArray([array[6],array[7],array[8]])
      }
    }
    return(
        <div className='content-three'>
        <div className='input-radio'>
         <h2>Popular Package</h2>
         <div className='input'>
           <input type="radio" name='option' value='filter1' id='filter1' onChange={(e)=>handleChange(e)}  defaultChecked/> <label className='input-radio-label ativo-color' id='label1' htmlFor="filter1">FILTER 1</label>
           <input onChange={(e)=>handleChange(e)} type="radio" name='option' value='filter2' id='filter2' /> <label className='input-radio-label'  id='label2' htmlFor="filter2">FILTER 2</label> 
           <input onChange={(e)=>handleChange(e)} type="radio" name='option' value='filter3' id='filter3' /> <label className='input-radio-label'  id='label3' htmlFor="filter3">FILTER 3</label>
         </div>
        </div>
     
         <div className="containerGrid">
           <div className='gridContainer'>
             {newArray && newArray.map(obj =>
               <div className='grid'  key={obj.id}>
                 <h3>{obj.nome}</h3>
                 <img  src={obj.img} alt="prato" height={100} width={100} />
                 <p className='valor'>$ {obj.valor}</p>
                 <p className="descricao">{obj.descricao}</p>
                 <button >Order now</button>
               </div>
             )}
           </div>
         </div>
       </div>
    );
}