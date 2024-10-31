import useEntities from "../../hooks/useEntites";
import 'bootstrap/dist/css/bootstrap.css'

export default function Entites(){
const {entities, loading, error}: any = useEntities();

    return (
        <div className="container mt-5 p-20">
            {loading && <h1>Cargando...</h1>}
            {error && <h1>Error al cargar las entidades</h1>}
            <div className="table-responsive">
                <table id="myTable" className="table table-striped">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Entity Type</th>
                            <th>Entity Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                 {entities?.map((entity: any) => (
                            <tr key={entity.entityId}>
                                <td>{entity.name.fullName}</td>
                                <td>{entity.contact.email}</td>
                                <td>{entity.entityType}</td>
                                <td>{entity.entityStatus}</td>
                                <td>
                                <button onClick={() => alert("Under construction...")}>Editar</button>
                                </td>
                            </tr>
                        ))}
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
}