import React from "react";
import { Card, Rate } from "antd";
const { Meta } = Card;
const MovieCard = ({ title, description, postURL, rating }) => {
  return (
    <Card
      hoverable
      cover={
        <img alt="example" src={postURL} className="h-80 w-30 object-cover" />
      }
    >
      <Meta title={title} description={description.slice(0, 100)} />
      <Rate disabled defaultValue={rating} />
    </Card>
  );
};
export default MovieCard;
