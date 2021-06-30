import { useEffect, useRef } from 'react';

export default function useTick(func: () => void, time: number) {
    const savedFunction = useRef(() => {});
    useEffect(() => {
      savedFunction.current = func;
    })
  
    useEffect(() => {
      const interval = setInterval(() => { savedFunction.current(); }, time);
      return () => clearInterval(interval);
    }, [time]);
  
    return null;
  }



