import React, { useContext } from 'react'
import { AppContext } from '../contextApi/Products';
import Loadcomponent from '../Component/Loadcomponent';
import '../CSS/FeatureProduct.css';
import { Link } from 'react-router-dom';

function FeatureProduct() {
    const anmol = useContext(AppContext);
    const {start,loading,setId,singleproduct} = anmol.statemanagement;
    const featureproduct = start.filter((item) => {
        return item.featured === true;
    });
    function ClickHandler(id) {
        setId(id);
    }
  return (
    <div>
        <h1>FeatureProduct</h1>
        <div className="container ">
            <div className="row loading">
                {
                    loading ? <div id='aman'><Loadcomponent/></div> : 
                    featureproduct.map((item) => {
                        return (
                            <div className="col-md-4" 
                             onClick={() => ClickHandler(item.id)}
                             key={item.id}>
                                <div className="image">
                                <Link to = '/harsh'>
                                    <img  src={item.image} alt="product" className="img-fluid" />
                                    </Link>
                                    <div className="name">
                                        <span>{item.category} </span><br /><span className='abhay'>RS:{item.price}</span> 
                                    </div>
                                </div>
                                   
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
  }
export default FeatureProduct;
            
