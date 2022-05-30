import './App.css';
import React, { useEffect, useState } from 'react';
import Message from './Message';
import Formulaire from './Formulaire';
import { useParams } from 'react-router-dom'
import{db}from './firebase-config'
import{collection} from "firebase/firestore"
import { doc, onSnapshot,query,getFirestore,orderBy,limit } from "firebase/firestore";
function App(){
  const {pseudo}=useParams()
  const[msg,setMsg]=useState([]);
  const[psdo, setPsdo]=useState(pseudo);
  const [users,setUsers]=useState([]);//
  const [snapShot, setSnapshot] = useState([]);
  const usersCollectionRef=collection(db,"users");

  let utilisateurs=[];  

 useEffect(() => {      
    const q = query(collection(getFirestore(), 'users'), orderBy('time', 'desc'), limit(10));
    utilisateurs=[];
    const snap=onSnapshot(q, (snapshot)=> {
    snapshot.docChanges().forEach(change=> {        
    let user = change.doc.data();
    utilisateurs.push(user); 
    });
    setSnapshot(utilisateurs)
    });
   
}, []);
 
  const compMessages=snapShot.map((snap)=>{
        return(
          <Message
           // key={key}
           message={snap.message}
           pseudo={snap.pseudo}
          />);
         })
    return (
      <div className='box'>        
            <div className='messages'>
                {compMessages}        
            </div>   
            <div>
                <Formulaire
                pseudo={psdo}  
                setMsg={setMsg} 
                msg={msg}   
                />
            </div>
      </div>
    );
  }


export default App;
