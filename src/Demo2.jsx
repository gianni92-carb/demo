import React from 'react';

const obj1 = {
    name: "MARIO",
    age: "30",
    city: "ROMA"
}

const obj2 = {
    name: "M.JAKSON",
    age: "45",
    city: "LATINA"
}

const additionalInfo = {
    hobby: "dama",
    contry: "italy"
}

/**
    add docstring
*/
function setFuncObj (obj1, obj2) {
    const keys = Object.keys(obj1);
    console.log(keys);
    const val = Object.values(obj1);
    console.log(val);
    const entries = Object.entries(obj1);
    console.log(entries);
    obj1.person = "man";
    console.log(obj1)
    const hasName = obj1.hasOwnProperty("name")
    console.log(hasName)
    const personClone = Object.assign({}, obj1, additionalInfo);
    console.log(personClone);
    return(
        console.log("ciao")
    )
};

/**
    add docstring
*/
const setArrowObj = (obj1, obj2) => {
    const objList = [];
    objList.push(obj1, obj2);
    console.log(objList);
    for(let key in obj1) {
        console.log(key);
        console.log(obj1[key]);
    }
    objList.forEach((obj, index) => {
        console.log(obj);
        console.log(index);
    });

    for (let i = 0; i < objList.length; i++) {
    console.log("iteration");
        console.log(objList[i]);
    }
    return (
        console.log("ciao2")
    )
}

const Demo2 = ({name}) => {
    return (
        <>
            <div style={{padding: "10px"}}>
                {`${name} PIPPO4`}
            </div>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <button onClick={() => setFuncObj(obj1, obj2)}>
                    FUNCTION OBJECT
                </button>
                <button onClick={() => setArrowObj(obj1, obj2)}>
                    ARROW OBJECT
                </button>
                {Object.entries(obj1).map(([key, value]) => (
                    <div>
                        {key}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Demo2;
