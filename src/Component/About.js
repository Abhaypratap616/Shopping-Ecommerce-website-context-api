import React from 'react'
import Home from '../Component/Home'
import Navbaar from './Navbaar';
import Footer from './Footer';
import hero from '../Component/img/hero.jpg'
import Delivery from './Delivery'
 function About() {
  const data ={
    name: "The Abhay-Store",
}
  return (
    <div>
       <div className="heropart">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 middle">
                        <h2 className=' welcome  '>
                            Welcome to
                        </h2>
                        <h1>
                            {data.name}
                        </h1>
                        <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quisquam soluta inventore adipisci ducimus sed praesentium veniam velit quod saepe reprehenderit alias, dolorum minus perferendis illum unde, autem possimus omnis a accusamus. Ullam voluptas mollitia minima. Nesciunt ab reiciendis hic praesentium harum. Ab repudiandae cum, id delectus tenetur asperiores eum?</p>
                        <button className='button-1'>
                            Shop-Now
                        </button>
                    </div>
                    <div className="col-md-6 middleimg">
                       <img className='' src={hero}alt="" /> 
                    </div>
                </div>
            </div>
        </div>
        <div className="delivery">
            <Delivery/>
        </div>
    </div>
  )
}
export default About;
