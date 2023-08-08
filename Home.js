import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './index.css';

const Menu = [
    {
        id: 1,
        label: 'Man',
        image_link: 'https://mocciani.com.pk/cdn/shop/files/1_a9fecfb1-3a09-4c39-9087-72f7dc0d8450_1080x.jpg?v=1685177871',
        image_alt: 'Image not found',
        redirect_link: '/Components/MailProduct'
        
    },
    {
       
        id: 2,
        label: 'Women',
        image_link: 'https://mocciani.com.pk/cdn/shop/files/1_2603667d-cc19-4156-b20d-d68d46caed31_1080x.jpg?v=1684919393',
        image_alt: 'Image not found',
        redirect_link: '/Components/FemailProduct'
    },
    {
        id: 3,
        label: 'Bags',
        image_link: 'https://mocciani.com.pk/cdn/shop/files/1_349e6a27-3848-4ae9-8ada-664a89faed91_1080x.jpg?v=1683887510',
        image_alt: 'Image not found',
        redirect_link: '/Components/Bags'
    },
    {
        id: 4,
        label: 'Watches',
        image_link: 'https://cdn.shopify.com/s/files/1/0003/5815/4293/products/DSC08778.jpg?v=1677321195&width=1080',
        image_alt: 'Image not found',
        redirect_link: '/Components/Watches'
    },
    {
        id: 5,
        label: 'Perfume',
        image_link:'https://m.media-amazon.com/images/I/51aFAedDRHL._SX679_.jpg',
        image_alt:'Image not found',
        redirect_link: '/Components/Perfume'
    }
    ,
    {
        id: 6,
        label: 'Cloths',
        image_link: 'https://cdn.shopify.com/s/files/1/0041/8797/9905/products/1_83308d14-ed8a-45b8-828e-195af044a415.jpg?v=1680013686&width=900',
        image_alt: 'Image not found',
        redirect_link: '/Components/Mcloths'
    }
];

function Home() {

    useEffect(() => {
        
    })

    const navigate = useNavigate();

    return(
        <React.Fragment>
        <h4 id="w1" className="text-center">Collection List</h4>
        <div className="container">
          <div className="row">
            {Menu.map((item) => (
              <div className="col-md-4" key={item.id}>
                <h3 className="text-center" style={{ marginTop: '50px', marginBottom: '20px', textDecoration: 'underline' }}>{item.label}</h3>


                {item.id === 6 ? (
                  <img
                    src={item.image_link}
                    alt={item.image_alt}
                    onClick={() => navigate(item.redirect_link)}
                    style={{ height: '400px', width: '350px' }}
                    className="img-fluid img-hover"
                  />
                ) : (
                  <img
                    src={item.image_link}
                    alt={item.image_alt}
                    onClick={() => navigate(item.redirect_link)}
                    className="img-fluid img-hover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
      
      
      

    )
}

export default Home;

 