import React, { useState } from "react";
import Dialog from "./dialog";

const ButtonExample: React.FC = () => {
  const [x, setX] = useState(false);
  const [x2, setX2] = useState(false);
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
    </div>
  );
};

export default ButtonExample;
