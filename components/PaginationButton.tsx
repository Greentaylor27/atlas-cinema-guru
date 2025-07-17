'use client';

type PaginationButtonProps = {
  currentPage: number;
  isLastPage: boolean;
  onPageChange: (page: number) => void;
};


export default function PaginationButtons({ currentPage, isLastPage, onPageChange }: PaginationButtonProps) {
  const prevPage = currentPage > 1 ? currentPage - 1 : 1;
  const nextPage = currentPage + 1;

  return (
    <div className="pagination-container flex gap-4 items-center">
      <button
        onClick={() => onPageChange(prevPage)}
        className="pagination-button text-md disabled:opacity-50"
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <div className="pagination-divider"></div>

      <button
        onClick={() => onPageChange(nextPage)}
        className="pagination-button text-md disabled:opacity-50"
        disabled={isLastPage}
      >
        Next
      </button>
    </div>
  );
}
