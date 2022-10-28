// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, topic, author, avatarUrl, imageUrl} = blogData

  return (
    <Link to={`blogs/${id}`} className="blog-item-link">
      <div className="blog-card">
        <img src={imageUrl} className="image" alt={`item ${id}`} />
        <div className="details-card">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-container">
            <img src={avatarUrl} alt={`avatar ${id}`} className="avatar-img" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
