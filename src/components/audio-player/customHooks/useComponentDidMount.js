import { useRef, useEffect } from 'react'

function useComponentDidMount() {
    const ref = useRef()
    useEffect(() => {
        ref.current = true
    }, [])
    return ref.current
}

export default useComponentDidMount
