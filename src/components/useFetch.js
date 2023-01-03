import { useState, useEffect } from 'react';

export default function useFetch(url) {
    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState([]);
    //? if it's shared, it should be named after something more generic

    const getQuestions = async () => {
        const response = await fetch(url);
        const questions = await response.json();
        setQuestions(questions.results);
        setLoading(false);
    };

    useEffect(() => {
        getQuestions();
    }, [url]);

    return { loading, questions };
    //* now for every component that needs to fetch data, we can share this custom hook
}
