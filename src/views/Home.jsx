import Card from '../components/Card'
import { useDataContext } from '../context/DataContext'

export default function Home() {

    const { portafolio } = useDataContext()

    return (
        <div className="container-fluid my-3 ">
            <div className="container d-flex flex-column gap-3">
                <p className='h2'>Portafolio</p>
                <section className='portafolioSection gap-3'>

                    {
                        portafolio.map((element) => {

                            return (
                                <Card key={element.title} element={element} />
                            )
                        })
                    }
                </section>
            </div>
        </div>
    )
}