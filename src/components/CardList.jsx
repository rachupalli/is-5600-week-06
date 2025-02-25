import Card from "./Card";

const CardList = ({data}) => {
  return (
    <div className="cf pa2">
      <div className="mt2 mb2">
        {data && data.map((prodcut) => {
          return(
            <Card key = {products.id} {...product} />
          )
        })}
      </div>
    </div>
  )
}

export default CardList;