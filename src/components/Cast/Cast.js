import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../api/moviesAPI";
import Loader from "../Loader";
import { StyledList, StyledItem, StyledImg, StyledText } from "./Cast.styled";
import defaultImage from "../../image/defaultImage.png";

const Cast = () => {
  const [cast, setDetails] = useState({});
  const [isLoadedCast, setIsLoadedCast] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    onGettingMoveDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onGettingMoveDetails = async () => {
    try {
      const response = await getMovieCast(movieId);
      const resp = await response;
      setDetails(resp.data.cast);
      console.log("resp.data", resp.data);
      setTimeout(() => {
        if (Object.keys(cast).length === 0) {
          setIsLoadedCast(true);
        }
      }, 500);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {!isLoadedCast && <Loader />}

      {isLoadedCast && (
        <>
          {cast.length ? (
            <StyledList>
              {cast.map(({ id, name, profile_path, character }) => {
                return (
                  <StyledItem key={id}>
                    {profile_path ? (
                      <StyledImg
                        src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                        alt={name}
                        width="100"
                      />
                    ) : (
                      <StyledImg
                        src={`${defaultImage}`}
                        alt={name}
                        width="120"
                        height="150"
                      />
                    )}
                    <StyledText>{name}</StyledText>
                    <StyledText>Character: {character}</StyledText>
                  </StyledItem>
                );
              })}
            </StyledList>
          ) : (
            <p>We don't have any cast information for this movie</p>
          )}
        </>
      )}
    </div>
  );
};

export default Cast;
