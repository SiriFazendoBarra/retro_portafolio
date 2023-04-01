export default function Card({ element }) {
    console.log(element.img)
    return (
        <div className="cards d-flex flex-column justify-content-between bg-primary text-black nes-container with-title">
            <h3 className="title bg-primary">{element.title}</h3>
            <img className="card-img" src={element.img} alt="pic" />
            <div className="card-body d-flex flex-column justify-content-between my-2">
                <div>
                    <p className="card-date mb-2 text-end">{element.date}</p>
                    <p className="card-text m-0">{element.descr}</p>
                </div>

                <div className="d-flex justify-content-between">
                    <a href={element.repo} target="_blank"><i className="nes-icon github is-medium"></i></a>
                    <a className="text-decoration-none nes-btn is-primary" href={element.deploy} target="_blank">Deploy</a>
                </div>
            </div>
        </div>
    )
}
