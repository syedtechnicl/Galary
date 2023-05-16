const Upimages=(props)=>{
const img = `https://source.unsplash.com/600x400?${props.name}`;


    return(
    <>
        <div className="container">
    <div className="col-md-12">
   <img className="img-fluid" src={img} alt="wait" />
    </div>
        </div>
    </>
)
}
export default Upimages;