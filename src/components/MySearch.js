import { Link } from "react-router-dom";

const MySearch = () => {
   
    

    return ( 
        <div>
                        <section class="hero">
                <h2 style={{marginTop:'120px'}}>Welcome to Our Nyaay Sahaayak Platform</h2>
                <p class="pad">We're here to help you with your legal needs.</p>
                <div id="search" class = "search">
                    {/* <input type="text" id="search-input" placeholder="Search..." class="search1">
                        </input>
                    <button id="search-button" class=" cta-button pad1">Search</button> */}
                   
        <input type="text" placeholder="Search..." class="button1">
          </input>
        <button type="submit"  class="button">Search</button>
                    <Link to="/chatbot" style={{color:"white"}}><button class="cta-button pad1">Help</button></Link>

                </div>

               <div>
                <div id="google_translate_element"></div>
                
                    
                    
                
                </div>
                {/* <div id="language-selector" class="search3">
                    <label for="language-dropdown" class="pad1">Select Language:</label>
                    <select id="language-dropdown" class="search4">
                        <option value="en">English</option>
                        <option value="te">Telugu</option>
                        <option value="hi">Hindi</option>
                        <option value="mr">Marathi</option>
                        <option value="ta">Tamil</option>
                        <option value="kn">Kannada</option>
                    </select> 
                </div> */}
               </section>
        </div>
     );
}
 
export default MySearch;