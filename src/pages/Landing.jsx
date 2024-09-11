import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/music-beat.gif'
import contentImg from '../assets/image1.jpeg'
import contentImg2 from '../assets/contentImg2.webp'
import { Card } from 'react-bootstrap'
const Landing = () => {
  return (
    <div style={{paddingTop:'100px'}} className='container'>
{/* landing part */}
<div className='row align-items-center'>
<div  className='col-lg-5'>
  <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
<p style={{textAlign:'left'}} className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione voluptas eum quasi aperiam dignissimos quaerat id itaque, asperiores sed molestiae doloremque exercitationem facilis. Soluta inventore et aspernatur itaque doloremque.
Est autem voluptatum, voluptates corrupti adipisci, ea ratione expedita ex vero veniam, error quas minima accusantium necessitatibus ipsum modi voluptas animi quisquam debitis nulla saepe cumque omnis odio nostrum! Eaque.
Repellat unde amet nemo voluptas temporibus id quos consequuntur nihil nobis ullam. Omnis alias blanditiis soluta porro facilis aut debitis, voluptatum dolorum eveniet sequi, officia deserunt corrupti, impedit quae reprehenderit.</p>
<Link to={'/home'} className='btn btn-info'>GEt Started</Link>
    </div>
<div className='col'>

</div>
<div className='col-lg-6'>
<img className='ms-5 img-fluid' src={landingImg} alt="" />
</div>

</div>
{/* features */}
<div className="my-5">
  <h3 className='text-center'>Features</h3>
    <div className='row mt-5'>
  <div className='col-lg-4'>
  <Card className='p-3' style={{ width: '20rem' }}>
      <Card.Img variant="top" height={'250px'} src={contentImg} />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  <div className='col-lg-4'>
  <Card className='p-3' style={{ width: '20rem' }}>
      <Card.Img variant="top" height={'250px'} src={contentImg} />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  <div className='col-lg-4'>
  <Card className='p-3' style={{ width: '20rem' }}>
      <Card.Img variant="top" height={'250px'} src={contentImg2} />
      <Card.Body>
        <Card.Title>Playing EveryThing</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
    </div>
</div>
{/* links */}
<div className='my-5 row border rounded p-5 '>
  <div className='col-lg-5'>
    <h3 className='text-warning'>Simple ,Fast and Powerful</h3>
    <p style={{textAlign:'justify'}}><span className='fs-5'>Play EveryThing</span>:
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium minima, voluptatem similique ipsum quas temporibus laboriosam animi atque. Illo, a veritatis eveniet officiis neque atque nobis laborum ducimus cum in.</p>
    <p style={{textAlign:'justify'}}><span className='fs-5'>Categories Video</span>:
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium minima, voluptatem similique ipsum quas temporibus laboriosam animi atque. Illo, a veritatis eveniet officiis neque atque nobis laborum ducimus cum in.</p>
    <p style={{textAlign:'justify'}}><span className='fs-5'>Managing History</span>:
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium minima, voluptatem similique ipsum quas temporibus laboriosam animi atque. Illo, a veritatis eveniet officiis neque atque nobis laborum ducimus cum in.</p>
  </div>
<div className='col'>

</div>
<div className='col-lg-6'>
<iframe width="100%" height="600"  src="https://www.youtube.com/embed/qpIdoaaPa6U" title="Jeene Laga Hoon Lyrical - Ramaiya Vastavaiya|Girish Kumar, Shruti Haasan |Atif Aslam, Shreya Ghoshal" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

</div>
    </div>
  )
}

export default Landing

