import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container">
            <button className="navbar-brand" href="#">Navbar</button>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <button className="nav-link active" aria-current="page" href="#">Home</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" href="#">Link</button>
                    </li>
                    <li className="nav-item dropdown">
                        <button className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </button>
                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item" href="#">Action</button></li>
                            <li><button className="dropdown-item" href="#">Another action</button></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><button className="dropdown-item" href="#">Something else here</button></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link disabled" aria-disabled="true">Disabled</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}
