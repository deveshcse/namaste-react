import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems,setShowIndex }) => {
  
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-6/12 mx-auto my-4 shadow-lg m-4 rounded-lg border-2">
      {/* header */}
      <div className="px-2">
        <div
          className=" cursor-pointer font-bold text-lg flex justify-between"
          onClick={handleClick}
        >
          <span>
            {data.title} ({data.itemCards.length}){" "}
          </span>
          <span>🔽</span>
        </div>
      </div>
      {/* accordian body */}

      <div className="px-2">
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
