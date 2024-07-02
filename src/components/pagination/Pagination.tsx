// @flow
import * as React from 'react';
import styles from './Pagination.module.scss'

type PaginationProps = {
    pagesCount: number
    currentPage: number
    onPageClick: (pageNumber: number) => void
};
export const Pagination = ({pagesCount, currentPage = 1, onPageClick}: PaginationProps) => {

    const onPageClickHandler = (pageNumber: number) => {
        onPageClick(pageNumber);
    }

    const onStartClickHandler = () => {
        onPageClick(1);
    }

    const onBackClickHandler = () => {
        onPageClick(currentPage - 1);
    }

    const onForwardClickHandler = () => {
        onPageClick(currentPage + 1);
    }

    const onEndClickHandler = () => {
        onPageClick(pagesCount);
    }

    const paginationGeneration = () => {
        const pageNumbers: React.ReactNode[] = [];
        if(currentPage - 3 > 1) {
            pageNumbers.push(<span className={styles.page + ' ' + styles.dots}>...</span>);
        }
        const preStart = currentPage - 3 > 0 ? currentPage - 3 : 1;
        const end = currentPage + 3 < pagesCount ? currentPage + 3 + (preStart === 1 ? 4 - currentPage : 0) : pagesCount;
        const start = currentPage + 3 < pagesCount ? preStart : preStart - 3 + (pagesCount - currentPage) ;

        for (let i = start; i <= end; i++) {
            pageNumbers.push(
                <button key={i} className={i === currentPage ? `${styles.page} ${styles.selectedPage}` : styles.page}
                        onClick={() => onPageClickHandler(i)}>{i}</button>);
        }
        if(currentPage + 3 < pagesCount) {
            pageNumbers.push(<span className={styles.page + ' ' + styles.dots}>...</span>);
        }
        return pageNumbers;
    }

    const isBackDisabled = currentPage === 1;
    const isForwardDisabled = currentPage === pagesCount

    return (
        <div className={styles.pagination}>
            <button onClick={onStartClickHandler} key={'start'} className={styles.page}
                    disabled={isBackDisabled}>&#171;</button>
            <button onClick={onBackClickHandler} key={'back'} className={styles.page} disabled={isBackDisabled}>&#60;</button>
            {paginationGeneration()}
            <button onClick={onForwardClickHandler} key={'forward'} className={styles.page} disabled={isForwardDisabled}>&#62;</button>
            <button onClick={onEndClickHandler} key={'end'} className={styles.page}
                    disabled={isForwardDisabled}>&#187;</button>
        </div>
    );
};