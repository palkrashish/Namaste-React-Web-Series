import {CDN_URL} from "../utilis/constants";
// const RestaurentCard(props) or
const RestaurentCard = ({ resData }) => {
  // const { resData } = props;

  // here we are destrcturing thing all variable to access only hername and assign here resData.data.data path
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    address,
  } = resData.data.data;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="logo" />
      <h3>{name}</h3>
      <h5>{cuisines.join(",")}</h5>
      <h5>{avgRating}star</h5>
      <h5>{costForTwo / 100}MRP</h5>
      <h5>{deliveryTime}Minutes</h5>
      <h5>{address}Addres</h5>
    </div>
  );
};

export default RestaurentCard;
