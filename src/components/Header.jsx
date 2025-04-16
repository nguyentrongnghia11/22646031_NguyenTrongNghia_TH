import avt from "../assets/Lab_05/Avatar313.png";

function Header({ title }) {
    return (
        <div className="d-flex justify-content-between align-items-center mb-4 p-3 bg-white shadow-sm">

            <h1 className="h4 mb-0" style={{ color: "#f54983" }}> <b>{title}</b> </h1>


            <div className="d-flex align-items-center">

                <div className="input-group me-3" style={{ width: '200px' }}>
                    <span className="input-group-text bg-white border-end-0">
                        <i className="bi bi-search"></i>
                    </span>
                    <input
                        type="text"
                        className="form-control border-start-0"
                        placeholder="Search..."
                        aria-label="Search"
                    />
                </div>

                <button className="btn btn-link text-dark me-2">
                    <i className="bi bi-bell"></i>
                </button>

                <img
                    src={avt}
                    className="rounded-circle"
                    width="32"
                    height="32"
                    alt="User Avatar"
                />
            </div>
        </div>
    );
}

export default Header;