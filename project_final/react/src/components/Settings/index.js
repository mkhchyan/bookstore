import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Settings = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()

    return <>
        <form onSubmit={handleSubmit((data) => {
            dispatch({ type: "CHANGE_PASSWORD", navigate, data })
        })}>
            <div>
                <input type="password" placeholder="Old Password" {...register("oldPassword")} />
            </div>
            <div>
                <input type="password" placeholder="New Password" {...register("newPassword")} />
            </div>
            <div>
                <button>Change</button>
            </div>
        </form>
    </>
}

export default Settings;