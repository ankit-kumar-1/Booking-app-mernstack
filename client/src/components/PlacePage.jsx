import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export default function PlacePage() {
    const { id } = useParams();
    const [place, setPlace] = useState(null);

    useEffect(() => {
        if (!id) {
            return;
        }

        axios.get(`/places/${id}`).then(response => {
            setPlace(response.data);
        })

    }, [id])

    if (!place) return '';

    return (
        <div className="mt-8 bg-gray-100 -mx-8 px-8 py-8">
            <h1 className=" text-3xl font-semibold">{place.title}</h1>
            <a className=" block font-semibold underline" href={"https://maps.googe.com/?=" + place.address} target="_blank" rel="noreferrer" >{place.address}</a>
        </div>
    )
}
