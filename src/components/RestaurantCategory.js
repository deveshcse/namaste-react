import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
    
  return (<div className="w-6/12 mx-auto my-4 shadow-lg m-4 bg-gray-100 rounded-lg border-2">
    {/* header */}
    <div className="px-2" >
        <div className="font-bold text-lg flex justify-between" >
            <span >{data.title} ({data.itemCards.length}) </span>
            <span>🔽</span>
        </div>
    </div>
    {/* accordian body */}

    
    <div className="px-2">
    < ItemList items = {data.itemCards} />
    </div>
  </div>);
};

export default RestaurantCategory;
