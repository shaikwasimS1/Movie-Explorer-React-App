import React from 'react'

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <div className="card shadow p-5">
        <h1 className="display-1 text-danger">404</h1>
        <h2 className="mb-3">Page Not Found</h2>
        <p className="text-muted">
          Sorry, the page you are looking for does not exist.
        </p>

        <a href="/" className="btn btn-primary mt-3">
          Go Back Home
        </a>
      </div>
    </div>

  )
}

export default NotFound
