import React from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import './SidebarOption.css';
const SidebarOption = ({ Icon , title, id , addChannelOption }) =>{
  const navigate = useNavigate();  
  const addChannel = () =>{
    const channelName = prompt("Please enter channel name");
    if(channelName){
      db.collection('rooms').add({
        name:channelName,
      })
    }
  }
  const selectChannel = () =>{
    if(id){
      navigate(`/room/${id}`);
    }
    else{
      navigate(title);
    }
  }
  return(
        <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? (
              <h3>{title}</h3>
              ) : (
              <h3 className="sidebarOption__channel">
                <span className="sidebarOption__hash">#</span>{title}
              </h3>
              )}
        </div>
    )
}
export default SidebarOption;