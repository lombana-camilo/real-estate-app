import { useDispatch, useSelector} from "react-redux";
import { useState } from "react";
import { createAd } from "./../../store/ads/adsSlice.js";

const CreateAdForm = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.users);
  const [formData,setFormData] = useState({photos:[],purpose:"for-rent",rentFrequency:"yearly"})

   const onChange = (e)=>{
      setFormData(oldData => ({...oldData,[e.target.name]:e.target.value}))
   }
   const onSubmit = (e)=>{
      e.preventDefault();
      const email = currentUser.email
      const adData = {...formData,coverPhoto:formData.photos[0]}
      dispatch(createAd({adData,email}))
      setFormData({photos:[]})
   }

   const addPhoto = (e)=>{
      e.preventDefault()
      formData.coverPhoto && setFormData(oldData=>({...oldData,photos:[...oldData.photos,oldData.coverPhoto]}))
      let photoInput = document.querySelector("input[name='coverPhoto']")
      photoInput.value = ""
   }
  return <form onSubmit={onSubmit} onChange={onChange} className="flex gap-3 bg-secondary p-2 mx-9 rounded-md text-sm" >
         <div className="flex flex-col gap-2">
            <label>Title <input type="text" name="title" required/></label>
            <textarea name="description" cols="60" rows="4" placeholder="Describe your Property..." required></textarea>
         <div className="flex gap-2">
            <input type="url" name="coverPhoto" placeholder="htttp://example.jpg" className="w-2/3" />
            <button onClick={addPhoto}>Add Photo (URL)</button>
         </div>
            {formData.photos.map((photo,key)=>(
               <span key={key}>{photo.slice(0,30)}...</span>
            ))}
            <button>Submit</button>
         </div>
         <div className="flex flex-wrap gap-4 content-center">
            <select name="purpose" required>
               <option defaultValue="for-sale">--Purpose--</option>
               <option value="for-sale">For Sale</option>
               <option value="for-rent" >For Rent</option>
            </select>
            <select name="rentFrequency" required>
               <option value="" defaultValue="yearly" >--Rent Frequency--</option>
               <option value="yearly" >Yearly</option>
               <option value="monthly">Monthly</option>
               <option value="weekly">Weekly</option>
               <option value="dayly">Dayly</option>
            </select>
            <label>Price (AED) <input type="text"  name="price" size="10" required/></label>
            <label>Rooms <input type="number" name="rooms" min="1" max="15" className="w-9" required/></label>
            <label>Baths <input type="number" name="baths" min="1" max="10" className="w-9" required/></label>
            <label>Area (ft2) <input type="text" name="area" min="0" size="10" required/></label>
            <div className="flex gap-2">
               <label>Contact Name <input type="text" name="contactName" required/></label>
               <label>Contact Phone <input type="text" name="contactPhone" required/></label>
            </div>
         </div>
      </form>
};

export default CreateAdForm;
