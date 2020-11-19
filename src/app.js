import React from "react";
import Tooltip from "./components/tooltip/tooltip";
import "./app.scss";

export default function App() {
    return (
        <div className="root-container">
            <Tooltip label="This is tooltip text" direction="right">
                <div className="dummy-div">Hover on me!</div>
            </Tooltip>
        </div>
    );
}
