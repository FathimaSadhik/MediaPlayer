import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'
const Home = () => {
const [removeCategoryVideoResponseFromView,setRemoveCategoryVideoResponseFromView] = useState("")
// state for category and view relation
const [removeVideoResponseFromCategory,setRemoveVideoResponseFromCategory] = useState("")
  const [uploadVideoResponse,setUploadvideoResponse] =useState('')
  return (
    <div style={{paddingTop:'100px'}}>
<div className='container d-flex justify-content-between'>
  {/* here same key name koduthanne ullu */}
<Add setUploadvideoResponse={setUploadvideoResponse}/>
<Link to={'/history'}>Watch History</Link>
</div>
<div className='container-fluid row my-5'>
<div className='col-lg-6'>
<h3>All Videos</h3>
<View setRemoveCategoryVideoResponseFromView={setRemoveCategoryVideoResponseFromView} uploadVideoResponse={uploadVideoResponse} removeVideoResponseFromCategory={removeVideoResponseFromCategory}/>
</div>
<div className='col-lg-6'>
<Category removeCategoryVideoResponseFromView={removeCategoryVideoResponseFromView}     setRemoveVideoResponseFromCategory={setRemoveVideoResponseFromCategory}/>
</div>
</div>
    </div>
  )
}

export default Home