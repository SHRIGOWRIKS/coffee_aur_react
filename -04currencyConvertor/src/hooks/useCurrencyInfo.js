//Note-whenver only javascript used use js extension or else .jsx extension 
//Note-2 As normally hooks are prefixed with use,while creating custom hooks prefix it with use as well
//Note 3-As it's a custom hook creted using a function export it so entire function will be returned.



import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})//Created an emty obj so it won't crash anything in fututre if data hasn't added
    //We can call api here in function itself but it's better to call whenevr the state has changed so for that will do it in useeffect hook

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;