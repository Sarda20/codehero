import { useEffect, useState } from "react";

const useFounder = () => {
    const [founders, setFounder] = useState([]);
    useEffect(() => {
        fetch('./founder.JSON')
            .then(res => res.json())
            .then(data => setFounder(data));
    }, []);

    return [founders];
}

export default useFounder;