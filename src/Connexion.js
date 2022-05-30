// import React from 'react';
// import { useState } from 'react';
// import { Navigate } from 'react-router-dom';

// const Connexion = () => {
//     const [name , setName] = useState('');
//     const [password , setPassword] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setGoToChat(true);
//     }

//     const handleChange = (e) => {
//         setPseudo(e.target.value);
//     }

//     if (goToChat) {
//         return <Navigate to={'/name' /'+name'} />
//     }
    
//             return (
//                 <div className='connexion'>
//                     <form className='connexion' onsubmit={handleSubmit}>
//                         <input
//                             value={name}
//                             onChange={handleChange}
//                             placeholder='Name'
//                             type='text'
//                             required/>
//                         <input
//                             value={password}
//                             onChange={handleChange}
//                             placeholder='Password'
//                             type='password'
//                             required/>
//                         <button type='submit'>Connexion</button>
//                     </form>
//                 </div >
//             );
//         }
    

// export default formlaire;
import React, { useState } from 'react';
import {Navigate} from'react-router-dom';


function Connexion () {
    const[pseudo, setPseudo]=useState('');
    const[goToChat, setGoToChat]=useState(false);
    
  const handleChange=(e)=>{
        setPseudo(e.target.value);
       
    }
  const handleSubmit=(event)=>{
        event.preventDefault();
        setGoToChat(true);
    }
        
    if (goToChat){       
        return<Navigate to={'/pseudo/'+pseudo}/>
    }
        return (
            <div className='connexionBox'>
                <form className='connexion' onSubmit={handleSubmit}>
                    <input 
                    value={pseudo}
                    onChange={handleChange}
                    placeholder='Pseudo'
                    type='text'
                    required/>
                    <button type='submit'>GO</button>
                </form>
            </div>
        );
    
}

export default Connexion;

