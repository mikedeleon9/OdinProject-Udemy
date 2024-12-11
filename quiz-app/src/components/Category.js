import React from "react";

export default function Category({imgSrc, type}){
    return(
        <div className="w-2/3">
            <div className="flex items-center justify-start border-2 w-full rounded-3xl gap-4" >
                    <img className="w-16" src={imgSrc}/>
                    <p className="text-xl text-extrabold">{type}</p>
            </div>
        </div>
    )
}