import React, {useEffect, useRef, useState} from 'react';
import styles from "./CardList.module.css";
import Card from "./Card/Card";
import axios from "axios";
import {myRequestError, myRequestSuccess} from "../store/me/actions";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer";

const CardList = () => {
    const token = useSelector((state: RootState) => state.token)
    const [posts, setPosts] = useState<any[]>([])
    const [loading, setLoading] = useState(false)
    const [errorLoading, setErrorLoading] = useState('')
    const [nextAfter, setNextAfter] = useState('')

    const bottomOfList = useRef<HTMLDivElement>(null)



    useEffect(() => {

        const load = async () => {
            setLoading(true)
            setErrorLoading('')
            try {
                const {data: {data: {after, children}}} = await axios.get('https://oauth.reddit.com/rising', {
                    headers: {Authorization: `bearer ${token}`},
                    params: {
                        limit: 10,
                        after: nextAfter
                    }
                })
                setPosts(prevState => prevState.concat(...children))
                setNextAfter(after)

            }catch (e) {
                setErrorLoading(String(e))
            }
            setLoading(false)
        }
        const observer = new IntersectionObserver((entries)=> {
           if (entries[0].isIntersecting) {
               load()
           }

        }, {
            rootMargin: '100px'
        })
        if (bottomOfList.current) {
            observer.observe(bottomOfList.current)
        }
        return () => {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current)
            }
        }

    }, [bottomOfList.current, nextAfter, token])

    return (
        <ul className={styles.cardList}>
            {posts.length === 0 && !loading && !errorLoading && (
                <h1 style={{textAlign: "center"}}>No data</h1>
            )}
            {posts.map((post) => (
                <Card
                    key={post.data.id}
                    title={post.data.title}
                />
            ))}


            <div ref={bottomOfList}/>


            {loading && <div>Loading...</div>}
            {errorLoading && <div>Error : {errorLoading}</div>}

        </ul>
    );
};

export default CardList;
