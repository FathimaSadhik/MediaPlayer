import React,{useState} from 'react'
import { Modal,Button } from 'react-bootstrap'
import { Form,FloatingLabel } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadVideoAPI } from '../services/allAPI';
const Add = ({setUploadvideoResponse}) => {
  // youtube invalid state
const [invalidLink,setInvalidLink] =useState(false)
const[videoDetails,setVideoDetails]=useState({
  caption:"",url:"",link:""
})

console.log(videoDetails);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // youtbe embedded url kittaan
  const getEmbedURL=(link)=>{
    if(link.includes("v=")){
      let videoId=link.split("v=")[1].slice(0,11)
      console.log(videoId)
      setVideoDetails({...videoDetails,link:`https://www.youtube.com/embed/${videoId}`})
      setInvalidLink(false)
    }
    else{
      // invalid url
      console.log("invalid url")
      setInvalidLink(true)
      setVideoDetails({...videoDetails,link:""})
     
    }
  }
  const handleUpload= async()=>{
    console.log("inside handleUpload function")
    // destructing cheythu
    const {caption,url,link}=videoDetails
    if(caption && url&& link){
      // toast.success("Proceed to api")
   const result =  await uploadVideoAPI(videoDetails)
   console.log(result)
   if(result.status>=200 && result.status<300){
    // upload success
    // handleclose automatically close modal
    handleClose()
    // setVideoDetails({...videoDetails,caption:"",url:"",link:""})
    // reset values here we can use ...videodetails illelum no pblm
    setVideoDetails({caption:"",url:"",link:""})
    // ${result?.data?.caption}
    setUploadvideoResponse(result)
   }
    }
    else{
      toast.warning("Please fill the form completely!!")
    }
  }
  return (
    <>
    <div className='d-flex align-items-center'>
    <h5>Upload New Video</h5>
    <button  onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bold fs-5'>+</button>
    </div>
    
    {/* modal link */}
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Uploading Video Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border rounded p-3'>
          <FloatingLabel
        controlId="floatingInputCaption"
        label="Video Caption"
        className="mb-3"
      >
        {/* here reactbootsrap input tag is form-contol */}
        {/* setvieodetails object ayii koduthu bcz usesate value object ayii use cheythy
        so {} use and ... use cheythathu spread akii oru object ayi use cheythu. */}
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption"/>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputImage"
        label="Image  URL"
        className="mb-3"
      >
        <Form.Control  onChange={e=>setVideoDetails({...videoDetails,url:e.target.value})} type="text" placeholder="Image URL"/>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputLink"
        label="Youtube Video Link"
        className="mb-3"
      >
        <Form.Control onChange={e=>getEmbedURL(e.target.value)} type="text" placeholder="Youtube Video Link"/>
      </FloatingLabel>
     {
      invalidLink && 
      <div className='text-danger fw-bolder mt-3'>
        Invalid Youtube link
        </div>
     }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>
          UpLoad
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer  position='top-center' theme='colored' autoClose={3000}    />
    </>
  )
}

export default Add