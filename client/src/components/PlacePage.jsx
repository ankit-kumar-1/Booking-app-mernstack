import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import BookingWidget from "../BookingWidget";
import PlaceGallery from "../PlaceGallery";
import AddressLink from "../AddressLink";



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
        <div className="mt-8 bg-gray-100 -mx-8 px-8 pt-8">
            <h1 className=" text-3xl font-semibold">{place.title}</h1>

            <AddressLink>{place.address}</AddressLink>

            <PlaceGallery place={place} />

            <div className=" mt-14 mb-8 grid gap-12 grid-cols-1 md:grid-cols-[2fr_1fr]">
                <div>
                    <div className="my-2">
                        <h2 className="text-2xl font-semibold">Description</h2>
                        {place.description}
                    </div>
                    Check in : {place.checkIn} <br />
                    Check out : {place.checkOut} <br />
                    Max no. of Guests : {place.maxGuests}

                </div>
                <div>
                    <BookingWidget place={place} />
                </div>
            </div>
            <div className="bg-white border-t -mx-8 px-6 py-8">
                <div>
                    <h2 className="text-2xl font-semibold">Extra Info</h2>
                </div>
                <div className="mb-4 mt-1 text-sm text-gray-700 leading-5">{place.extraInfo}</div>
            </div>

        </div>
    )
}
