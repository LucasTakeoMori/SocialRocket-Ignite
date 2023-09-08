import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishiedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType
}

export function Post({ post }: PostProps) {
    const [comment, setComments] = useState([
        'Post muito bacana, hein ?!'
    ]);

    const publishedDateFormatted = format(post.publishiedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    }) 
  
    const publishedDateRelativeNow = formatDistanceToNow(post.publishiedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    const [newCommentText, setNewCommentText] = useState('')

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>)
    {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    /* Avoid the default Html behavior (page reload) */
    
    function handleCreateNewComment(event: FormEvent){
        event.preventDefault()

        setComments([ ...comment, newCommentText])
        setNewCommentText('');
    }

    function handleNewCommentValid(event: InvalidEvent<HTMLTextAreaElement>)
    {
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne  = comment.filter( comments => {
            return comments !== commentToDelete
        })

        setComments(commentsWithoutDeletedOne);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />
                </div>
                <div className={styles.authorInfo}>
                    <strong>{post.author.name}</strong>
                    <span>{post.author.role}</span>
                </div>

                <time title={publishedDateFormatted} dateTime={post.publishiedAt.toISOString()}>
                    {publishedDateRelativeNow}
                </time>
            </header>

            <div className={styles.content}>
                {post.content.map(Item => {
                    if(Item.type === 'paragraph'){
                        return <p key={Item.content}> {Item.content}</p>
                    } else if (Item.type === 'link'){
                        return <p key={Item.content}> <a href="#">{Item.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>

                    <textarea
                        name='comment'
                        placeholder='Deixe um comentário'
                        value={newCommentText}
                        onChange={handleNewCommentChange}
                        onInvalid={handleNewCommentValid}
                        required
                    />
                    
                    <footer>
                        <button type='submit'>
                            Publicar
                        </button>
                    </footer>
                </form>
                
                <div className={styles.commentList}>
                    {comment.map(comment => {
                        return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                        )
                    })}
                </div>
        </article>
    )
}