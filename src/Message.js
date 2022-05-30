// import React from 'react'
// import { useState } from 'react'

// function message() {
// {
//     const [ value, setValue ] = useState('');
//     const { chatId, creds } = props;
//     const handleSubmit = (event) =>
//     {
//         event.preventDefault();
//         const text = value.trim();
//         if (text.length > 0) sendmessage(creds, chatId, { text });
//         setValue('');
        
//     }
//     const handleChange = (event) =>
//     {
//         setValue(event.target.value);
//         isTyping(props, chatId);
//     }
//      const handleUpload = (event) =>
//      {
//          sendMessage(creds, chatId, { files: event.target.files, text:'' });
        
//     }
//   return (
//       <form className='message-form' onSubmit={handleSubmit}>
//           <input className='message-input' placeholder='Send a message ...' value={value} onChange={handleChange} /> 
//           <label htmlFor="upload-button">
//               <span className='image-button'>
//                   <PictureOutlined className='picture-icon'/>
//               </span>
//           </label>
//           <input type="file" multiple={false} id='upload-button' style={{ display: 'none' }} onChange={handleUpload} />
//           <button type='submit' className='send-button'>
//               <SendOutlined className='send-icon'/>
//           </button>
//       </form>
//   )
// }
// }

// export default message;

import React from "react";
const Message=({pseudo,message})=>{
   return(
    <div>
        <h3>{pseudo}</h3>  
        <p className="user-message">
            {message}
        </p>
   </div> 
   ) 
}
export default Message;