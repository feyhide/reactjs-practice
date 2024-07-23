import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemsActions } from '../store/itemSlices'
import { fetchStatusSliceAction } from '../store/fetchStatusSlice'

const FetchItems = () => {
    const fetchstatus = useSelector((store)=>store.fetchstatus)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(fetchstatus.fetchDone) return;
        
        const controller = new AbortController();
        const signal = controller.signal;
        dispatch(fetchStatusSliceAction.Fetching())
        fetch("http://localhost:8080/items",{signal})
        .then((res)=>res.json())
        .then(({items})=>{
            dispatch(fetchStatusSliceAction.FetchingDone())
            dispatch(itemsActions.addInitialItems(items))
        });

        return () => {
            controller.abort();
        }

    })

    return (
    <>
    </>
  )
}

export default FetchItems