import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="img-thumbnail w3-hover-shadow">
    <img alt={props.name} src={props.image} onClick={() => props.scoreChange(props.image)} />
  </div>

);

export default FriendCard;
