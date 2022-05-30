// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('Le nom a été soumis : ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Nom :
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Envoyer" />
//       </form>
//     );
//   }
// }

import React, {useState } from 'react';
import{addDoc, collection} from "firebase/firestore"
import { db } from './firebase-config';


function Formulaire (props) {
    //const [users,setUsers]=useState([]);//
    const pseudo=props.pseudo;
    const setMsg=props.setMsg
    const msg=props.msg

    const usersCollectionRef=collection(db,"users");    
    const handleSubmit=(event)=>{
        event.preventDefault();          
        createUser();                
    }

    const createUser=async()=>{        
        await addDoc(usersCollectionRef,{pseudo:pseudo,message:msg, time:Date.now()});
        setMsg('');
      };
    const handleChange=(event)=>{       
        setMsg(event.target.value); 
    }
    
        return (
            <form 
            className='form'
            onSubmit={handleSubmit}>
                <textarea
                value={msg}
                onChange={handleChange}
                required
                maxLength='140'/>
                <div className='info'>
                140
                </div>
                <button type='submit'>Envoyer!</button>
            </form>
        );
    
}

export default Formulaire;