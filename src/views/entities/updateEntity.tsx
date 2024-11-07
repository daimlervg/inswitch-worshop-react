import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { editEntity, getEntityById } from "../../services/api";

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

// const handleChange = (e: any) => {
//   e.preventDefault();
//   const { name, value } = e.target;
//   setEntity({ ...entity, [name]: value });
// };

const handleInputChange = (e: any, fieldPath: string[]) => {
  const { value } = e.target;
  setEntity((prevData:  any) => {
    // Crea una copia de formData para no mutar directamente el estado anterior
    const updatedData = { ...prevData };
    let target = updatedData as any;

    // Recorre fieldPath para llegar al campo final y crea los niveles intermedios si no existen
    for (let i = 0; i < fieldPath.length - 1; i++) {
      const key = fieldPath[i];
      if (!(key in target) || typeof target[key] !== 'object') {
        target[key] = {};  // Crea un objeto vacío si el nivel no existe
      }
      target = target[key];
    }

    // Establece el valor en el último campo del path
    target[fieldPath[fieldPath.length - 1]] = value;
    return updatedData;
  });
};

const handelSubmit = async (event: any) => {
    event.preventDefault();
    editEntity(id, entity);
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
        <form className="py-1 px-4" onSubmit={handelSubmit}>
        <h2>Entity Information</h2>
        
        <div className="mb-3">
        <label className="form-label">First Name</label>
        <input
          type="text"
          name="firstName"
          className="form-control"
          defaultValue={entity?.name?.firstName ?? ''}
          onChange={(e) => handleInputChange(e, ['name', 'firstName'])}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Last Name</label>
        <input
          type="text"
          name="lastName"
          className="form-control"
          defaultValue={entity?.name?.lastName ?? ''}
          onChange={(e) => handleInputChange(e, ['name', 'lastName'])}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          className="form-control"
          defaultValue={entity?.contact?.phoneNumber ?? ''}
          onChange={(e) => handleInputChange(e, ['contact', 'phoneNumber'])}
        />
      </div>
 
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          defaultValue={entity?.contact?.email ?? ''}
          onChange={(e) => handleInputChange(e, ['contact', 'email'])}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Address Line 1</label>
        <input
          type="text"
          name="addressLine1"
          className="form-control"
          defaultValue={entity?.contact?.postalAddress?.addressLine1 ?? ''}
          onChange={(e) => handleInputChange(e, ['contact','postalAddress', 'addressLine1'])}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Address Line 2</label>
        <input
          type="text"
          name="addressLine2"
          className="form-control"
          defaultValue={entity?.contact?.postalAddress?.addressLine2 ?? ''}
          onChange={(e) => handleInputChange(e, ['contact','postalAddress', 'addressLine2'])}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">City</label>
        <input
          type="text"
          name="city"
          className="form-control"
          defaultValue={entity?.contact?.postalAddress?.city ?? ''}
          onChange={(e) => handleInputChange(e, ['postalAddress', 'city'])}
        />
      </div> 

      <div className="mb-3">
        <label className="form-label">State/Province</label>
        <input
          type="text"
          name="stateProvince"
          className="form-control"
          defaultValue={entity?.contact?.postalAddress?.stateProvince ?? ''}
          onChange={(e) => handleInputChange(e, ['postalAddress', 'stateProvince'])}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Postal Code</label>
        <input
          type="text"
          name="postalCode"
          className="form-control"
          defaultValue={entity?.contact?.postalAddress?.postalCode ?? ''}
          onChange={(e) => handleInputChange(e, ['postalAddress', 'postalCode'])}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Country</label>
        <input
          type="text"
          name="country"
          className="form-control"
          defaultValue={entity?.contact?.postalAddress?.country ?? ''}
          onChange={(e) => handleInputChange(e, ['postalAddress', 'country'])}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Date of Birth</label>
        <input
          type="date"
          name="dateOfBirth"
          className="form-control"
          defaultValue={entity?.dateOfBirth ?? ''}
          onChange={(e) => handleInputChange(e, ['dateOfBirth'])}
        />
      </div>

        <Link to={`/`} className="btn btn-light ms-2">Cancelar</Link>
        <button type="submit" className="btn btn-primary">Actualizar</button>
      </form>
    </>
    );
}