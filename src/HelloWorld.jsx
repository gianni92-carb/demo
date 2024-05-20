import React, {useState} from "react";

const Title = ({title}) => {
    return (
        <div>
            {title}
        </div>
    )
}



const HelloWorld = ({classes})  => {
    const [subTitle, setSubTitle] = useState("HelloWorld");
    const obj = {
        key: "hello-id",
        status: true,
        title: "Title HelloWorld"
    };
    const list = ["1", "2","3"];
    /**
    * Doc string
    *
    */
    const setSubHeader = (event) => {
        setSubTitle("CIAO");
    }

    return (
        <>
            <Title
                title={obj.title}
            />
            {subTitle}
            <button onClick={(event) => setSubHeader(event)}>
                Click
            </button>
        </>
    )
};

export default HelloWorld;