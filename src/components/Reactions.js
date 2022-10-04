import React from 'react'
import { useDispatch } from 'react-redux';
import { increaseReaction } from '../store/blogs-slice'; 

export const Reactions = (props) => {
    const dispatch = useDispatch()
    return (
        <div className="c-like__pill">
            <div className="c-like__reactions">
                <button title="Like" className="c-like__reaction c-like__reaction--like" onClick={() => dispatch(increaseReaction({ id: props.blog.id, reaction: "like"}))} disabled={props.blog.reactionsButton}></button>
                <p>:{props.blog.reactions.like}</p>
                <button title="Love" className="c-like__reaction c-like__reaction--love" onClick={() => dispatch(increaseReaction({ id: props.blog.id, reaction: "love"}))} disabled={props.blog.reactionsButton}></button>
                <p>:{props.blog.reactions.love}</p>
                <button title="Haha" className="c-like__reaction c-like__reaction--haha" onClick={() => dispatch(increaseReaction({ id: props.blog.id, reaction: "haha"}))} disabled={props.blog.reactionsButton}></button>
                <p>:{props.blog.reactions.haha}</p>
                <button title="Angry" className="c-like__reaction c-like__reaction--angry" onClick={() => dispatch(increaseReaction({ id: props.blog.id, reaction: "angry"}))} disabled={props.blog.reactionsButton}></button>
                <p>:{props.blog.reactions.angry}</p>
                <button title="Sad" className="c-like__reaction c-like__reaction--sad" onClick={() => dispatch(increaseReaction({ id: props.blog.id, reaction: "sad"}))} disabled={props.blog.reactionsButton}></button>
                <p>:{props.blog.reactions.sad}</p>
            </div>
        </div>
    )
}
