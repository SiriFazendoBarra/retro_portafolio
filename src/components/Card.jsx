export default function Card({ element }) {
    console.log(element.repo)
    return (
        <div className="cards d-flex flex-column justify-content-between bg-primary text-black nes-container with-title">
            <h3 className="title bg-primary">{element.title}</h3>
            <img className="card-img" src="https://d33wubrfki0l68.cloudfront.net/641dda4e8bdd9115fc92acbe/screenshot_2023-03-24-17-13-53-0000.png" alt="pic" />
            <div className="card-body d-flex flex-column justify-content-between my-2">
                <p className="card-text m-0">{element.descr}</p>
                <div className="d-flex justify-content-between">
                    <a href={element.repo} target="_blank"><i className="nes-icon github is-medium"></i></a>
                    <a type='button' class="text-decoration-none nes-btn is-primary" href={element.deploy} target="_blank">Deploy</a>
                </div>
            </div>
        </div>
    )
}