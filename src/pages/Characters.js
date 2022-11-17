import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/characters");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="main">
      {data.results.map((character, index) => {
        return (
          <Link to={`/CharacterdId/${character._id}`}>
            <div className="card-container" key={character._id}>
              <h3>{character.name}</h3>
              <img
                src={
                  character.thumbnail.path + "." + character.thumbnail.extension
                }
                alt="personnage"
              />

              {character.description && <p>{character.description}</p>}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Characters;
