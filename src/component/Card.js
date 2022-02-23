import React from 'react';
import '../css/Card.css'
// import { CardText,CardBody,CardImg,CardTitle} from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
const Card = () => {
  return (
    <div>
         
      <div className="card-group">
            <div className="card">
                    <img className="card-img-top" src={"https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"} alt="Card cap" />
                    <div className="card-body">
                    <h5 className="card-title">Online Experiences</h5>
                    <p className="card-text">Unique activities we can do together, led by a world of hosts.</p>
           
                  </div>
           </div>
           <div className="card">
                <img className="card-img-top" src={"https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"} alt="Card cap" />
                <div className="card-body">
                <h5 className="card-title">Unique stays</h5>
                <p className="card-text">Spaces that are more than just a place to sleep.</p>
            
                </div>
           </div>
           <div className="card">
                <img className="card-img-top" src={"https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"} alt="Card cap" />
                <div className="card-body">
                <h5 className="card-title">Entire homes</h5>
                <p className="card-text">Comfortable private places, with room for friends or family.</p>
                
                </div>
           </div>
           <div className="card">
                <img className="card-img-top" src={"https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"} alt="Card cap" />
                <div className="card-body">
                <h5 className="card-title">3 Bedroom Flat in Bournemouth</h5>
                <p className="card-text">Superhost with a stunning view of the beachside in Sunny Bournemouth
    ₹5130/night</p>
                
                </div>
           </div>

           <div className="card">
                    <img className="card-img-top" src={"https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"} alt="Card cap" />
                    <div className="card-body">
                    <h5 className="card-title">Penthouse in London</h5>
                    <p className="card-text">Enjoy the amazing sights of London with this stunning penthouse<br/>
        ₹4550/night</p>
            
            </div>
           </div>
           <div className="card">
            <img className="card-img-top" src={"https://media.nomadicmatt.com/2018/apartment.jpg"} alt="Card cap" />
            <div className="card-body">
            <h5 className="card-title">1 Bedroom apartment</h5>
            <p className="card-text">Superhost with great amenities and a fabolous shopping complex nearby<br/>
₹8970/night</p>
            
            </div>
           </div>
        </div>
    </div>
  )
}

export default Card