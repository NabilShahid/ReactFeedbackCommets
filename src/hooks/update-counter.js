import {useState} from 'react';

export const useUpdateCounter=(initialValue)=>{
    const [count,updateCount]=useState(initialValue);
    return [count,()=>{updateCount(count+1)}];
}