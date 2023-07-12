// import { useState, useEffect } from "react";
// import { useParams, Link, Outlet } from "react-router-dom";
// import { getMovieReviews } from "../../api/moviesAPI";
// import Loader from "../Loader";

// import {
//   StyledText,
//   StyledDetails,
//   StyledGenresTitle,
// } from "./MovieDetails.styled";
const Cast = () => {
//   const [reviews, setDetails] = useState({});
//   const [isLoaded, setIsLoaded] = useState(false);
//   const { movieId } = useParams();

//   useEffect(() => {
//     onGettingMoveDetails();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   const onGettingMoveDetails = async () => {
//     try {
//       const response = await getMovieReviews(movieId);
//       const resp = await response.data;
//       setDetails(resp);
//       console.log("reviews", reviews);
//       console.log("resp", resp);
//       setTimeout(() => {
//         if (Object.keys(reviews).length === 0) {
//           setIsLoaded(true);
//         }
//       }, 500);
//     } catch (e) {
//       console.log(e);
//     }
//   };

  return <div>cast</div>;
};

export default Cast;
