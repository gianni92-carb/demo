import React, {useState} from 'react';
import Switch from "@mui/material/Switch";

const styles = {
    container: {
        color: "blue"
    }
}

const arr = [1,2,3,4,5];
const obj1 = {
    name: "PIPPO",
    age: 35
}
const obj2 = {
    name: "ARTURO",
    age: 65
}
const list = [obj1, obj2]

const Test = ({}) => {
    const[checked, setChecked] = useState(true);

    const handle = (event) => {
        setChecked(event.target.checked);
    }
    /**
    * add docstring
    * @param {void}
    */
    const setArr = () => {
        arr.push(6);
        console.log(arr);
        arr.pop();
        console.log(arr);
        arr.map(item => item * 2);
        console.log(arr);
        const filtered = arr.filter(item => item === 1);
        console.log(filtered)
        const some = arr.some(item => item === 5);
        console.log(some + "some");
        const isNum = arr.every(item => typeof(item) === "number");
        console.log(isNum);
        console.log("setArr")
        const isInclude = arr.includes(9)
        for(let i = 0; i < arr.length; i++) console.log(arr[i])
        arr.forEach(item => console.log(item));
        console.log(isInclude);
    }

    /**
    * add docstring
    * @param {void}
    */
    const setObj = () => {
        const pippo = list.find(item => item.name === "PIPPO");
        console.log(pippo);
        const index = list.findIndex(item => item.name === "PIPPO");
        console.log(index);
        for (let key in obj1) {
            console.log(obj1[key]);
        }
        const keys = Object.keys(obj1);
        console.log(keys);
        console.log("setObj")
    }


return (
        <div>
            <div style={styles.container}>
                Test
            </div>
            <button onClick={setArr}>
                Click arr
            </button>
            <button onClick={setObj}>
                Click obj
            </button>
            <Switch
                checked={checked}
                onChange={handle}
            />
            {Object.keys(obj1).map(key => (
                <div>
                    {key}: {obj1[key]}
                </div>
            ))}
        </div>
    )
}

export default Test;
