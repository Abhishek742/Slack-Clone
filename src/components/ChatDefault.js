import React from "react";
import { useStateValue } from "../StateProvider";
import './ChatDefault.css';
const ChatDefault = () =>{
    const [{user},dispatch] = useStateValue();
    return(
        <div className="default__chat__section">
            <div className="container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt='' />
                <h4>Logged in as {user?.displayName}</h4>
                <p>Start using by entering into a channel or by creating one!</p>
            </div>
        </div>
    )
}

export default ChatDefault;