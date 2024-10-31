import useEntities from "../../hooks/useEntites";
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from "react";
import {useNavigate } from "react-router-dom";
import { addEntity } from "../../services/api";

export default function CreateEntity(){
const navigate = useNavigate();
    useEntities();
const [entity, setEntity] = useState({
    name: {
      firstName: "John",
      lastName: "Wick",
      fullName: "John Wick"
    },
    contact: {
      phoneNumber: "50511111111",
      email: "user@example.com",
      postalAddress: {
        addressLine1: "Calle 1",
        addressLine2: "Calle 2",
        city: "Managua",
        stateProvince: "Managua",
        postalCode: "11300",
        country: "NI"
      }
    },
    idDocuments: [
      {
        idType: "nationalId",
        idNumber: "7890658",
        issueDate: "2023-04-18",
        expiryDate: "2033-04-18",
        issuerCountry: "NI"
      }
    ],
    dateOfBirth: "1980-02-22",
    birthCountry: "NI",
    nationality: "NI",
    residenceCountry: "NI",
    gender: "m",
    entityType: "naturalPerson"
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setEntity(prevEntity => ({
      ...prevEntity,
      [name]: value
    }));
  };

  const handelSubmit = async (event: any) => {
    event.preventDefault();
    console.log(entity)
    //addEntity(entity) TODO: Fix error
    navigate('/');
}

    return (
        <form className="p-4" onSubmit={handelSubmit}>
        <h2>Entity Information</h2>
        
        <div className="mb-3">
        <label className="form-label">First Name</label>
        <input
          type="text"
          name="firstName"
          className="form-control"
          value={entity.name.firstName}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Last Name</label>
        <input
          type="text"
          name="lastName"
          className="form-control"
          value={entity.name.lastName}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          className="form-control"
          value={entity.contact.phoneNumber}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={entity.contact.email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Address Line 1</label>
        <input
          type="text"
          name="addressLine1"
          className="form-control"
          value={entity.contact.postalAddress.addressLine1}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Address Line 2</label>
        <input
          type="text"
          name="addressLine2"
          className="form-control"
          value={entity.contact.postalAddress.addressLine2}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">City</label>
        <input
          type="text"
          name="city"
          className="form-control"
          value={entity.contact.postalAddress.city}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">State/Province</label>
        <input
          type="text"
          name="stateProvince"
          className="form-control"
          value={entity.contact.postalAddress.stateProvince}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Postal Code</label>
        <input
          type="text"
          name="postalCode"
          className="form-control"
          value={entity.contact.postalAddress.postalCode}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Country</label>
        <input
          type="text"
          name="country"
          className="form-control"
          value={entity.contact.postalAddress.country}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Date of Birth</label>
        <input
          type="date"
          name="dateOfBirth"
          className="form-control"
          value={entity.dateOfBirth}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Gender</label>
        <select
          name="gender"
          className="form-select"
          value={entity.gender}
          onChange={handleChange}
        >
          <option value="m">Male</option>
          <option value="f">Female</option>
        </select>
      </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        
    );
}