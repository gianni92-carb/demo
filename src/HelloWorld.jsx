import React, {useState} from "react";
import Switch from "@mui/material/Switch";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Title = ({title}) => {
    return (
        <div>
            {title}
        </div>
    )
}



const HelloWorld = ({classes})  => {
    const [subTitle, setSubTitle] = useState("HelloWorld");
    const [checked, setChecked] = useState(true);
    const obj = {
        key: "hello-id",
        status: true,
        title: "Title HelloWorld"
    };

    const handleChange = (event) => {
        setChecked(event.target.checked);
    }

    const KeyObj = Object.keys(obj),
    valueOjb = Object.values(obj);
    const list = ["1", "2","3"];
    /**
    * Doc string
    *
    */
    const setList = (list) => {
        const newList = list.map(item => item * 2);
        console.log(newList);
    }
    setList(list);

    /**
    * Doc string
    *
    */
    const setSubHeader = (event) => {
        setSubTitle("CIAO");
    }

    return (
        <>
        {Object.entries(obj).map(([key, value], index) => (
        <React.Fragment key={key}>
            <div>Key: {key}</div>
            <div>Value: {value}</div>
            <div>Index: {index}</div>
        </React.Fragment>
        ))}
            <Title
                title={obj.title}
            />
            {subTitle}
            <button onClick={(event) => setSubHeader(event)}>
                Click
            </button>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            <ArrowForwardIcon/>
        </>
    )
};

export default HelloWorld;