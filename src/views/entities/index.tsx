import useEntities from "../../hooks/useEntites";
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Entites(){
const [searchParams, setSearchParams] = useState({ status: '' });
const {entities, loading, error}: any = useEntities(searchParams);

const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
};

    return (
    <>
        <div className="container mt-2 p-20">
            <div className="card mb-4">
                <h5 className="card-header">Búsqueda</h5>
                <div className="card-body">
                    <form>
						<div className="row align-items-start">
							<div className="col">
								<div className="form-group">
									<label>Estado</label>
                                     <select
                                    name="status"
                                    className="form-select"
                                    value={searchParams?.status ?? ''}
                                    onChange={handleInputChange}
                                    >
                                    <option value=""></option>
                                    <option value="active">active</option>
                                    <option value="blocked">blocked</option>
                                    <option value="suspended">suspended</option>
                                    <option value="deleted">deleted</option>
                                    <option value="default">default</option>
                                    </select>
								</div>
							</div>
						</div>
					</form>
                </div>
            </div>
            {loading && <h1>Cargando...</h1>}
            {error && <h1>Error al cargar las entidades</h1>}
            <div className="table-responsive">
                <table id="myTable" className="table table-striped">
                    <thead>
                        <tr>
                            <th>Acciones</th>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Tipo</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                    {entities?.map((entity: any) => (
                            <tr key={entity.entityId}>
                                <td>
                                <Link to={`/update-entity/${entity.entityId}`} className="btn btn-warning btn-sm">
                                    Editar
                                </Link>
                                <Link to={`/delete-entity/${entity.entityId}`} className="btn btn-danger btn-sm m-1">
                                    Eliminar
                                </Link>
                                </td>
                                <td>{entity.entityId}</td>
                                <td>{entity.name.fullName}</td>
                                <td>{entity.contact.email}</td>
                                <td>{entity.entityType}</td>
                                <td>{entity.entityStatus}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>
    );
}