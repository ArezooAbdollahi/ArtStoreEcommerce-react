import React, {useContext} from 'react';
import { useItems } from "./ItemsProvider";

import { UserContext } from "./UserProvider";

/*
export default function Details(props) {
   const { items } = useItems();
  const {  handleAddToCartClick } = useContext(UserContext);

    return (
        <div className="artmain">
    
        <ul className="items-list">
        {items.map((item) => (
        
       ind= item.getElementById("Rainy night in Paris")

        
          
          
      ))}
    </ul>
    </div>
       
    )
}
*/

import rain1 from './rainy_night/1.JPG';
import rain3 from './rainy_night/3.jpg';
import rain5 from './rainy_night/5.jpg';
import rain4 from './rainy_night/4.jpg';

export default function Details() {
    return (
        <> 
            <div></div>
            <div className="auth-form">
                <h1>Here are the different views of an image</h1>
                <p><img src={rain1} alt="Arezoo" width="300" height="300" align ="left" HSPACE="10" VSPACE="50" /> 
                <img src={rain3} alt="Arezoo" width="300" height="300" align ="left" HSPACE="10" VSPACE="50" /> 
                <img src={rain5} alt="Arezoo" width="300" height="300" align ="left" HSPACE="10" VSPACE="50" /> 
                <img src={rain4} alt="Arezoo" width="800" height="500" align ="left" HSPACE="10"  /> 

                </p>
                
            </div>
        </>
        
        
    )
}
