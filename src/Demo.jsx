import React from 'react';

const Demo = ({ name }) => {
const array = [1,2,3,4,5];

const styles = {
    container: {
        display: "flex",
        justifyContent: "space-evenly",
        padding: "10px"
    }
};

/**
    add docstring
*/
function manipulateFunctionArray(arr) {
    console.log(arr);
    arr.push(7);
    console.log(arr);
    arr.pop();
    console.log(arr);
    const filtered = arr.filter(item => item === 2);
    console.log(filtered);
    return (
        console.log("FUNCTION")
    );
};

/**
    add docstring
*/
const manipulateArrowArray = (arr) => {
    console.log(arr);
    const newArr = arr.map(item => item * 2);
    console.log(newArr);
    const odd = arr.filter(item => item % 2 !== 0);
    console.log(odd + " dispari");
    const even = arr.filter(item => item % 2 == 0);
    console.log(even + " pari");
    const pippo = arr.shift();
    console.log(pippo + " pippo");
    console.log(arr);
    const removed = arr.splice(0, 1);
    console.log(removed + " removed");
    console.log(arr + " arr");
    const pippo3 = arr.find(item => item === 3);
    console.log(pippo3);
    const index = arr.findIndex(item => item === 4);
    console.log(index)
    return (
        console.log("ARROW")
    );
};

    return (
        <>
            <div style={{padding: "10px"}}>
                {`${name} PIPPO3`}
            </div>
            <div style={styles.container}>
                <button onClick={() => manipulateFunctionArray(array)}>
                    CLICK FUNCTION ARRAY
                </button>
                <button onClick={() => manipulateArrowArray(array)}>
                    CLICK ARROW ARRRAY
                </button>
            </div>
        </>
    )
}

export default Demo;
