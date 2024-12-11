import React from "react";

export default function Category({imgSrc}){
    return(
        <div className="w-2/3 rounded-md">
            <div className="flex items-center justify-start border-2 w-full" >
                    <img src={imgSrc}/>
                    <p>Geography</p>
            </div>
        </div>
    )
}