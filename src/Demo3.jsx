import React, {useState} from 'react';

const styles = {
    container: {
        display: "flex",
        padding: "10px",
        justifyContent: "space-around"
    }
};

const Demo3 = ({name}) => {
    const [count, setCount] = useState(0);

    /**
    * We use this method to set the count
    * @param {string} type - the kind of operation, for instance "add" or "remove"
    */
    const calculation = (type) => {
        setCount(type === "add" ? count + 1 : count - 1)
    };

    return (
        <div style={styles.container}>
            <button onClick={() => calculation("add")}>
                    ADD
            </button>
            <button onClick={() => calculation("remove")}>
                    REMOVE
            </button>
                COUNT: {count}
        </div>
    )
}

export default Demo3;
