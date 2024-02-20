import React from 'react'
import hero from '../Component/img/hero.jpg'
import Delivery from './Delivery'
import FeatureProduct from './FeatureProduct'

 function Home() {
    const data ={
        name: "The Abhay-Store",
    }
  return (
    <div>
      <div>
        <div className="heropart">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 middle">
                        <p>
                            Welcome to
                        </p>
                        <h1>
                            {data.name}
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quisquam soluta inventore adipisci ducimus sed praesentium veniam velit quod saepe reprehenderit alias, dolorum minus perferendis illum unde, autem possimus omnis a accusamus. Ullam voluptas mollitia minima. Nesciunt ab reiciendis hic praesentium harum. Ab repudiandae cum, id delectus tenetur asperiores eum?</p>
                        <button>
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
        <div className="feature">
            <FeatureProduct/>
        </div>
      </div>
    </div>
  )
}
export default Home;