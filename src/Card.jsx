const Card = ({ item }) => {
  return (
    <>
    <center>
      {item.map((vals) => {
        const { id, imgsrc, name, category, price, des } = vals;
        return (
          <>
            {/* <div className="row"> */}
            <div classname="card col-md-12" style={{ width: "18rem" }} key={id}>
              <img classname="card-img-top" src={imgsrc} alt="Card image cap" />
              <div classname="card-body">
                <h5 classname="card-title">{name}</h5>
                <p classname="card-text">{des}</p>
                <span>{category}</span>
                <a href="#" classname="btn btn-primary">
                  {price}
                </a>
              </div>
            </div>
            {/* </div> */}
          </>
        );
      })}
      </center>
    </>
  );
};

export default Card;
