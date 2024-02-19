import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import AddressLink from "../AddressLink";
import PlaceGallery from "../PlaceGallery";
import { format, differenceInCalendarDays } from "date-fns"

export default function BookingPage() {
    const { id } = useParams();
    const [booking, setBooking] = useState(null);

    useEffect(() => {
        if (id) {
            axios.get('/bookings').then(response => {
                const foundBooking = response.data.find(({ _id }) => _id === id)
                if (foundBooking) {
                    setBooking(foundBooking);
                }
            })
        }
    }, [id]);

    if (!booking) {
        return '';
    }

    return (
        <div className=" my-8">
            <h1 className=" text-3xl font-semibold">{booking.place.title}</h1>
            <AddressLink className=" my-2 block">{booking.place.address}</AddressLink>
            <div className=" my-6 bg-gray-200 p-6 rounded-2xl flex items-center justify-between">
                <div>
                    <h2 className="text-2xl">Your Booking Informtion</h2>
                    <div className="flex gap-2 items-center border-t border-gray-300 mt-2 text-sm text-gray-500">
                        <div className=" flex my-4 gap-1 items-center">
                            {differenceInCalendarDays(new Date(booking.checkOut), new Date(booking.checkIn))} nights:
                        </div>
                        <div className=" flex gap-1 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                            </svg>
                            {format(new Date(booking.checkIn), 'yyyy-MM-dd')}
                        </div>
                        to
                        <div className=" flex gap-1 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                            </svg>
                            {format(new Date(booking.checkOut), 'yyyy-MM-dd')}
                        </div>

                    </div>
                </div>

                <div className="bg-primary p-6 px-8 text-white rounded-2xl text-center">
                    <div className="text-xl">Total Price</div>
                    <div className="text-3xl"> &#x20B9;{booking.price}</div>
                </div>
            </div>
            <PlaceGallery place={booking.place} />
        </div>
    )
}
