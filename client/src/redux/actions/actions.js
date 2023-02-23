import axios from 'axios'
export const GET_ALL_CARS = "GET_ALL_CARS"
export const GET_CAR_BY_ID = "GET_CAR_BY_ID"
export const POST_CAR = "POST_CAR"
export const POST_ACCESSORIES = "POST_ACCESSORIES"
export const POST_USER = "POST_USER"
export const SEARCH = "SEARCH"
export const GET_ALL_ACCESSORIES = "GET_ALL_ACCESSORIES"
export const ACCESO = "ACCESO"


//export function acceso(obj) { // guardar acceso
  export const acceso = (payload) => async (dispatch) => {
    try {    
      const RutaMP = await axios.post("http://localhost:3001/payment", payload)
      return dispatch({
        type: "ACCESO",
        payload: RutaMP
      })

      
  
    } catch (e) {
      console.log(e)
    }
  }

export function getAllAccsessories () {
  try {    
      return function (dispatch) {
        return fetch(`http://localhost:3001/accessories`)
          .then(response => response.json())
          .then(json => {
            dispatch({ type: "GET_ALL_ACCESSORIES", payload: json });
          });
      };
  } catch (e) {
    console.log(e)
  }
}

export const getAllCars = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:3001/cars")
    dispatch({
      type: "GET_ALL_CARS",
      payload: data
    })
  } catch (e) {
    console.log(e)
  }
}

export const getCarById = (licensePlate) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:3001/cars/${licensePlate}`)
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
    const userCreated = await axios.post(`http://localhost:3001/users`, payload)
    return dispatch({
      type: "POST_USER",
      payload: userCreated
    })
  } catch (e) {
    console.log(e)
  }
}
// export const postUserLogin = (payload) => async (dispatch) => {
//   try {
//     const loginUser = await axios.post(`http://localhost:3001/users/loading`, payload)
//     return dispatch({
//       type: "POST_USER_LOGIN",
//       payload: loginUser
//     })
//   } catch (e) {
//     console.log(e)
//   }
// }

export function setSearch(location){
  return async function (dispatch){
      try{
          var json = await axios.get(`http://localhost:3001/cars/${location}`);
          return dispatch ({
              type: SEARCH,
              payload: json.data
          })
      } catch (error){
          console.log(error)
      }
  }
}

