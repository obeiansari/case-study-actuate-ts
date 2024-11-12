import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

interface Book {
    title: string,
    shortDescription: string,
    author: string,
    year: number     
}

interface SearchBookFormData {
    searchBook: string;
}

const Book: React.FC = () => {

    const [isModal,     setIsModal]     = useState<boolean>(false); 
    const [bookList,    setBookList]    = useState<[]>([]);
    const [newBook,     setNewBook]     = useState<Book>({
        title: "",
        shortDescription: "",
        author: "",
        year: 0
    })

    const searchBookForm = useForm<SearchBookFormData>()

    const { register, handleSubmit, formState } = searchBookForm

    const { errors } = formState;

    const searchBookHandler = async (data: SearchBookFormData) => {
        console.log(data)
    }

    return (
        <>
            <div className='container mt-5'>
                <h3>Search Book</h3>
                <form className='row g-3' onSubmit={handleSubmit(searchBookHandler)}>
                    <div className='col-auto'>
                        <input
                            type="text"
                            {...register('searchBook', {
                                required: {
                                    value: true,
                                    message: 'search string is required'
                                }
                            })}
                            className="form-control" 
                            aria-invalid={!!errors.searchBook}
                            aria-describedby="searchBookError"
                            id="searchBook"
                            placeholder="Search Book" />
                        {errors.searchBook && (
                            <span className='error'>{errors.searchBook?.message}</span>
                        )}
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