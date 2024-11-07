import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { deleteEntity, getEntityById } from "../../services/api";

export default function UpdateEntity(){
const navigate = useNavigate();
const params  = useParams<{ id: string }>();;
const id = Number(params.id);
const [entity, setEntity]: any = useState({
  name: {
    firstName: "",
    lastName: "",
    fullName: ""
  },
  contact: {
    phoneNumber: "",
    email: "",
    postalAddress: {
      addressLine1: "",
      addressLine2: "",
      city: "",
      stateProvince:"",
      postalCode: "",
      country: ""
    }
  },
  idDocuments: [
    {
      idType: "",
      idNumber: "",
      issueDate: "",
      expiryDate: "",
      issuerCountry: ""
    }
  ],
  dateOfBirth: "",
  birthCountry: "",
  nationality: "",
  residenceCountry: "",
  gender: "",
  entityType: ""
});

const handelSubmit = async (event: any) => {
    event.preventDefault();
    deleteEntity(id);
    navigate('/');
};

useEffect(() => {
  getEntityById(id)
  .catch((error) =>{
    console.log(error);
  })
  .then((response) => {
    setEntity(response?.data);
  });  
}, []);

    return (
      <>
        <div className="alert alert-danger mx-4 my-3" role="alert">
        ¿Esta seguro que desea eliminar la entidad Id: {id}?
        </div>
         <form className="py-1 px-4" onSubmit={handelSubmit}>
          <h2>Entity Information</h2>
          
          <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            value={entity?.name?.firstName ?? ''}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            value={entity?.name?.lastName ?? ''}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            className="form-control"
            value={entity?.contact?.phoneNumber ?? ''}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={entity?.contact?.email ?? ''}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Address Line 1</label>
          <input
            type="text"
            name="addressLine1"
            className="form-control"
            value={entity?.contact?.postalAddress?.addressLine1 ?? ''}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Address Line 2</label>
          <input
            type="text"
            name="addressLine2"
            className="form-control"
            value={entity?.contact?.postalAddress?.addressLine2 ?? ''}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">City</label>
          <input
            type="text"
            name="city"
            className="form-control"
            value={entity?.contact?.postalAddress?.city ?? ''}
            readOnly
          />
        </div> 

        <div className="mb-3">
          <label className="form-label">State/Province</label>
          <input
            type="text"
            name="stateProvince"
            className="form-control"
            value={entity?.contact?.postalAddress?.stateProvince ?? ''}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            className="form-control"
            value={entity?.contact?.postalAddress?.postalCode ?? ''}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Country</label>
          <input
            type="text"
            name="country"
            className="form-control"
            value={entity?.contact?.postalAddress?.country ?? ''}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            className="form-control"
            value={entity?.dateOfBirth ?? ''}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select
            name="gender"
            className="form-select"
            value={entity?.gender ?? ''}
          >
            <option value="m" disabled>Male</option>
            <option value="f" disabled>Female</option>
          </select>
        </div>
            <Link to={`/`} className="btn btn-light ms-2">Cancelar</Link>
            <button type="submit" className="btn btn-danger">Eliminar</button>
        </form>
      </>
    );
}