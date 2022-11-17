import { useEffect, useState } from "react";
import axios from "axios";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/comics");
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
      {data.results.map((comics, index) => {
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
  );
};

export default Comics;
