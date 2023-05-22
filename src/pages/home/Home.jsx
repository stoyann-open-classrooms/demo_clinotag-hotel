import './home.css'
import Hero from '../../components/hero/Hero'
import Modal from '../../components/shared/modal/Modal'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Hero />
      <div className="home-content-container">
        <div className="home-content-container_title">
          <h1>Make up Room</h1>
          <h2>1004</h2>
        </div>
        <div className="home-content-container_btn-container">
          <Modal />

          <Link to={'/do-not-disturb-confirmation'}>
            <button className="btn btn-danger">Do not disturb</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
