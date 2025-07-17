import React, { useEffect } from "react";
import { useState } from "react";
function Github() {

    const[data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])
    return (
        <div className="w-screen h-screen">  
        <div className="text-center m-2 bg-gray-700
        text-shadow-indigo-500">Github : {data.followers}
        <img className="text-center " src="{data.avatar_url}" alt="Git picture" />
        </div>
        </div>
    );
}

export default Github;
