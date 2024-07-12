import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from "axios";
import { toast } from 'react-toastify';

const Add = () => {
  const url = "http://localhost:4000";
  const [bookcover, setBookcover] = useState(null);
  const [pdf, setPdf] = useState(null);
  const [data, setData] = useState({
    name: "",
    author: "",
    publisher: "",
    description: "",
    category: "Artificial Intelligence",
    price: ""
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(data => ({ ...data, [name]: value }));
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("author", data.author);
    formData.append("publisher", data.publisher);
    formData.append("category", data.category);
    formData.append("description", data.description);
    formData.append("price", data.price);
    if (bookcover) formData.append("bookcover", bookcover);
    if (pdf) formData.append("pdf", pdf);

    try {
      const response = await axios.post(`${url}/api/book/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.data.success) {
        setData({
          name: "",
          author: "",
          publisher: "",
          description: "",
          category: "Artificial Intelligence",
          price: ""
        });
        setBookcover(null);
        setPdf(null);
        toast.success(response.data.message)
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error adding book:', error);
    }
  }

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-insert">
          <div className="add-img-upload">
            <p>Upload Image</p>
            <label htmlFor="bookcover">
              <img src={bookcover ? URL.createObjectURL(bookcover) : assets.upload_area} alt="Upload" required />
            </label>
            <input onChange={(e) => setBookcover(e.target.files[0])} type="file" id='bookcover' hidden required />
          </div>
          <div className="add-pdf-upload">
            <p>Upload Book</p>
            <label htmlFor="pdf">
              <img src={pdf ? URL.createObjectURL(pdf) : assets.upload_area} alt="Upload" required />
            </label>
            <input onChange={(e) => setPdf(e.target.files[0])} type="file" id='pdf' hidden required />
          </div>
        </div>
        <div className="add-product-name flex-col">
          <p>Book Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder="Type here" required />
        </div>
        <div className="add-author flex-col">
          <p>Author</p>
          <input onChange={onChangeHandler} value={data.author} type="text" name="author" placeholder="Type here" required />
        </div>
        <div className="add-publisher flex-col">
          <p>Publisher</p>
          <input onChange={onChangeHandler} value={data.publisher} type="text" name="publisher" placeholder="Type here" required />
        </div>
        <div className="add-description flex-col">
          <p>Description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" placeholder="Type here" rows="6" required></textarea>
        </div>
        <div className="add-cat-price">
          <div className="add-category flex-col">
            <p>Category</p>
            <select onChange={onChangeHandler} name='category' value={data.category}>
              <option value="Aerospace Engineering">Aerospace Engineering</option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Chemical Engineering">Chemical Engineering</option>
              <option value="Computer Engineering">Computer Engineering</option>
              <option value="Electrical Engineering">Electrical Engineering</option>
              <option value="Mechanical Engineering">Mechanical Engineering</option>
              <option value="Robotics">Robotics</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='$20' required />
          </div>
        </div>
        <div className="add-submit flex-col">
          <button type="submit">Add Book</button>
        </div>
      </form>
    </div>
  )
}

export default Add;
