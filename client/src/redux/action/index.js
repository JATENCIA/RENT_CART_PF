
export function Cars() {
  return (dispatch) =>
    fetch(`http://localhost:3001/cars`)
      .then( (resp) => resp.json())
      .then((json) => {
        dispatch({
          type: "CARDS",
          payload: json,
        });
      });
}



