import './ExploreBrands.css'
import brandsImage from '../../assets/brand-image.png'
function ExploreBrands() {


    return (
      <>
      <div className="brand-container">
      <div className="brand-heading">
        <span className='blue-span'>Our iconic brands</span>
        <span className='purple-span'>are on a mission</span>
        <span className='red-span'>to do good.</span>
         <div className="explore-brand">
        <button>Explore our brands<span>▶</span></button>
      </div>
      </div>
     
      <div className="brand-image">
          <img src={brandsImage} alt='brands-image'></img>
         </div>
    </div>


      </>
    )
  }
  
  export default ExploreBrands
  
 