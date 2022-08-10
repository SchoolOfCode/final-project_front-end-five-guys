function Item({ medicine }) {
  // console.log(medicine);
  return (
    <div
      style={{ padding: '0.5rem', margin: '0.5rem', border: '1px solid red' }}
    >
      <div className="msg">
        {medicine.interactionInfo.map((item) => {
          return (
            <div>
              {item.drugs.reduce(
                (prevDrug, currDrug) => prevDrug.name + '+' + currDrug.name
              )}
            </div>
          );
        })}
      </div>
      <div></div>
      <div>{medicine.drug}</div>
    </div>
  );
}
export default Item;
