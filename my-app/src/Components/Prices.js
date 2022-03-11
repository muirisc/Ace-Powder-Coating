function Prices(){


  return(
    <section className="prices">
      <h3>Web Specials</h3>
      <div className="priceTable">
        <div className="examples">
          <p> Part </p>
      <p>Bike Frame</p>
      <p>Bike Wheels</p>
      <p>ATV Frame</p>
      <p>Ceramic Pipe Coating</p>
        </div>
        <div className="standardPrices">
          <p> Regular Price </p>
          <p> $250.00</p>
          <p> $125.00 to $150.00 per wheel</p>
          <p> $350.00</p>
          <p> $250.00</p>
        </div>
        <div className="specials">
          <p> Specials </p>
          <p> $199.00</p>
          <p>$75.00 to $90.00 per wheel</p>
          <p>$299.00</p>
          <p> $175.00</p>
        </div>
      </div>
    </section>
  )
}
export default Prices;