import Carousel from 'react-bootstrap/Carousel'
import Card from '../components/Card'
import { useDataContext } from '../context/DataContext'

export default function Home() {

    const { portafolio } = useDataContext()
    const index = 0;
    return (
        <div className="container-fluid page ">
            <div className="container d-flex flex-column gap-3">
                <p className='h2'>Portafolio</p>
                <div className='carousel slide'>
                    <div className="carousel-inner">
                        <div className="carousel-item active d-flex">
                            {portafolio.map((element) => {
                                return (

                                    <div className="cards-wrapper">
                                        <Card key={element.title} element={element} />
                                    </div>

                                )
                            })
                            }
                            <div className="cards-wrapper">
                            </div>
                        </div>
                        {portafolio.map((element) => {
                            return (
                                <div className='carousel-item'>
                                    <div className="cards-wrapper">
                                        <Card key={element.title} element={element} />
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>



                </div>
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