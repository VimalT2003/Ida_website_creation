import React from 'react'
import Card from 'react-bootstrap/Card';

function Banner() {
  return (
    <Card className=" text-white" style={{height:"100vh"}}>
    <Card.Img src="https://media.licdn.com/dms/image/D5612AQGu8Tf5dyu6zA/article-cover_image-shrink_720_1280/0/1699582288282?e=2147483647&v=beta&t=bmoIzjkZihtqyfCdu7SuDkltHukGUdm6D1IUFZtY2JU" alt="Card image" style={{height:"100vh"}} />
    <Card.ImgOverlay>
      <div data-aos="fade-right"  data-aos-delay="100" data-aos-duration="1000">
      <h1 class="centered-heading">Bringing Ideas To <br/>Our Reality </h1>
      </div>
        
    </Card.ImgOverlay>
  </Card>
  )
}

export default Banner
