/* eslint-disable react/prop-types */
import { useState } from "react";

export default function PlaceGallery({ place }) {
    const [showAllPhotos, setShowAllPhotos] = useState(false);

    if (showAllPhotos) {
        return (
            <div className=" absolute inset-0 text-white bg-gray-950 min-h-screen">
                <div className="bg-gray-950 px-96 py-12 grid gap-4 object-cover ">
                    <div >
                        <h1 className="text-3xl ">Photos of {place.title}</h1>
                        <button onClick={() => setShowAllPhotos(false)} className=" text-white bg-transparent font-semibold fixed flex left-10 top-12">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                        </button>
                    </div>
                    {place?.photos?.length > 0 && place.photos.map((photo, index) => (
                        <div key={index}>
                            <img className=" rounded-xl object-cover min-w-full" src={"http://localhost:4000/uploads/" + photo} alt="" />
                        </div>
                    ))}
                </div>
            </div>

        )
    }

    return (
        <div className="relative">
            <div className="grid gap-2 grid-cols-[2fr_1fr_1fr] rounded-3xl overflow-hidden">
                <div >
                    {place.photos?.[0] && (
                        <div>
                            <img onClick={() => setShowAllPhotos(true)} className=" cursor-pointer aspect-square object-cover" src={'http://localhost:4000/uploads/' + place.photos?.[0]} alt="" />
                        </div>
                    )}
                </div>
                <div className=" grid">
                    {place.photos?.[1] && (
                        <div>
                            <img onClick={() => setShowAllPhotos(true)} className="cursor-pointer aspect-square object-cover" src={'http://localhost:4000/uploads/' + place.photos?.[1]} alt="" />
                        </div>
                    )}

                    {place.photos?.[2] && (
                        <div className=" overflow-hidden">
                            <img onClick={() => setShowAllPhotos(true)} className="cursor-pointer aspect-square object-cover relative top-2" src={'http://localhost:4000/uploads/' + place.photos?.[2]} alt="" />
                        </div>
                    )}
                </div>
                <div className=" grid">
                    {place.photos?.[3] && (
                        <div>
                            <img onClick={() => setShowAllPhotos(true)} className="cursor-pointer aspect-square object-cover" src={'http://localhost:4000/uploads/' + place.photos?.[3]} alt="" />
                        </div>
                    )}

                    {place.photos?.[4] && (
                        <div className=" overflow-hidden">
                            <img onClick={() => setShowAllPhotos(true)} className="cursor-pointer aspect-square object-cover relative top-2" src={'http://localhost:4000/uploads/' + place.photos?.[4]} alt="" />
                        </div>
                    )}
                </div>
            </div>
            <button onClick={() => setShowAllPhotos(true)} className="flex gap-1 absolute bottom-2 right-2 p-2 bg-white rounded-xl shadow shadow-gray-500 hover:shadow-black">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                Show more photos
            </button>
        </div>
    )
}
