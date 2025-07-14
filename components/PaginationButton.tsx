export default function PaginationButtons() {
  return (
    <div className="pagination-container">
      <button className="pagination-button">
        Previous
      </button>
      <div className="pagination-divider"></div>
      <button className="pagination-button text-md">
        Next
      </button>
    </div>
  );
}
