import React, {useState} from 'react'
import Modal from './Modal';

const Card = ({ book }) => {
    console.log(book)

    const [show, setShow]=useState(false);
    const [bookItem, setItem]=useState();
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let category=item.volumeInfo&& item.volumeInfo.categories;
                    let title=item.volumeInfo && item.volumeInfo.title;
                    // let info=item.volumeInfo.industryIdentifiers && item.volumeInfo.industryIdentifiers.infoLink;
                    if(thumbnail !== undefined && category!==undefined){
                        return (
                            <>
                            <div className='card' onClick={()=>{setShow(true); setItem(item)}} >
                                <img src={thumbnail} alt='' />
                                <div className='bottom'>
                                    <h3 className='title'>{title}</h3>
                                    <p className='amount'>{category}</p>
                                    {/* <p className='amount'>{info}</p> */}
                                </div>
                            </div>
                            <Modal show={show} item={bookItem}  onClose={()=>setShow(false)}/>
                            </>
                        )
                    }
                   
                })
            }

        </>
    )
}

export default Card