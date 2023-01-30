// props: properties

import { Fragment } from "react";

const MyComponent = (props) => {

    return (
        <Fragment>
            <br/>THIS IS A CUSTOM COMPONENT
            <div>Hello, my name is {props.name}</div>
        </Fragment>
        
        
    );
};

MyComponent.defaultProps = {
    name: "DEFAULT_NAME"
}

export default MyComponent;