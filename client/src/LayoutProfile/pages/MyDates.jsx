import React from "react";
function MyDates() {
  return (
    <div className="flex flex-col">
      <p>User data</p>
      
      <form>
        <div>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div>
          <label>LastName</label>
          <input type="text" placeholder="Enter your lastName" />
        </div>
        <div>
          <label>DNI</label>
          <input type="text" placeholder="Enter your DNI" />
        </div>
        <div>
          <label>Email</label>
          <input type="text" placeholder="Enter your email" />
        </div>
        <div>
          <label>Phone</label>
          <input type="text" placeholder="Enter your phone" />
        </div>
        <div>
          <label>Location</label>
          <input type="text" placeholder="Enter your location" />
        </div>
        <div>
          <label>kindOfPerson:</label>
          <input type="text" placeholder="Enter your kindOfPerson" />
        </div>
      </form>
    </div>
  );
}

export default MyDates;
