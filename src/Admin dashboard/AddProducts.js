import React, { useEffect, useState } from 'react'
import db, { storage } from '../firebase';
import { serverTimestamp, addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

function AddProducts() {
  const initialProductData = {
      id: null,
  name: "",
  brand: "",
  price: "",
  category: "",
  "item-weight": "",
  description: "",
  }; 

  const [productData,setProductData]=useState(initialProductData)
  const [files, setFiles] = useState([]);
  const [selectedImages, setSelectedImages] = useState({});
  const [formComplete,setFormComplete]=useState()
const handleInput = (e) => {
  setFormComplete(true);
  const id = e.target.id;
  const value = e.target.value;
  
  if (id === 'name') {
    const productId = uuidv4(); // Generate a unique ID
    setProductData({ ...productData, id: productId, [id]: value });
  } else {
    setProductData({ ...productData, [id]: value });
  }
};
  const handleImage = (e) => {
    setFormComplete(true)

    const id = e.target.id;
    const file = e.target.files[0];
    setFiles((prevFiles) => ({ ...prevFiles, [id]: file }));
    const imageUrl = URL.createObjectURL(file);
  setSelectedImages((prevImages) => ({ ...prevImages, [id]: imageUrl }));
  }
const handleRemoveImage = (img) => {
  URL.revokeObjectURL(selectedImages[img]);
  setSelectedImages((prevImages) => {
    const newImages = { ...prevImages };
    delete newImages[img]; 
    return  newImages;
  });
}
  const resetForm = () => {
  setFiles({})
  setProductData(initialProductData);
  setSelectedImages({})
}
  useEffect(() => {
    const uploadFiles = async () => {
      const uploadTasks = Object.keys(files).map((id) => {
        const file = files[id];
        const name = new Date().getTime() + file.name;
        const storageRef = ref(storage, name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        return uploadTask;
      });  
      try {
        const uploadSnapshots = await Promise.all(uploadTasks);
        const downloadURLs = await Promise.all(
          uploadSnapshots.map((snapshot) => getDownloadURL(snapshot.ref))
        );

        const imagesData = {};
        downloadURLs.forEach((url, index) => {
          imagesData[`img${index + 1}`] = url;
        });

        setProductData((data) => ({ ...data, ...imagesData }));
      } catch (error) {
        console.log('Error uploading files:', error);
      }
    };

    if (Object.keys(files).length > 0) {
      uploadFiles();
    }
    
  }, [files]);

const handleSubmit = async (e) => {
  e.preventDefault();
  if (
    productData.brand &&
    productData.name &&
    productData.price &&
    productData.category &&
    productData.description &&
    productData['item-weight'] &&
    productData.img1 &&
    productData.img2 &&
    productData.img3 &&
    productData.img4
  ) {
    setFormComplete(true);
try {
      // Use addDoc to add a new document to the "Products" collection with auto-generated ID.
  const docRef = await addDoc(collection(db, 'Products'), {
         id: productData.id, // Use the same ID generated for the product
        ...productData,
        timestamp: serverTimestamp(),
      });

  resetForm();
  setProductData(initialProductData);
      toast.success('The Product has been successfully added to the website.');
    } catch (error) {
      console.log(error);
    }
  } else {
    setFormComplete(false);
  }
};
  
  const images = ['img1', 'img2', 'img3', 'img4'];
  return (
    <section className="bg-gray-50 dark:bg-gray-900 AddProducts">
      <div className="py-4 px-6 mx-auto rounded-xl lg:py-8 bg-white shadow">
        <h2 className="mb-8 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
        <form action="#" onSubmit={
          (e)=>handleSubmit(e)
      }>
          <div className='flex-col lg:grid grid-cols-4 lg:grid-cols-6 gap-4'>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 col-span-3">
              <div className="sm:col-span-2">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                  <input onChange={(e)=>handleInput(e)} value={productData.name} type="text" name="name" id="name" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""/>
              </div>
              <div className="w-full">
                  <label  htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                  <input onChange={(e)=>handleInput(e)}  value={productData.brand}  type="text" name="brand" id="brand" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required=""/>
              </div>
              <div className="w-full">
                  <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                  <input onChange={(e)=>handleInput(e)}   value={productData.price}  type="number" name="price" id="price" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""/>
              </div>
              <div>
                  <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                  <select onChange={(e)=>handleInput(e)}  value={productData.category}   id="category" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-300 focus:border-gray-300 focus-visible:outline-none focus-visible:border-blue-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                      <option defaultValue="">Select category</option>
                      <option value="Home furniture">Home furniture</option>
                      <option value="Men clothes">Men clothes</option>
                      <option value="Women clothes">Women clothes</option>
                      <option value="Men Bags">Men Bags</option>
                      <option value="Women Bags">Women Bags</option>
                      <option value="TV">TV/Monitors</option>
                      <option value="PC">PC</option>
                      <option value="Gaming">Gaming/Console</option>
                      <option value="Phones">Phones</option>
                  </select>
              </div>
              <div>
                  <label htmlFor="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Weight (kg)</label>
                  <input  onChange={(e)=>handleInput(e)}   value={productData['item-weight']} type="number" name="item-weight" id="item-weight" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="12" required=""/>
              </div> 
              <div className="sm:col-span-2 ">
                  <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea onChange={(e)=>handleInput(e)}   value={productData.description}  id="description" rows="8" className="block  p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
              </div>
            </div>
            <div className='flex flex-col  col-span-3'>
              <span className='text-sm font-medium'>Product images</span>
              <div className="grid grid-cols-1 lg:grid-cols-2  gap-2 mt-2.5">
                  {images.map((img) => (
                    <div key={img} className={`mb-1 relative rounded border-2 border-gray-300 border-dashed w-full lg:w-52 h-56 flex items-center justify-center flex-col gap-2 ${selectedImages[img]? 'p-0 border-none':'p-4'} `}>
                  {selectedImages[img] ? (
                        <img src={selectedImages[img]} alt={`Product ${img}`}
                          className="max-w-32 max-h-32 object-cover rounded" />
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white fill-gray-400" height="1.5em" viewBox="0 0 512 512">
          <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                    </svg>
                  )}
                      <div className="text-sm text-gray-400 text-center">
                        {selectedImages[img] ? (
                          <span className=" w-6 h-6 flex items-center justify-center rounded-full p-1 absolute top-2 right-2 text-blue-600  bg-white border border-blue-600 cursor-pointer hover:border-blue-800 hover:text-white hover:bg-blue-600 transiction" onClick={() => handleRemoveImage(img)}>
                            X
                          </span>
                          ) : (
                            <>
                          Drop your images here, or select{' '}
                          <input id={img} onChange={(e) => handleImage(e)} type="file" className="opacity-0 w-20 relative h-6 z-10 -right-10 lg:right-0" />
                          <span className="text-base cursor-pointer relative top-0 lg:-top-6 right-10 lg:-right-6 text-blue-500">browse file</span>
                            </>
                          )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className={`flex items-baseline gap-6`}>
            
            <button type="submit" className=" inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-600 hover:bg-blue-700 transition ease-in-out delay-150 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 sss">
            Add product
            </button>
          {formComplete===false ? <span className='bg-red-200 text-red-500 rounded-lg text-center p-2'>From is not complete missing fields</span> :''
            
              
          }
          </div>
        </form>
      </div>
    </section>
  )
}

export default AddProducts