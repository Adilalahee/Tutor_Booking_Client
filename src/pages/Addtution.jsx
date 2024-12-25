import React, { useContext } from 'react';
import AuthContext from '../Auth/AuthContext';

const Addtution = () => {
    const {user}=useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Form submitted:', tutorial);
        const form=e.target;
        const name=form.name.value;
        const image=form.image.value;
        const language=form.name.value;
        const price=form.price.value;
        const description=form.description.value;
        const review=form.review.value;
    
        console.log(name,image,language,price,description,review)

        const addTutorialData={
            buyer:
            {name:user?.displayName}
            ,
            image,
            language,
            price,
            description,
            review}
        // Here you would typically make an API call to save the data
      };
    
      // Handle Delete (for demo purposes, we simply reset the form)
      const handleDelete = () => {
      
      };
    
      // Handle Update (assuming we would have some logic to update existing tutorials)
      const handleUpdate = () => {
        console.log('Tutorial updated:', tutorial);
        // Implement update logic here
      };
    
    return (
     <>
      <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Add Tutorial</h2>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          {/* Tutorial Name */}
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={user?.name}
            //   onChange={handleChange}
              className="input input-bordered w-full mt-2"
              placeholder="Enter tutorial name"
              required
            />
          </div>

          {/* Tutorial Image */}
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="image">Image URL</label>
            <input
              type="text"
              id="image"
              name="image"
            //   value={tutorial.image}
            //   onChange={handleChange}
              className="input input-bordered w-full mt-2"
              placeholder="Enter image URL"
              required
            />
          </div>

          {/* Tutorial Language */}
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="language">Language</label>
            <input
              type="text"
              id="language"
              name="language"
            //   value={tutorial.language}
            //   onChange={handleChange}
              className="input input-bordered w-full mt-2"
              placeholder="Enter programming language"
              required
            />
          </div>

          {/* Tutorial Price */}
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
            //   value={tutorial.price}
            //   onChange={handleChange}
              className="input input-bordered w-full mt-2"
              placeholder="Enter price"
              required
            />
          </div>

          {/* Tutorial Description */}
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
            //   value={tutorial.description}
            //   onChange={handleChange}
              className="textarea textarea-bordered w-full mt-2"
              placeholder="Enter tutorial description"
              rows="4"
              required
            />
          </div>

          {/* Tutorial Review */}
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="review">Review</label>
            <input
              type="number"
              id="review"
              name="review"
            //   value={tutorial.review}
            //   onChange={handleChange}
              className="input input-bordered w-full mt-2"
              placeholder="Enter review rating (1-5)"
              min="1"
              max="5"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button type="submit" className="btn btn-primary">
              Add Tutorial
            </button>
            <button type="button" onClick={handleUpdate} className="btn btn-secondary">
              Update Tutorial
            </button>
            <button type="button" onClick={handleDelete} className="btn btn-error">
              Delete
            </button>
          </div>
        </form>
      </div>
    </section>
     </>
    );
};

export default Addtution;