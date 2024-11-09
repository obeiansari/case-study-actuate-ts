import React from 'react'

const NavBar: React.FC = React.memo(() => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">ActuateMicroLearning</span>
            </div>
        </nav>
    )
})

export default NavBar