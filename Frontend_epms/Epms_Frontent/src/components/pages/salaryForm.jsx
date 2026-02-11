// import axios  from 'axios';
// import { useState } from 'react';


// function Salary(){
    
// const[employee,setEmployee]=useState({
//         employeeNumber:"",
//         FirstName:"",
//         LastName:"",
//         Address:"",
//         Gender:"",
//         Position:"" 
// });
// const handleChange=(e)=>{
//  setEmployee({...employee,[e.target.FirstName]: e.target.values});
// }
// const handleSubmit=async(e)=>{
//     e.preventDefault();
//     await axios.post("https://localhost:4000/employee");
//     alert("Employee data stored");
// }
//  return(
//     <div>
//         <form onSubmit={handleSubmit} className='p3 space-y-2'>
//             <input name="FirstName" onChange={handleChange} placeholder='firstname'/>
//             <input name="LastName" onChange={handleChange} placeholder='Lastname'/>
//             <input name="Address" onChange={handleChange} placeholder='Address'/>
//             <select>
//                 <option>Male</option>
//                 <option>Female</option>
//             </select>
//             <input name="Position" onChange={handleChange} placeholder='firstname'/>
//             <button type="submit" className="bg-blue-600 text-white py-2 rounded hover">Submit</button>

//         </form>

//     </div>


// );
// }

// export default Employee;




