import React from 'react'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 'flowers',
      searchTerm: 'flowers',
    }
  }

  handleTabChange = tabName => {
    this.setState({
      activeTab: tabName,
      searchTerm: tabName,
    })
  }

  render() {
    const tabsData = [
      {
        name: 'flowers',
        images: [
          'https://res.cloudinary.com/dypseaxyj/image/upload/v1689837154/flowers1_swxfa3.jpg',
          'https://res.cloudinary.com/dypseaxyj/image/upload/v1689837477/flower2_o4jfx4.jpg',
          'https://res.cloudinary.com/dypseaxyj/image/upload/v1689837527/flower3_rorzgo.webp',
        ],
      },
      {
        name: 'mountains',
        images: ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'],
      },
      {name: 'beaches', images: ['beach1.jpg', 'beach2.jpg', 'beach3.jpg']},
      {name: 'cities', images: ['city1.jpg', 'city2.jpg', 'city3.jpg']},
    ]

    const {activeTab, searchTerm} = this.state

    return (
      <div className="app-container">
        <h1>Image Gallery</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder={`Search ${activeTab}...`}
            value={searchTerm}
            onChange={e => this.setState({searchTerm: e.target.value})}
          />
        </div>

        <div className="tabs">
          {tabsData.map(tab => (
            <button
              key={tab.name}
              className={activeTab === tab.name ? 'active' : ''}
              onClick={() => this.handleTabChange(tab.name)}
            >
              {tab.name.charAt(0).toUpperCase() + tab.name.slice(1)}
            </button>
          ))}
        </div>

        <div className="image-gallery">
          {/* Render images based on the active tab */}
          {tabsData
            .find(tab => tab.name === activeTab)
            .images.map((image, index) => (
              <img
                key={index}
                src={`images/${image}`}
                alt={`${activeTab} ${index + 1}`}
              />
            ))}
        </div>
      </div>
    )
  }
}

export default App
