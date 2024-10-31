import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">Entities</a>
            <form className="form-inline my-2 my-lg-0">
                <Link className="btn btn-outline-success my-2 my-sm-0" to="create-entity">
                  New
                </Link>
            </form>
            </div>
        </nav>
       
    </div>
  );
}