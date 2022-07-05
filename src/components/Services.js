import React, { Component } from 'react'
import Title from './Title'
import {
  FaSnowboarding,
  FaHiking,
  FaShuttleVan,
  FaAvianex,
} from 'react-icons/fa'

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaSnowboarding />,
        title: 'Snowboarding',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, deleniti!',
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, deleniti!',
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, deleniti!',
      },
      {
        icon: <FaAvianex />,
        title: 'Flying Beyond',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, deleniti!',
      },
    ],
  }
  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}
