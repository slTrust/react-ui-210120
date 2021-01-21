import React ,{useState}from 'react';
import Dialog from './dialog';
const ButtonExample:React.FC = ()=>{
    const [x,setX] = useState(true);
    return (
        <div>
            <button onClick={()=>setX(!x)}></button>
            <Dialog visible={x}/>
        </div>
    )
}

export default ButtonExample;