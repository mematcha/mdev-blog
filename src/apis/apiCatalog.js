import axios from "axios"; // Correct import
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL, // Set your base URL here
});

const convertToBase64 = async(file) => {
  return new Promise((resolve,reject)=>{
    try{
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = ()=>{
        resolve(fileReader.result);
      }
    }
    catch(e){
      console.error(e);
      reject(e);
    }
  });
};

export const showUserBlogs = async (data) => {
  try {
    const response = await apiClient.get("/users/blogs");
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error; // Re-throw to handle in calling component
  }
};

export const getAllBlogs = async (data) => {
  try{
    const response = await apiClient.get("/get-blogs", {
      params: { query: data }
    });
    return response.data;
  }
  catch(error){
    console.error("Error fetching user:", error);
    throw error; // Re-throw to handle in calling component
  }
}

export const showUserSeries = async(userid) =>{
  try{
    const response = await apiClient.get("/users/series");
    return response.data;
  }
  catch(error){
    console.error("Error fetching user:", error);
    throw error; // Re-throw to handle in calling component
  }
}

export const uploadImage = async (data) => {
  try {
    const formData = new FormData();
    formData.append("image", data);
    const response = await apiClient.post("/upload-image", formData);
    return response;
  } catch (error) {
    console.error("Error Uploading Image:", error);
    throw error;
  }
};

export const getImageBuffer = async (data) => {
  try{
    const bufferImg = await apiClient.get("images/get-image-buffer",{ params: { id: data } });
    return bufferImg;
  }
  catch(err){
    console.error("Error Rendering Image: ", err);
    throw err;
  }
}

export const publishBlog = async (data) =>{
  try{
    const response = await apiClient.post("users/publish",data);
    return response;
  }
  catch(err){
    console.error("Error Rendering Image: ", err);
    throw err;
  }
};

export const createNewSeries = async (data) => {
  try{
    const response = await apiClient.post("users/create-series",data);
    return response;
  }
  catch(err){
    console.error("Error Rendering Image: ", err);
    throw err;
  }
};

export const checkSeriesByName = async (data) => {
  try{
    const response = await apiClient.post("users/check-new-series",data);
    return response;
  }
  catch(err){
    console.error("Error : ", err);
    throw err;
  }
};

export const getAllSeries = async (data) =>{
  try{
    const response = await apiClient.get("/series");
    return response;
  }
  catch(err){
    console.error("Error : ", err);
    throw err;
  }
};

export const showBlogById = async (data) =>{
  try{
    const response = await apiClient.get(`/get-blog/${data.id}`);
    return response;
  }
  catch(err){
    console.error("Error : ", err);
    throw err;
  }
};

export const getBlogsInSeries = async (data) =>{
  try{
    const response = await apiClient.get(`/series-blogs/${data.series}`);
    return response;
  }
  catch(err){
    console.error("Error : ", err);
    throw err;
  }
}

export const getBlogsNotInSeries = async (data) =>{
  try{
    const response = await apiClient.get(`/blogs-no-series`,{ params: {query:data} });
    return response;
  }
  catch(err){
    console.error("Error : ", err);
    throw err;
  }
};

export const addBlogToSeries = async (data) => {
  try{
    const response = await apiClient.post(`/add-blog-to-series`,data);
    return response;
  }
  catch(err){
    console.error("Error : ", err);
    throw err;
  }
};

export const generateGoogleToken = async (data) =>{
  try{
    const response = await apiClient.post(`/generate-google-token`,{token:data});
    return response;
  }
  catch(err){
    console.error("Error : ", err);
    throw err;
  }
};

export const generateRefreshToken = async (data) =>{
  try{
    const response = await apiClient.post(`/generate-token`,{type:"refresh"});
    return response;
  }
  catch(err){
    console.error("Error : ", err);
    throw err;
  }
};

export const generateAccessToken = async (data,accessToken='') =>{
  try{
    const response = await apiClient.post("/generate-token",{type:"access",token:data,accessToken:accessToken});
    return response;
  }
  catch(err){
    console.error("Error : ", err);
    throw err;
  }
};

export default {
  showUserBlogs,
  generateRefreshToken,
  generateAccessToken,
  uploadImage,
  getImageBuffer,
  showUserSeries,
  publishBlog,
  getAllBlogs,
  createNewSeries,
  checkSeriesByName,
  getAllSeries,
  showBlogById,
  getBlogsInSeries,
  getBlogsNotInSeries,
  addBlogToSeries,
  generateGoogleToken
};
