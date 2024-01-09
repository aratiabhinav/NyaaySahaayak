import { Link } from "react-router-dom";

const MyNav = () => {
    return (
        <>
       <header class="fixed-top">
            <h >NYAAY SAHAAYAK</h>
        </header>
        
        <nav  class="navbar navbar-expand-sm navbar-light fixed-top" style={{backgroundColor: 'white',textAlign:"left",marginTop:"55px"}}>
            <Link class="navbar-brand" to="#"></Link>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul align="center" class="navbar-nav me-auto mt-2 mt-lg-0"style={{backgroundColor:'white'}}>
                    <li class="nav-item" style={{margin:"0 5vw"}}>
                        <Link class="nav-link active" to="/" aria-current="page">Home <span class="visually-hidden">(current)</span></Link>
                    </li>


                    <li class="nav-item" style={{margin:"0 5vw"}}>
                        <Link class="nav-link active" to="/serv">FAQs</Link>
                    </li>
                    <li class="nav-item" style={{margin:"0 5vw"}}>
                        <Link class="nav-link active" to="/serv">Services</Link>
                    </li>
                    <li class="nav-item" style={{margin:"0 5vw",paddingRight:"20px",paddingLeft:"20px"}}>
                        <Link class="nav-link active" to="/about">About Us</Link>
                    </li>
                    <li class="nav-item" style={{margin:"0 5vw"}}>
                        <Link class="nav-link active" to="/contact">Contact Us</Link>
                    </li>
                    <li class="nav-item"style={{margin:"0 5vw"}}>
                        <Link class="nav-link active" to="/login">login</Link>
                    </li>
                   
                </ul>
            </div>
        </nav>
        
        
        
        
       
        









        {/* <nav>
            <ul>
                <li class="pad1"><Link to="/">Home</Link></li>
                <li class="pad1"><Link to="/serv">Services</Link></li>
                <li class="pad1"><Link to="/about">About Us</Link></li>
                <li class="pad1"><Link to="/contact">Contact</Link></li>
            </ul>
        </nav> */}
        </>
      );
}
 
export default MyNav ;