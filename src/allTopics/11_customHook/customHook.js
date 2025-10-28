import { useEffect, useState } from "react";

export function useApi(apiUrl) {
  let [state, setState] = useState(null);
  
  useEffect(() => {
    async function getApiData() {
      let resp = await fetch(apiUrl);
      let data = await resp.json();
      setState(data);
    }
    getApiData();
  }, []);

  return state;
}
