import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
    const [steps,setSteps] = useState(0);
    const increasesteps = () =>{
        const nextsteps = steps + 1;
        //asynchronous
        setSteps(nextsteps)
    }
    useEffect(() => {
          console.log(steps)
    },[steps])
    return (
        //stateful(nijer moddhe state ase. kono jinis maintain kore)
        <div style={{border: '2px solid red', margin: '10px'}}>
            <h2>This is my smart watch</h2>
            <p>Steps: {steps}</p>
            <button onClick={increasesteps}>De Dour......</button>
            <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;