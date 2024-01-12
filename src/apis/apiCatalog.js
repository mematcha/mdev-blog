import axios from "axios"; // Correct import
const apiClient = axios.create({
  baseURL: "http://localhost:4000", // Set your base URL here
});

export const showData = async (data) => {
  try {
    const response = await apiClient.get("/users/series");
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error; // Re-throw to handle in calling component
  }
};
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

export const uploadImage = async (data) => {
  try {
    const formData = new FormData();
    formData.append("image", data);
    const response = await apiClient.post("images/upload-image", formData);
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

export default { showData, uploadImage, getImageBuffer };
