import React, { useState, useEffect } from "react";

type weather = {
  date: Date;
  temperatureC: number;
  summary: string;
};

const ApiData: React.FC = () => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<weather[]>([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://localhost:44365/weatherforecast")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  console.log(items);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {`${new Date(item.date).toLocaleDateString()}: ${
              item.temperatureC
            }C - ${item.summary}`}
          </li>
        ))}
      </ul>
    );
  }
};

export { ApiData };
