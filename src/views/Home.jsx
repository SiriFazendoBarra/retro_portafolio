import Card from '../components/Card'
import { useDataContext } from '../context/DataContext'

export default function Home() {

    const { data } = useDataContext()

    return (
        <div className="container-fluid my-3 ">
            <div className="container d-flex flex-column gap-3">
                <p className='h2'>Portafolio</p>
                <section className='portafolioSection'>
                    <Card data={data} />

                </section>
            </div>
        </div>
    )
}