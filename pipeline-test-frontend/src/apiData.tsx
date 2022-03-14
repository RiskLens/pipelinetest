import React, { useState, useEffect } from "react";

export type weather = {
  date: Date;
  temperatureC: number;
  summary: string;
};

const ApiData: React.FC = () => {
  const [items, setItems] = useState<weather[]>([]);

  async function fetchData() {
    const response = await fetch("https://localhost:44365/weatherforecast");
    setItems(await response.json());
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!items) {
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
