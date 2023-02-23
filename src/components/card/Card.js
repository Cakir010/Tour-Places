import CardStyle from "./Cards.module.css";

const Cards = ({ id, title, desc, image }) => {
  return (
    <div className={CardStyle.card}>
      <h2>{title}</h2>
      <div className={CardStyle.img}>
        <img src={image} alt={title} />
      </div>
      <div className={CardStyle.description}>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Cards; 