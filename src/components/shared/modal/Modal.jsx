import { Link } from 'react-router-dom'
import './modal.css'
import { useState } from 'react'

function Modal() {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }
  return (
    <>
      <button onClick={toggleModal} className="btn">
        Yes
      </button>

      {modal &&   (

          <div className="overlay">
           <div className="modal">
             <div className="modal-content">
               
               <h2>
                 Would you like to be notified by email when your room is ready?
               </h2>
   
               <form className="checkbok-device">
                 <label className="checkbox-container">
                   <input type="checkbox" />
                   Yes
                 </label>
                 <h2>
                 Please collect laundry
               </h2>
                 <label className="checkbox-container">
                   <input type="checkbox" />
                   Yes
                 </label>
               
               <input className='mail-input' placeholder='enter your mail' type='mail'/>
   <Link to={"/cleaning-confirmation"}>  <button>Submit</button> </Link>
              
               </form>
   
   
               <p onClick={toggleModal} className="btn-close-modal">
                 X
               </p>
             </div>
           </div>
         </div>
)
     
      }

   
    </>
  )
}

export default Modal
