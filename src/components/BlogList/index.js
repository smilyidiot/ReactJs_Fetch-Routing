// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {
    blogData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const convertedData = data.map(each => ({
      id: each.id,
      title: each.title,
      topic: each.topic,
      author: each.author,
      avatarUrl: each.avatar_url,
      imageUrl: each.image_url,
    }))

    this.setState({blogData: convertedData, isLoading: false})
    // console.log(data)
    // console.log(convertedData)
  }

  render() {
    const {blogData, isLoading} = this.state

    return (
      <div className="blog-list-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          blogData.map(item => <BlogItem blogData={item} key={item.id} />)
        )}
      </div>
    )
  }
}

export default BlogList
