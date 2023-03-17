type PriceProps = {
  price: number;
}

function Price({price}: PriceProps) {

  return (
    <div className="property__price">
      <b className="property__price-value">&euro;{price}</b>
      <span className="property__price-text">&nbsp;night</span>
    </div>
  );
}

export default Price;
