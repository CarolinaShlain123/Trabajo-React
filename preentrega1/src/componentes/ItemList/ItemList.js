import Item from '../Item/Item'

const ItemList = ({ data }) => {
    return (
      <div className='card'>
        {
          data.map((data) => (
            <Item data={data} key= {data.id}/>
          ))}
      </div>
    );
  };
  
  export default ItemList;