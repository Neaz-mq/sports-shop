
import { useLoaderData } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {

    const {name, category, description,  price, _id} = useLoaderData();
    const { register, handleSubmit, } = useForm();
   
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const item = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                description: data.description,
                image: res.data.data.display_url
            }
            // 
            const itemRes = await axiosSecure.patch(`/item/${_id}`, item);
            console.log(itemRes.data)
            if(itemRes.data.modifiedCount > 0){
                // show success popup
                //reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log( 'with image url', res.data);
    };

    return (
        <div>
              <SectionTitle heading="Update an Item" subHeading="Update info"></SectionTitle>

              <div>
           <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Item Name*</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={name}
                            placeholder="Item Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={category} {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Cricket</option>
                                <option value="pizza">Football</option>
                                <option value="soup">Tennis</option>
                                <option value="dessert">Volleyball</option>
                               
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                defaultValue={price}
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* Item details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item Details</span>
                        </label>
                        <textarea defaultValue={description} {...register('description')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input  {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Update Item
                    </button>
                </form>
           </div>
            
        </div>
    );
};

export default UpdateItem;