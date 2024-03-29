import { buyItem } from './services/fetch-utils';

export default function ListItem({ fetchItems, listItem }) {

  async function handleClick() {
    // buy the item (in supabase)
    await buyItem(listItem.id);
    // refetch the updated items array by calling the function passed in through props
    fetchItems();
  }

//  () => {} is javascript for "do nothing". It's an arrow function that doesn't nothing at all.
  return (
    // on click, if it's already been bought, do nothing; otherwise, call the handleClick function
    <div className='list-item' onClick={listItem.has_been_bought ? () => {} : handleClick}>
      {/* if it's been bought, this p tag should have the 'bought' class. Otherwise it should have the 'needed' class */}
      <p className={listItem.has_been_bought ? 'bought' : 'needed'}>
        {/* show the quantity and name here */}
        {listItem.quantity} {listItem.name}
      </p>     
    </div>
  );
}
