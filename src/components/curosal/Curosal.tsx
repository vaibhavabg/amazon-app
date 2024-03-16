import Carousel from 'react-bootstrap/Carousel';
import img from '../Cards/img/1.jpg'
import img1 from '../Cards/img/190730-xiaomi-mi-9t-RM1099-2.jpg'
import img2 from '../Cards/img/62918a70b653793da2b31f1944837e04.jpg'
import img3 from '../Cards/img/WhatsApp_Image_2024-01-29_at_10.54.12_4a0a1dd1._SX1242_QL85_ (1).jpg'
import { autocompleteClasses } from '@mui/material';

let style = {
    
    
   
    
    
  };


export function Curosal(){

    return (
        <div style={style}>
<div>

    <Carousel data-bs-theme="dark">
        
      <Carousel.Item>
        <img
        height={400}
        width={800}
          className="d-block w-100"
          src={img1}
          alt=""
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        height={400}
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        height={400}
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
</div>

    )

} 