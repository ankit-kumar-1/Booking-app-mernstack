import { useEffect, useState } from "react";
import AccountNav from "./AccountNav";
import axios from 'axios';
import PlaceImg from "../PlaceImg";
import { format, differenceInCalendarDays } from "date-fns"
import { Link } from "react-router-dom";
export default function BookingsPage() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axios.get('/bookings').then(response => {
            setBookings(response.data);
        })
    }, []);
    return (
        <div>
            <AccountNav />

            <div>
                {bookings.length > 0 && bookings.map(booking => (
                    <Link to={`/account/bookings/${booking._id}`} className=" flex gap-4 bg-gray-200 mt-2 rounded-2xl overflow-hidden" key={booking._id}>
                        <div className="w-48 ">
                            <PlaceImg place={booking.place} />
                        </div>
                        <div className=" py-3 pr-3 grow">
                            <h2 className=" text-xl">{booking.place.title}</h2>
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
                            <div className=" text-xl">
                                Total Price: &#x20B9;{booking.price}
                            </div>
                        </div>

                    </Link>
                ))}
            </div>
        </div>
    )
}
