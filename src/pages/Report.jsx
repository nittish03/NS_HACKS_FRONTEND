import { useParams } from "react-router-dom";
import {Container} from "../index"
// import { OCR } from "../components/OCR";
export default function Report() {
    const fileUrl = useParams()
    return (
        <Container>
            <h1 className="text-7xl font-bold text-gray-800">Report...</h1>
            {/* <OCR fileUrl={fileUrl}/> */}
        </Container>
    ) ;
}