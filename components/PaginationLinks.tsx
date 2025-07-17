import Link from "next/link";

type PaginationLinkProps = {
  currentPage: number;
  hasMore: boolean;
  basePath: string;
};

export default function PaginationLinks({ currentPage, hasMore, basePath}: PaginationLinkProps) {
  return (
    <div className="pagination-container">
      {currentPage > 1 && (
        <Link
          href={`${basePath}?page=${currentPage - 1}`}
          className="pagination-button text-md"
        >
          Previous
        </Link>
      )}

      <div className="pagination-divider"></div>

      {hasMore && (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="pagination-button text-md"
        >
          Next
        </Link>
      )}
    </div>
  )
}
