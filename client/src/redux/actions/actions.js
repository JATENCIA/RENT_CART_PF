import axios from 'axios'
export const GET_ALL_CARS = "GET_ALL_CARS"
export const GET_CAR_BY_ID = "GET_CAR_BY_ID"
export const POST_CAR = "POST_CAR"
export const POST_ACCESSORIES = "POST_ACCESSORIES"
export const POST_USER = "POST_USER"
export const SEARCH = "SEARCH"
export const GET_ALL_ACCESSORIES = "GET_ALL_ACCESSORIES"
export const GET_ALL_BILLING = "GET_ALL_BILLING"
export const GET_ALL_CARREVIEW = "GET_ALL_CARREVIEW"
export const GET_ALL_ACCREVIEW = "GET_ALL_ACCREVIEW"
export const ACCESO = "ACCESO"
export const POST_BILLING = "POST_BILLING"
export const GET_ALL_USER = "GET_ALL_USER"
export const GET_AP_FILTER = "GET_AP_FILTER"

export const putCars = (payload) => async () => {
  const billCreated = await axios.put("http://localhost:3001/cars", payload);
  console.log(billCreated);
};

export const postBilling = (payload) => async () => {
  const billCreated = await axios.post(
    "http://localhost:3001/billing",
    payload
  );
  console.log(billCreated);
};

export function getAllAccReview() {
  try {
    return function (dispatch) {
      return fetch(`http://localhost:3001/reviewAccessories`)
        .then((response) => response.json())
        .then((json) => {
          dispatch({ type: "GET_ALL_ACCREVIEW", payload: json });
        });
    };
  } catch (e) {
    console.log(e);
  }
}

export function getAllBilling() {
  try {
    return function (dispatch) {
      return fetch(`http://localhost:3001/billing`)
        .then((response) => response.json())
        .then((json) => {
          dispatch({ type: "GET_ALL_BILLING", payload: json });
        });
    };
  } catch (e) {
    console.log(e);
  }
}

export function getAllCarReview() {
  try {
    return function (dispatch) {
      return fetch(`http://localhost:3001/review`)
        .then((response) => response.json())
        .then((json) => {
          dispatch({ type: "GET_ALL_CARREVIEW", payload: json });
        });
    };
  } catch (e) {
    console.log(e);
  }
}

export const acceso = (payload) => async (dispatch) => {
  try {
    const RutaMP = await axios.post("http://localhost:3001/payment", payload);
    return dispatch({
      type: "ACCESO",
      payload: RutaMP,
    });
  } catch (e) {
    console.log(e);
  }
};

export function getAllAccsessories() {
  try {
    return function (dispatch) {
      return fetch(`http://localhost:3001/accessories`)
        .then((response) => response.json())
        .then((json) => {
          dispatch({ type: "GET_ALL_ACCESSORIES", payload: json });
        });
    };
  } catch (e) {
    console.log(e);
  }
}

export const getAllCars = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:3001/cars");
    dispatch({
      type: "GET_ALL_CARS",
      payload: data,
    });
  } catch (e) {
    console.log(e);
  }
};
export const getAllUser = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:3001/users");
    dispatch({
      type: "GET_ALL_USER",
      payload: data,
    });
  } catch (e) {
    console.log(e);
  }
};
export const getCarById = (licensePlate) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3001/cars/${licensePlate}`
    );
    dispatch({
      type: "GET_CAR_BY_ID",
      payload: data,
    });
  } catch (e) {
    console.log(e);
  }
};

export const postCar = (payload) => async (dispatch) => {
  try {
    const carCreated = await axios.post("http://localhost:3001/cars", payload);
    return dispatch({
      type: "POST_CAR",
      payload: carCreated,
    });
  } catch (e) {
    console.log(e);
  }
};

export const postAccessories = (payload) => async (dispatch) => {
  try {
    const accessoriesCreated = await axios.post(
      "http://localhost:3001/accessories",
      payload
    );
    return dispatch({
      type: "POST_ACCESSORIES",
      payload: accessoriesCreated,
    });
  } catch (e) {
    console.log(e);
  }
};

export const postUser = (payload) => async (dispatch) => {
  try {
    const userCreated = await axios.post(
      `http://localhost:3001/users`,
      payload
    );
    return dispatch({
      type: "POST_USER",
      payload: userCreated,
    });
  } catch (e) {
    console.log(e);
  }
}

export const setSearch = (payload) => {
  return {
    type: "SEARCH",
    payload,
  };
};

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    console.log(error);
  }
}

export const getApFilter = (payload) => {
  return {
    type: "GET_AP_FILTER",
    payload: payload
  }
}