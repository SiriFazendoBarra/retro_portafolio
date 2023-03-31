import { NavLink } from "react-router-dom"

export default function Home() {
    return (
        <div className="container-fluid bg-dark" >
            <div className="container d-flex justify-content-between align-items-center flex-wrap">
                <h1 className="my-2 h2">Manuel's work</h1>
                <div className="d-flex gap-3">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>

            </div>

        </div>
    )
}