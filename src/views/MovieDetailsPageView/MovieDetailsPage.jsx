import React from "react";

function MovieDetailsPage(props) {
  console.log(props);

  return (
    <div>
      <h1>Movie Details Page {props.value}</h1>
    </div>
  );
}

export default MovieDetailsPage;

// import React, { Component } from 'react'

// export class MovieDetailsPage extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Movie Details Page </h1>
//       </div>
//     )
//   }
// }

// export default MovieDetailsPage
