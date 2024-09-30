import { useParams } from "react-router-dom";
import Details from "../components/Details";

function FicheMatch(){

    const {id} = useParams()
    
return (
    <Details id={id} />
)
}
export default FicheMatch