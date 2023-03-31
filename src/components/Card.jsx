export default function Card() {
    return (
        <div className="bg-primary text-black nes-container with-title">
            <h3 className="title bg-primary">Lorem ipsum dolor sit amet.</h3>
            <img className="card-img" src="https://d33wubrfki0l68.cloudfront.net/641dda4e8bdd9115fc92acbe/screenshot_2023-03-24-17-13-53-0000.png" alt="pic" />
            <div className="card-body my-2">
                <p className="card-text m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, iusto.</p>
                <i className="nes-icon github is-medium"></i>
            </div>
        </div>
    )
}