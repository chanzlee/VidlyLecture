import React from "react";

//Input like: boolean
//Output raise Onclick event

const Like = props => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Like;

// class Like extends Component {
//   render() {
//     let classes = "fa fa-heart";
//     if (!this.props.liked) classes += "-o";
//     return (
//       <i
//         style={{ cursor: "pointer" }}
//         onClick={this.props.onClick}
//         className={classes}
//         aria-hidden="true"
//       />
//     );
//   }
// }

// export default Like;
