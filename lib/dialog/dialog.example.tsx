import React, { useState } from "react";
import Dialog,{alert,confirm,modal} from "./dialog";

const ButtonExample: React.FC = () => {
  const [x, setX] = useState(false);
  const [x2, setX2] = useState(false);
  const openModal = () => {
    const close = modal(<h1>你好<button onClick={()=>close()}>关闭</button></h1>)
  }
  return (
    <div>
      <div>
        <h1>example1</h1>
        <button onClick={() => setX(!x)}>toggleDialog</button>
        <Dialog
          visible={x}
          buttons={[<button>1</button>, <button>2</button>]}
          onClose={() => setX(false)}
        >
          <strong>hi</strong>
        </Dialog>
      </div>
      <div>
        <h1>example2</h1>
        <button onClick={() => setX2(!x2)}>toggleDialog</button>
        <Dialog
          visible={x2}
          closeOnClickMask={true}
          buttons={[<button>122</button>, <button>233</button>]}
          onClose={() => setX2(false)}
        >
          <strong>hi2</strong>
        </Dialog>
      </div>
      <div>
         <h1>example3</h1>
         <button onClick={()=>alert('hi')}>alert</button>
      </div>
        <div>
            <h1>example4</h1>
            <button onClick={()=>confirm('1',()=>{
                console.log('你点击了yes');
            },()=>{
                console.log('你点击了no');
            })}>confirm</button>
        </div>
        <div>
            <h1>example5</h1>
            <button onClick={openModal}>modal</button>
        </div>

    </div>
  );
};

export default ButtonExample;
