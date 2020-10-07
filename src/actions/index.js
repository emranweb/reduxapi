import axios from "axios";

const fetchData = () => {
  return async function (dispatch) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({ type: "fetct-data", payload: response.data });
  };
};

export default fetchData;
