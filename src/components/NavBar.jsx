import { NavLink } from "react-router-dom"

export default function Home() {
    return (
        <div className="container-fluid bg-primary" >
            <div className="container d-flex justify-content-between align-items-center flex-wrap">
                <h1 className="my-2 h2">Manuel's work</h1>
                <div className="d-flex gap-3">
                    <NavLink className="text-white text-decoration-none" to="/">Home</NavLink>
                    <NavLink className="text-white text-decoration-none" to="/about">About</NavLink>
                </div>

            </div>

        </div>
    )
}