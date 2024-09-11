import React,{useState} from 'react'
import { Card, Modal } from 'react-bootstrap'
import { removeVideoAPI, storeHistoryAPI } from '../services/allAPI';
const VideoCard = ({displayData,setDeleteVideoResponse, insideCategory}) => {
  console.log(displayData);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    // save history in server
    const {caption,link}=displayData;
    // get data&time to watch video
    const sysTime = new Date()
    // look o/p and check the difference
    // console.log(sysTime)
    const timeStamp= sysTime.toLocaleString('en-US',{timeZoneName:'short'})
    console.log(timeStamp);
    const videoDetails ={ caption,link,timeStamp }
   await storeHistoryAPI(videoDetails)
  }
  const removeVideo =async (videoId)=>{
    const result =await removeVideoAPI(videoId)
        // pass response to view component(child to parent)
        setDeleteVideoResponse(result?.data)
  }
  const videoDragStart =(e,videoId)=>{
    console.log(`Dragging started with videoid:${videoId}`)
    // share video id along with ondragstart event
    e.dataTransfer.setData("vId",videoId)
  }
  return (
    <>
    <Card draggable={true}  onDragStart={e=>videoDragStart(e,displayData?.id)}  style={{height:'250px'}}>
      <Card.Img onClick={handleShow} variant="top" height={'150px'} src={displayData?.url}/>
      <Card.Body>
        <Card.Text className='d-flex justify-content-between'>
          <p>{displayData?.caption}</p>
          {
            !insideCategory &&
            <button onClick={()=>removeVideo(displayData?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
          }
        </Card.Text>
      </Card.Body>
    </Card>
    <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="400"  src={`${displayData?.link}?autoplay=1`} title="Jeene Laga Hoon Lyrical - Ramaiya Vastavaiya|Girish Kumar, Shruti Haasan |Atif Aslam, Shreya Ghoshal"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        </Modal.Body>
      
      </Modal>
    </>
  )
}

export default VideoCard