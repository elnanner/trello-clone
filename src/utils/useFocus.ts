import {useRef, useEffect} from 'react';

export const useFocus = ()=>{
    const ref = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        ref.current?.focus()
    }, []);

    return ref;
}

/*
When I need to know what the name is of some element type, I usually
check the @types/react/global.d.ts
*/