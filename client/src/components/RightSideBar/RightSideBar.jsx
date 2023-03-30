import React from 'react'
import './RightSideBar.css'
import Widget from './Widget'
import WidgetTags from './WidgetTags'

const RightSideBar = () => {
  return (
      <div className = 'right-sidebar'>
          <Widget/>
          <WidgetTags/>
      </div>
    )
}

export default RightSideBar