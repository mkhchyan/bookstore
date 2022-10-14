import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const AddBook = () => {
  // console.log("Submited")

  const [book, setBook] = useState()
  const [show, setShow] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const user = use Selector(state => state.Auth.profile);


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()


  return <>
    <form onSubmit={handleSubmit((data) => {
      console.log("OKAAYYY");
      dispatch({ data, navigate, type: "ADD_BOOK" })
      reset()
    })}>
      <h2>ADD BOOK</h2>
      <div>
        <input type="text" placeholder='Title' {...register("title", { required: true })} />
        {errors.title && "Title is required"}
      </div>
      <div>
        <input type="text" placeholder='Page count' {...register("pages")} />
        {errors.pages && "Pages is required"}
      </div>
      <div>
        <input type="text" placeholder='Genre' {...register("genre")} />
        {errors.genre && "Genre is required"}
      </div>
      <div>
        <input type="text" placeholder='Author' {...register("author", { required: true, maxLength: 20 })} />
        {errors.author && "Author is required"}
      </div>
      <div>
        <input type="file" id="cover" />
        {/* <button>Upload</button> */}
      </div>
      <div>
        <input type="text" placeholder='desciption' {...register("description")} />
        {errors.discription && "description is required"}
      </div>
      <div>
        <input type="number" placeholder='count' {...register("count")} />
        {errors.count && "Count is required"}
      </div>

      <button>Add book</button>
    </form>
  </>
}
export default AddBook

