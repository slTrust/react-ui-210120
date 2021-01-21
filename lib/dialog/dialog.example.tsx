import React ,{useState}from 'react';
import Dialog from './dialog';
const ButtonExample:React.FC = ()=>{
    const [x,setX] = useState(true);
    return (
        <div>
            <button onClick={()=>setX(!x)}>toggleDialog</button>
            <Dialog visible={x}>
                hi
            </Dialog>
        </div>
    )
}

export default ButtonExample;