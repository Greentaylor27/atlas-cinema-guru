'use client'

type PaginationButtonProps = {
  currentPage: number;
  hasMore: boolean;
  onPageChange: (newPage: number) => void;
};


export default function PaginationButtons({ currentPage, hasMore, onPageChange }: PaginationButtonProps) {

  return (
    <div className="pagination-container">
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="pagination-button text-md disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Previous
        </button>
      )}

      <div className="pagination-divider"></div>

      {hasMore && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="pagination-button text-md disabled:opacity-50"
          disabled={!hasMore}
        >
          Next
        </button>
      )}
    </div>
  );
}
