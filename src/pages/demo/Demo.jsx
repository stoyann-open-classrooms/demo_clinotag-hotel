import { Link } from 'react-router-dom'
import './demo.css'

function Demo() {
  return (
    <>
      <div className="container-demo">
        <div className="container-demo_title">
          <h1>Demo</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quam
            odit sit cupiditate nobis officia laboriosam omnis? Recusandae
            aspernatur nihil provident, animi quia dolorem atque, voluptatibus
            non ipsa voluptate excepturi?
          </p>
          <div className="btns-container">

         <Link to={"/make-room"}> <button>Make up room page</button></Link>
         <Link to={"/ask-cleaning"}> <button>Ask cleaning page</button></Link>
         <Link to={"/satisfaction"}> <button> Satisfation page</button></Link>
          </div>

        </div>
      </div>
    </>
  )
}

export default Demo
