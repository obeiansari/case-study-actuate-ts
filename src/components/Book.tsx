import React, { useState } from 'react'

interface Book {
    title: string,
    shortDescription: string,
    author: string,
    year: number     
}
const Book: React.FC = () => {

    const [searchBook,  setSearchBook]  = useState<string>(""); 
    const [isModal,     setIsModal]     = useState<boolean>(false); 
    const [bookList,    setBookList]    = useState<[]>([]);
    const [newBook,     setNewBook]     = useState<Book>({
        title: "",
        shortDescription: "",
        author: "",
        year: 0
    })

    const searchBookHandler = async () => {

    }

    return (
        <>
            <div className='container mt-5'>
                <h3>Search Book</h3>
                <form className='row g-3' onSubmit={searchBookHandler}>
                    <div className='col-auto'>
                        <input
                            type="text"
                            value={searchBook}
                            className="form-control" id="searchBook"
                            onChange={(e) => setSearchBook(e.target.value)}
                            placeholder="Search Book" />
                        </div>
                    <div className='col-auto'>
                        <button type="submit" className="btn btn-primary mb-3">Search</button>
                    </div>
                </form>

                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h3>Books List</h3>
                    <button type="button" className='btn btn-primary btn-sm' onClick={() => setIsModal(true)}>Add New Book</button>

                </div>

                <div className='row'>
                    <div className='col-sm-12 col-md-4 col-lg-4'>
                        <div className="card mb-4" style={{ "width": "24rem" }}>
                            <div className="card-header">
                                Hydrology
                            </div>
                            <div className="card-body">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id voluptates in sapiente aliquid est, tempore debitis officiis magnam velit vitae, enim quidem dignissimos officia asperiores autem, assumenda ullam esse ea? Atque voluptate minima ullam ea. Consequuntur aliquid alias cupiditate culpa perspiciatis placeat illo inventore ipsam aperiam. Laborum veniam vitae molestiae?
                            </div>

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Author : Obei</li>
                                <li className="list-group-item">Year: 1998</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Book