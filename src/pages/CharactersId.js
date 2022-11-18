import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";

const CharactersId = () => {
  const [data, setData] = useState();

  const [data2, setData2] = useState();
  const [isLoading2, setIsLoading2] = useState(true);
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://site--marvelbackend--c7br8w6v87r6.code.run/character/" + id
      );
      setData(response.data);
      console.log(response.data);
      //   setIsLoading(false);
    };
    fetchData();

    const fetchData2 = async () => {
      try {
        const response = await axios.get(
          "https://site--marvelbackend--c7br8w6v87r6.code.run/comics/" + id
        );
        setData2(response.data);
        setIsLoading2(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData2();
  }, [id]);

  return isLoading2 ? (
    <p>Loading ...</p>
  ) : (
    <div className="offer-container">
      <div>
        <div>
          <img
            className="imageC"
            src={data.thumbnail.path + "." + data.thumbnail.extension}
            alt="character"
          />
        </div>
        <h1 className="nameC"> {data.name}</h1>
        <div>
          <h2>{data.description}</h2>
        </div>

        <div className="offer-container2">
          {data2.results.map((comics, index) => {
            return (
              <div className="card-container" key={comics._id}>
                <h3>{comics.name}</h3>
                <img
                  src={comics.thumbnail.path + "." + comics.thumbnail.extension}
                  alt="bande"
                />

                {comics.description && <p>{comics.description}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CharactersId;
