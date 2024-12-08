export default function ImageGallery() {
  return (
    <div className="container py-4">
      <div className="row g-3">
        <div className="col-12 col-md-4">
          <img
            src="https://placehold.co/300x300"
            alt="LEGO bricks"
            className="img-fluid w-100 h-100 object-fit-cover rounded"
            style={{ minHeight: '300px' }}
          />
        </div>
        <div className="col-12 col-md-4">
          <img
            src="https://placehold.co/300x300"
            alt="Digital interface presentation"
            className="img-fluid w-100 h-100 object-fit-cover rounded"
            style={{ minHeight: '300px' }}
          />
        </div>

        {/* Second row */}
        <div className="col-12 col-md-4">
          <img
            src="https://placehold.co/300x300"
            alt="Awards display"
            className="img-fluid w-100 h-100 object-fit-cover rounded"
            style={{ minHeight: '300px' }}
          />
        </div>
        <div className="col-12 col-md-4">
          <img
            src="https://placehold.co/300x300"
            alt="Stage presentation"
            className="img-fluid w-100 h-100 object-fit-cover rounded"
            style={{ minHeight: '300px' }}
          />
        </div>
        <div className="col-12 col-md-4">
          <img
            src="https://placehold.co/300x300"
            alt="Workspace environment"
            className="img-fluid w-100 h-100 object-fit-cover rounded"
          />
        </div>
      </div>
    </div>
  )
}
