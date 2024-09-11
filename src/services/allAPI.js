import commonAPI from "./commonAPI"
import serverUrl from "./baseURL"



// upload video Api must called by Add Component

export const  uploadVideoAPI = async (uploadVideo)=>{
    return await commonAPI("POST",`${serverUrl}/allVideos`,uploadVideo)
}
// get all videos API must called by view Component
export const getAllVideosAPI =async ()=>{
    return await commonAPI("GET",`${serverUrl}/allVideos`,"")
}
// store watch history api must called by videocard
export const storeHistoryAPI =async(videoDetails)=>{
    return await commonAPI("POST",`${serverUrl}/history`,videoDetails)
}
// getHistory api must called history component
export const getHistoryAPI= async ()=>{
    return await commonAPI("GET",`${serverUrl}/history`,"")
}
// removehistory API acalled history component
export const removeHistoryAPI = async(historyid)=>{
    return await commonAPI("DELETE",`${serverUrl}/history/${historyid}`,{})
}
// removevideo from api called by videoCard coponent
export const removeVideoAPI = async (videoId)=>{
    return await commonAPI("DELETE",`${serverUrl}/allVideos/${videoId}`,{})
   
}
// add category api
export const  addCategoryAPI = async (categoryDetails)=>{
    return await commonAPI("POST",`${serverUrl}/categories`,categoryDetails)
}
// getallcategory api
export const  getCategoryAPI = async ()=>{
    return await commonAPI("GET",`${serverUrl}/categories`,{})
}
// removecategory api
export const  removeCategoryAPI = async (CategoryId)=>{
    return await commonAPI("DELETE",`${serverUrl}/categories/${CategoryId}`,{})
}
// get single videos API 
export const getSingleVideosAPI =async (id)=>{
    return await commonAPI("GET",`${serverUrl}/allVideos/${id}`,"")
}
// update category api
export const updateCategoryAPI =async (CategoryId,categoryDetails)=>{
    return await commonAPI("PUT",`${serverUrl}/categories/${CategoryId}`,categoryDetails)
}
// get singlr catergory API called by view component
export const getSingleCategoryAPI =async(id)=>{
    return await commonAPI("GET",`${serverUrl}/categories/${id}`,"")
}