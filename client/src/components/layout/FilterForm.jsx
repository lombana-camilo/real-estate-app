import { filterOptions } from "./../../utils/filterOptions";
import { useDispatch } from "react-redux";
import { getAllAds } from "./../../store/ads/adsSlice";
import { useEffect, useState } from "react";

const FilterBar = () => {
   const dispatch = useDispatch()
   //Default values
   const [queries, setQueries] = useState({
      purpose:"for-rent",
      rentFrequency:"yearly",
      priceMin:0,
      priceMax:1000000,
      areaMin:0,
      bathsMin:0,
      roomsMin:0
      })

   const onChange = (target)=>{
      setQueries(oldQueries => ( {...oldQueries,[ target.name ]:target.value} ))
   }
   useEffect(()=>{
      dispatch(getAllAds({params:queries}))
   },[queries,dispatch])


  return (
    <div className="p-4 mx-9 my-4 bg-secondary text-bg font-medium h-1/6">
      <h1>Filter Your Search</h1>
      <form onChange={(e)=>onChange(e.target)}  className="flex flex-wrap content-around" >

        {filterOptions.map((filter, key) => {
          return (
            <div key={key}>
              <select name={filter.name} className="text-primary" >
                <option default value={filter.default}> {filter.placeholder} </option>
                {filter.options.map((opt,key) => {
                  return (
                    <option value={opt} key={key}> {opt} </option>);
                })}
              </select>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default FilterBar;
