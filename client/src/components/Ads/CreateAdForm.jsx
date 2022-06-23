import { useDispatch, useSelector} from "react-redux";
import { useState } from "react";
import { createAd } from "./../../store/ads/adsSlice.js";

const CreateAdForm = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.users);
  const [formData,setFormData] = useState({})

   const onChange = (e)=>{
      setFormData(oldData => ({...oldData,[e.target.name]:e.target.value}))
   }
   const onSubmit = (e)=>{
      e.preventDefault();
      const email = currentUser.email
      const formDataWithPhotos = {...formData,photos:[formData.coverPhoto]}
      dispatch(createAd({formDataWithPhotos,email}))
   }
  return <form onSubmit={onSubmit} onChange={onChange} className="flex gap-3 bg-secondary p-2 ">
         <div className="flex flex-col gap-2">
            <label>Title <input type="text" name="title" required/></label>
            <textarea name="description" cols="60" rows="4" placeholder="Describe your Property..." required></textarea>
            <label>Cover Photo (Url) <input type="url" name="coverPhoto" placeholder="http://example.jpg" size="30" required/></label>
            <button>Submit</button>
         </div>
         <div className="flex flex-wrap gap-2">
            <select name="purpose" required>
               <option value="" disabled selected>--Purpose--</option>
               <option value="for-sale">For Sale</option>
               <option value="for-rent" >For Rent</option>
            </select>
            <select name="rentFrequency" required>
               <option value="" disabled selected>--Rent Frequency--</option>
               <option value="yearly" >Yearly</option>
               <option value="monthly">Monthly</option>
               <option value="weekly">Weekly</option>
               <option value="dayly">Dayly</option>
            </select>
            <label>Price (AED) <input type="text" name="price" size="10" required/></label>
            <label>Rooms <input type="number" name="rooms" min="0" max="15" className="w-9" required/></label>
            <label>Baths <input type="number" name="baths" min="0" max="10" className="w-9" required/></label>
            <label>Area (ft2) <input type="text" name="area" min="0" size="10" required/></label>
            <div className="flex gap-2">
               <label>Contact Name <input type="text" name="contactName" required/></label>
               <label>Contact Phone <input type="text" name="contactPhone" required/></label>
            </div>
         </div>
      </form>
};

export default CreateAdForm;
