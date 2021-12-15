import React from 'react'
import s from './Pagination.module.css'

type PaginationPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
}
export const Pagination: React.FC<PaginationPropsType> = ({
                                                              totalUsersCount,
                                                              pageSize,
                                                              currentPage,
                                                              onPageChanged,
                                                          }) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize)

    const pages = []
    if (currentPage >= 1 && currentPage <= 5) {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
            if (pages.length === 10) break
        }
    }
    if (currentPage > 5) {
        for (let i = currentPage - 4; i <= pagesCount; i++) {
            pages.push(i)
            if (pages.length === 10) break
        }
    }

    return (
        <div className={s.pagination}>
            {
                pages.map(page => {
                    return (
                        <div key={page} className={s.page}>
                            <button
                                onClick={() => onPageChanged(page)}
                                className={`btn ${page === currentPage && s.selected}`}
                            >
                                {page}
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}