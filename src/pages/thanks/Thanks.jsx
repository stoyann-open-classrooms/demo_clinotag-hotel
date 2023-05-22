import logo from '../../assets/logo/logo_hotel.svg'
import './thanks.css'
function Thanks() {
  return (
    <div className='thanks-container'>
      <div className="container-img">
        <img src={logo} alt="" />
      </div>
      <h1>Thank you for sharing your opinion.</h1>
    </div>
  )
}

export default Thanks
