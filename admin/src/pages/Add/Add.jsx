import React from 'react'
import './Add.css'
import { assets } from '../../assets/assets'

const Add = () => {
  return (
    <div className='add'>
      <form className='flex-col'>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="bookcover">
            <img src={assets.upload_area} alt="Upload" required/>
          </label>
          <input type="file" id='bookcover' hidden required />
        </div>
        <div className="add-pdf-upload flex-col">
          <p>Upload Book</p>
          <label htmlFor="pdf">
            <img src={assets.upload_area} alt="Upload" required />
          </label>
          <input type="file" id='pdf' hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Book Name</p>
          <input type="text" name="name" placeholder="Type here" required />
        </div>
        <div className="add-author flex-col">
          <p>Author</p>
          <input type="text" name="author" placeholder="Type here" required />
        </div>
        <div className="add-publisher flex-col">
          <p>Publisher</p>
          <input type="text" name="publisher" placeholder="Type here" required />
        </div>
        <div className="add-description flex-col">
          <p>Description</p>
          <textarea name="description" placeholder="Type here" rows="6" required></textarea>
        </div>
        <div className="add-category flex-col">
          <p>Category</p>
          <select name='category'>
            <option value="Aerospace Engineering">Aerospace Engineering</option>
            <option value="Artificial Intellegence">Artificial Intellegence</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Chemical Engineering">Chemical Engineering</option>
            <option value="Computer Engineering">Computer Engineering</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Robotics">Robotics</option>
          </select>
        </div>
        <div className="add-submit flex-col">
          <button type="submit">Add Book</button>
        </div>
      </form>
    </div>
  )
}

export default Add
