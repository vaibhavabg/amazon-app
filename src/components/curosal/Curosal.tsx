import Carousel from 'react-bootstrap/Carousel';
import img from '../Cards/img/1.jpg'
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
          src={img}
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
          src={img}
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
          src={img}
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