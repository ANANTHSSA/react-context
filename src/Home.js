import React, { useContext } from 'react';
import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import './Form.css'
import { stateContext } from './stateContext';




const Home = () => {
  const{ state:{task},dispatch}=useContext(stateContext);
  console.log(task);
  let  navigate = useNavigate()
let ssa = task;
    // const gets = JSON.parse(localStorage.getItem("value"));
    // const [items,removeItems] = useState(gets);





  //  const handleDelete=(...state)=>{
  //     delete gets[state];
  //     let a = gets.flat();
      // localStorage.removeItem("value");
      // localStorage.setItem("value",JSON.stringify(a));
  //     removeItems(a); 
  //  }
   const handleDelete=(i)=>{ 
    delete ssa[i];
    let a = ssa.flat();
    return a;

   }
//    switch(action.type){
//     case 'push': return{
//         ...state,
//         task:action.payload,
//     }
//     default:
//         return state;
// }

let editValue = (e,i) =>{
  navigate('/form')
  dispatch({
    type : "EDIT",
    payload : [e,i]
  })
}

 

    
    return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 mt-5'>
          <div className='link'>
          <Link to='/form' className='home btn text-light bg-danger'>Form page</Link>
          <div>
            <table className='table table-bordered mt-5 shadow '>
              <tr>
                <th>student-name</th>
                <th>task-name</th>
                <th>complete or uncomplete</th>
                <th>edit or delete</th>
              </tr>
             {ssa?.map((value,i)=>{
              return<tr key={i} >
                <td>{value.name}</td>
                <td>{value.desp}</td>
                <td>{value.completed}</td>
                <td> <button onClick={()=>dispatch({type:"SSA",payload:handleDelete(i)})}><iconify-icon icon="material-symbols:delete-outline"></iconify-icon>
                </button>
                <button onClick={() => editValue(value,i)}><iconify-icon icon="material-symbols:edit-square-outline-rounded"></iconify-icon>k</button>
                </td>
              </tr>
             })}
            </table>
        </div>
      </div>
    </div>
  
    </div>
     </div>
  )
}

export default Home