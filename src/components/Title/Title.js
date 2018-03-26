import React from "react";
import "./Title.css";

const Title = props =>
    <div className="card text-center">
        <h3 className="title card-header">{props.title}</h3>
        <h4>{props.msg}</h4>
        <div className="row">
            <div className="col-md-6">
                <h5>Score: {props.score}</h5>
            </div>
            <div className="col-md-6">
                <h5>Top Score: {props.topscore}</h5>
            </div>
        </div>
    </div>

export default Title;

// import React from "react";
// import "./Title.css";

// const Title = props =>
//  <ul className="nav nav-pills nav-justified">
//   <li className="title">{props.title}</li>
//   <li>{props.msg}</li>
//   <li>SCORE: {props.score} | TOP SCORE: {props.topscore}</li>
//  </ul>

// export default Title;

