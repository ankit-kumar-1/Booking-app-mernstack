/* eslint-disable react/prop-types */

import { useState } from "react"
import { differenceInCalendarDays } from "date-fns"


export default function BookingWidget({ place }) {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(1);
    let numberOfNights = 0;
    if (checkIn && checkOut) {
        numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
    }
    return (
        <div>
            <div className=" bg-white shadow p-4 rounded-2xl">
                <div className=" text-2xl text-center">
                    Price : &#x20B9; {place.price}/Night
                </div>
                <div className="border rounded-2xl mt-4">
                    <div className="flex">
                        <div className="py-3 px-4">
                            <label>Check in : </label>
                            <input className=" cursor-pointer" type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} />
                        </div>
                        <div className="py-3 px-4 border-l">
                            <label>Check out : </label>
                            <input className=" cursor-pointer" type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
                        </div>
                    </div>
                    <div className="py-3 px-4 border-t">
                        <label className=" ml-1">Guests</label>
                        <input type="number" value={guests} onChange={e => setGuests(e.target.value)} />
                    </div>
                </div>

                <button className=" primary mt-4 font-bold hover:shadow-lg">
                    Book this Place
                    {numberOfNights > 0 && (
                        <span> &#x20B9; {numberOfNights * place.price}</span>
                    )}
                </button>
            </div>
        </div>
    )
}
