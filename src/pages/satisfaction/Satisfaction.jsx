import './satisfaction.css'
import not1 from '../../assets/icone/satisfaction/note_1.svg'
import not2 from '../../assets/icone/satisfaction/note_2.svg'
import not3 from '../../assets/icone/satisfaction/note_3.svg'
import not4 from '../../assets/icone/satisfaction/note_4.svg'
import not5 from '../../assets/icone/satisfaction/note_5.svg'
import { Link } from 'react-router-dom'
function Satisfaction() {
  return (
    <div className="satisfaction-container">
        <h1>
        Your opinion matters, please rate the cleanliness of the restaurant's restrooms.
        </h1>

        <div className="icone-container">
          <Link to={'/thanks'}>
            <button> <img src={not1} alt="" /></button>
          </Link>
          <Link to={'/thanks'}>
            <button> <img src={not2} alt="" /></button>
          </Link>
          <Link to={'/thanks'}>
            <button> <img src={not3} alt="" /></button>
          </Link>
          <Link to={'/thanks'}>
            <button> <img src={not4} alt="" /></button>
          </Link>
          <Link to={'/thanks'}>
            <button> <img src={not5} alt="" /></button>
          </Link>
      
        </div>
    </div>
  )
}

export default Satisfaction