import notFound from "./../../assets/images/notFound.jpg";
const NotFound = () => {
   return (
      <div className="flex flex-col items-center ">
         <h1 className="text-alert font-semibold">No matches :(</h1>
         <img src={notFound} alt="no property matched" className="h-80"/>
      </div>
   )
}

export default NotFound
