import axios from 'axios'
export const GET_ALL_CARS = "GET_ALL_CARS"
export const GET_CAR_BY_ID = "GET_CAR_BY_ID"
export const POST_CAR = "POST_CAR"
export const POST_ACCESSORIES = "POST_ACCESSORIES"
export const POST_USER = "POST_USER"
export const SEARCH = "SEARCH"
export const GET_ALL_ACCESSORIES = "GET_ALL_ACCESSORIES"
export const RESERVED = "RESERVED"




export function getAllAccsessories () {
  try {    
      return function (dispatch) {
        return fetch(`http://localhost:3001/accessories`)
          .then(response => response.json())
          .then(json => {
            console.log(json, "esteeee");
            dispatch({ type: "GET_ALL_ACCESSORIES", payload: json });
          });
      };
  } catch (e) {
    console.log(e)
  }
}

export const getAllCars = () => async (dispatch) => {
  try {
    const result = await axios.get("http://localhost:3001/cars")
    dispatch({
      type: "GET_ALL_CARS",
      payload: result.data
    })
  } catch (e) {
    console.log(e)
  }
}

export const getCarById = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:3001/cars/${id}`)
    dispatch({
      type: "GET_CAR_BY_ID",
      payload: data
    })
  } catch (e) {
    console.log(e)
  }
}

export const postCar = (payload) => async (dispatch) => {
  try {
    const carCreated = await axios.post("http://localhost:3001/cars", payload)
    return dispatch({
      type: "POST_CAR",
      payload: carCreated
    })

  } catch (e) {
    console.log(e)
  }
}

export const postAccessories = (payload) => async (dispatch) => {
  try {
    const accessoriesCreated = await axios.post("http://localhost:3001/accessories", payload)
    return dispatch({
      type: "POST_ACCESSORIES",
      payload: accessoriesCreated
    })
  } catch (e) {
    console.log(e)
  }
}

export const postUser = (payload) => async (dispatch) => {
  try {
    const userCreated = await axios.post("http://localhost:3001/users", payload)
    return dispatch({
      type: "POST_USER",
      payload: userCreated
    })
  } catch (e) {
    console.log(e)
  }

}

export const setSearch = (payload) => {
  return {
    type: "SEARCH",
    payload
  }
}

