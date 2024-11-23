import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store";
import { useEffect } from "react";
import { deleteExistingMan, fetchMan } from "../redux/features/manSlice";


const ManList: React.FC = () => {
    const dispatch = useDispatch();
    const { men, error } = useSelector((state: RootState) => state.men);
    //  const matchmakers=useSelector((state:RootState)=>state.matchmakers.matchmakers);


    useEffect(()=>{
        dispatch(fetchMan())
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
        dispatch(deleteExistingMan(id));
    }



    return (
        <>
            <h2>list</h2>
            {error && <p>{error}</p>}
            <ul>
                {men && men.map((man: { id: number; name: string}) => (
                    <li key={man.id}>
                        {man.name}
                        <br />
                        <button onClick={() => handleDelete(man.id)}>Delete</button>
                        <br />
                        {/* <button onClick={() => handleUpdate(matchmaker.id)}>Update</button> */}
                    </li>
                ))}
            </ul>
        </>
    );

}
export default ManList