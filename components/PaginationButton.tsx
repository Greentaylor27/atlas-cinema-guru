type PaginationButtonProps = {
  currentPage: number;
  isLastPage: boolean;
}
export default function PaginationButtons({ currentPage, isLastPage }: PaginationButtonProps) {
  const prevPage = currentPage > 1 ? currentPage - 1 : 1;
  const nextPage = currentPage + 1;

  return (
    <div className="pagination-container">
      <a
        href={`?page=${prevPage}`}
        className="pagination-button text-md"
        aria-disabled={currentPage === 1}
        tabIndex={currentPage === 1 ? -1 : 0}
      >
        Previous
      </a>

      <div className="pagination-divider"></div>

      <a
        href={`?page=${nextPage}`}
        className="pagination-button text-md"
        aria-disabled={isLastPage}
        tabIndex={isLastPage ? -1 : 0}
      >
        Next
      </a>
    </div>
  );
}
