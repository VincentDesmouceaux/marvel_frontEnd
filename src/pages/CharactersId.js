import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const CharactersId = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/character/" + id);
      //   setData(response.data);
      console.log(response.data);
      //   setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="offer-body">
      {/* <img
        className="offer-picture"
        src={character.thumbnail.path + "." + character.thumbnail.extension}
      /> */}
    </div>
  );
};

export default CharactersId;
