import Item from '../Item/Item'
import './itemList.css'
const ItemList = ({ data }) => {
    return (
      <div className='itemList'>
        {
          data.map((data) => (
            <Item data={data} key= {data.id}/>
          ))}
      </div>
    );
  };
  
  export default ItemList;