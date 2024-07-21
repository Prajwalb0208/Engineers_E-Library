import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const List = ({url}) => {
  
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/book/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error('Error');
    }
  };

  const removeBook = async(bookId)=>{
    const response = await axios.post(`${url}/api/book/remove`,{id:bookId});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Error");
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list'>
      <p>All Books List</p>
      <div className='list-table'>
        <div className='list-table-format title'>
          <b>Book Cover</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => (
          <div key={index} className='list-table-format'>
            <img src={`${url}/uploads/${item.bookcover}`} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <p>
              <button className='delete-button' onClick={()=>removeBook(item._id)}>Delete</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
