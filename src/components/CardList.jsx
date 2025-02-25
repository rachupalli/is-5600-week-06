import Card from './Card'
import Button from './Button'

const CardList = ({data}) => {
  return (
    <div className="cf pa2">
      <div className="mt2 mb2">
        {data && data.map((product) => 
          ( <Card key={product.id} {...product} />))}
      </div>
      <div className="flex items-center justify-center pa4">   
        <Button text="Previous" />
        <Button text="Next" />
      </div>
    </div>
  )
}

export default CardList;