import { useState, useEffect } from "react";

export default function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

    fetch(url)
      .then((result) => result.json())
      .then((jsonRes) => setData(jsonRes[currency]));
  }, [currency]);

  console.log(data);
  return data;
}
