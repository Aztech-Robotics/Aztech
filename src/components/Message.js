import { useState } from "react";
export const Message = (props) => {
    const [message, setMessage]= useState('Welcome visitor')
    return (
      <div>
        <h1>
{message}
        </h1>
        <button onClick={()=> setMessage('AAAA de chill bro use el statement')}>Subscribe</button>
      </div>
    );
  };
  // export default Test
  