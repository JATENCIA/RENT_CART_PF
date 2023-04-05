import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUser, updateUser } from "../../redux/actions/actions";
import Swal from "sweetalert2";

function MyDates() {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const usersDB = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  if (isAuthenticated && usersDB.data.length > 0) {
    var usuario = usersDB.data.find((e) => e.eMail === user.email);
  }
  let id = usuario._id;

  const initialState = {
    name: "" || usuario.name,
    lastName: "" || usuario.lastName,
    eMail: "" || usuario.eMail,
    dni: "" || usuario.dni,
    telephone: "" || usuario.telephone,
    location: "" || usuario.location,
    kindOfPerson: "" || usuario.kindOfPerson,
  };
  const [input, setInput] = useState(initialState);
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const newInfo = {
      name: input.name,
      lastName: input.lastName,
      dni: input.dni,
      telephone: input.telephone,
      location: input.location,
      kindOfPerson: input.kindOfPerson,
      roll: "user",
    };
    dispatch(updateUser(id, newInfo));
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your profile has been updated",
      showConfirmButton: false,
      timer: 3000,
    });
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div className="md:col-span-1"></div>
            <div className=" md:col-span-2 md:mt-0">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <h1 className="block text-xl font-bold text-secondcolor mb-8">
                      Personal Information
                    </h1>

                    <p className="mb-3 text-red-600 font-bold">
                      If necessary you can update your data
                    </p>

                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-900"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="mt-1 block w-full rounded-md border-solid border-2 border-gray focus:ring-indigo-500 sm:text-md h-10 bg-white"
                          placeholder="First-Name"
                          value={input.name}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last-Name"
                          value={input.lastName}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                          className=" bg-white mt-1 block w-full rounded-md border-solid border-2 border-gray focus:ring-indigo-500 sm:text-md h-10"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <input
                          type="text"
                          name="eMail"
                          className="mt-1 block w-full rounded-md border-solid border-2 border-gray focus:ring-indigo-500 sm:text-md h-10  bg-white"
                          value={usuario.eMail}
                          disabled="true"
                          onChange={(e) => {
                            handleChange(e);
                          }}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="postal-code"
                          className="block text-sm font-medium text-gray-700"
                        >
                          DNI
                        </label>
                        <input
                          type="text"
                          name="dni"
                          placeholder=" DNI"
                          value={input.dni}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                          className="mt-1 block w-full rounded-md border-solid border-2 border-gray focus:ring-indigo-500 sm:text-md h-10  bg-white"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          kindOfPerson
                        </label>
                        <select
                          name="kindOfPerson"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                          <option value="natural">natural</option>
                          <option value="business">business</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Location
                        </label>
                        <input
                          type="text"
                          name="location"
                          placeholder="Location"
                          value={input.location}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                          className="  bg-white mt-1 block w-full rounded-md border-solid border-2 border-gray focus:ring-indigo-500 sm:text-md h-10"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="postal-code"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Telephone
                        </label>
                        <input
                          type="text"
                          name="telephone"
                          placeholder="Telephone"
                          value={input.telephone}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                          className=" bg-white mt-1 block w-full rounded-md border-solid border-2 border-gray focus:ring-indigo-500 sm:text-md h-10"
                        />
                        <button
                          type="submit"
                          className=" mt-3 inline-flex justify-center rounded-md border border-transparent bg-secondcolor py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-secondcolor focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Update my data
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyDates;
