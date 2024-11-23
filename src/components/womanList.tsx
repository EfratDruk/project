import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store";
import { useEffect } from "react";
import { deleteExistingWoman, fetchWoman } from "../redux/features/womanSlice";


const WomanList: React.FC = () => {
    const dispatch = useDispatch();
   // const { women, error } = useSelector((state: RootState) => state.women);
   const women=useSelector((state:RootState)=>state.woman.women);
   const error= useSelector((state:RootState)=>state.woman.error);
   



    useEffect(()=>{
        dispatch(fetchWoman())
    },[dispatch])

    // useEffect(() => {
    //     dispatch(updateExistingMatchmaker({
    //         id:1,
    //         matchmaker:{
    //         "id": 1,
    //         "name": "noach",
    //         "password": "1234",
    //         "email": "updated@gmail.com",
    //         "phone": "0507150002"
    //     }}))
    // }, [dispatch])


    const handleDelete = (id: number) => {
        dispatch(deleteExistingWoman(id));
    }



    return (
        <>
            <h2>list</h2>
            {error && <p>{error}</p>}
            <ul>
                {women && women.map((woman: { id: number; name: string}) => (
                    <li key={woman.id}>
                        {woman.name}
                        <br />
                        <button onClick={() => handleDelete(woman.id)}>Delete</button>
                        <br />
                        {/* <button onClick={() => handleUpdate(matchmaker.id)}>Update</button> */}
                    </li>
                ))}
            </ul>
        </>
    );

}
export default WomanList