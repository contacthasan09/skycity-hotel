import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="py-32 text-center">
      <div className="container-max">
        <p className="eyebrow mb-3">404</p>
        <h1 className="section-title mb-4">Page Not Found</h1>
        <p className="body-text mb-8">The page you're looking for doesn't exist or has moved.</p>
        <Link to="/" className="btn-book">Return Home</Link>
      </div>
    </section>
  )
}