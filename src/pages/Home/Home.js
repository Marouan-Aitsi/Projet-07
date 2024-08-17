import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import logements from '../../datas/logements.json'
import './Home.css'

function Home() {
      return (
            <div>
                  <Banner />
                  <div className='list'>
                        {logements.map(({ id, cover, title }) => (
                              <Card
                                    key={id}
                                    id={id}
                                    cover={cover}
                                    title={title}
                              />
                        ))}
                  </div>
            </div>
      )
}

export default Home