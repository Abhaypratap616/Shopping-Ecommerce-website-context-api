 import React,{ useContext }  from 'react'
import{Filtercontext} from '../contextApi/Filter'
import{Link} from 'react-router-dom'
import { click } from '@testing-library/user-event/dist/click';
import { AppContext } from '../contextApi/Products';
export default function Product() {
  const gauri = useContext(Filtercontext);
  const {filterdata,values,updatefunction,updatehogya,all,mobilefunction,watchfunction,Accessoriesfunction,Computerfunction,Laptopfunction,samsungfunction,aplefunction,lenovafunction,asusfunction} = gauri.statement;
  const rajan = useContext(AppContext)
  const{setId} = rajan.statemanagement;
  function ClickHandler(id) {
    setId(id);
}
  return (
    <div>
      <div>
        <div className="container ">
          <div className="row">
            <div className="col-md-3 anmol">
              <input type="text" className='btn-3' value={values} onChange={updatefunction} placeholder='SEARCH'/>
              <button className='btn-9' onClick={updatehogya}>Search</button>
              <hr />
                <h6 className='heading2 btn-7'>
               CATEGORY
                </h6>
                <button className='btn-2' onClick={all}>
                  All
                </button>
                <br />
                <button className='btn-2' onClick={mobilefunction}>
                  Mobile
                </button>
                <br />
                <button className='btn-2' onClick={Laptopfunction}>
                  Laptop
                </button>
                <br />
                <button className='btn-2' onClick={Computerfunction}>
                  Computer
                </button>
                <br />
                <button className='btn-2' onClick={Accessoriesfunction}>
                  Accessories
                </button>
                <br />
                <button className='btn-2' onClick={watchfunction}>
                  Watch
                </button>
                <br />
                <hr />
                <h6 className='heading2  btn-7'>
                  BRAND
                </h6>
                <button className='btn-2' onClick={samsungfunction}>Samsung</button>
                <br />
                <button className='btn-2' onClick={aplefunction}>Apple</button>
                <br />
                <button className='btn-2' onClick={lenovafunction}>Lenova</button>
                <br />
                <button className='btn-2' onClick={asusfunction}>Asus</button>
                <hr />
                <div className="color btn-4">
                  <h5 className='btn-1'>Colors</h5>
                  <button  className="red btn-1"></button>
                  <button className="green btn-1"></button>
                  <button className="blue btn-1"></button>
                  <button className="yellow btn-1"></button>
                  <button  className="black btn-1"></button>
                  
                </div>
              </div>
              <div className="col-md-9 flexdd">
              
                
              
                { 
                  filterdata.map((item,index) => (
                    <div onClick={()=>ClickHandler(item.id)} key={item.id}>
                    <div key={index}> 
                      <h6 className='heading2'>
                        <Link to="/harsh">
                       <img className='imgproduct' src={item.image} alt="" />
                       </Link>
                        <div className='span'>
                        <span className='tittle'>{item.company}</span><br /><span>RS:{item.price}</span><br /><span>{item.category}</span></div> <hr />
                      </h6>
                      <ul>
                      </ul>
                    </div>
                    </div>
                  ))
                }
                </div>
            </div>
          </div>
        </div>
      </div>
  )
}
