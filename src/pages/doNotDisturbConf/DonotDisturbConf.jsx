import notDisturb from '../../assets/image/do-not-disturb.jpg'
import './doNotDisturb.css'
function DonotDisturbConf() {
  return (
    <div>

        <div className="image-container">
            <img src={notDisturb} alt="" />
        </div>
        <h1 className='txt'>
        You requested not to be disturbed. You can scan the QR code again to request that a staff member comes to clean your room.
        </h1>
    </div>
  )
}

export default DonotDisturbConf