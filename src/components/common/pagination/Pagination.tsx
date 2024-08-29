// @flow
import * as React from 'react';
import styles from 'components/common/pagination/Pagination.module.scss'

type PaginationProps = {
    pagesCount: number
    currentPage: number
    onPageClick: (pageNumber: number) => void
};

export const Pagination = ({pagesCount, currentPage = 1, onPageClick}: PaginationProps) => {

    const paginationButtonCount = 7;
    const leftRightButtonsCount = Math.floor(paginationButtonCount / 2);
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
        if(currentPage - leftRightButtonsCount > 1 && pagesCount > paginationButtonCount) {
            pageNumbers.push(<span key={'startDots'} className={styles.page + ' ' + styles.dots}>...</span>);
        }
        const preStart = currentPage - leftRightButtonsCount > 0 ? currentPage - leftRightButtonsCount : 1;

        const end = pagesCount <= paginationButtonCount ? pagesCount : currentPage + leftRightButtonsCount < pagesCount
            ? currentPage + leftRightButtonsCount + (preStart === 1
            ? (leftRightButtonsCount + 1 - currentPage)
            : 0)
            : pagesCount;

        let start = currentPage + leftRightButtonsCount < pagesCount ? preStart : currentPage - leftRightButtonsCount > 0 ? preStart - leftRightButtonsCount + (pagesCount - currentPage) : 1 ;
        start = start < 1 ? 1 : start;

        for (let i = start; i <= end; i++) {
            pageNumbers.push(
                <button key={i} className={i === currentPage ? `${styles.page} ${styles.selectedPage}` : styles.page}
                        onClick={() => onPageClickHandler(i)}>{i}</button>);
        }
        if(currentPage + 3 < pagesCount && end !== pagesCount) {
            pageNumbers.push(<span key={'endDots'} className={styles.page + ' ' + styles.dots}>...</span>);
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