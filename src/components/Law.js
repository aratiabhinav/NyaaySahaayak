import { Routes,Route, Link } from "react-router-dom";
import MyCarousel from "./MyCarousel";
import MySearch from "./MySearch";
import KeyFeatures from "../keywords/KeyFeatures";
import MyChatbot from "./chatB/Chat1";
const Law = () => {
    return ( 
        <>
         <MySearch/>
        <MyCarousel/>
        <div class="chat-width"> 
        <MyChatbot/>
        </div>
       <KeyFeatures/>
        <div>
             
            <p>&copy; 2023 Virtual Legal Assistant</p>
        
        </div>
        </>
     );
}
 
export default Law;