import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = ({ search }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(
      `https://lereacteur-marvel-api.herokuapp.com/characters?name=${search}`
    );
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvelbackend--c7br8w6v87r6.code.run/characters?name=${search}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [search]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="main">
      {data.results.map((character, index) => {
        return (
          <Link to={`/character/${character._id}`}>
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
