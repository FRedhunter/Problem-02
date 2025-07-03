
import { useState } from 'react'
import discussionsData from '../data/Data'
import Discussion from './Discussion'

export default function Discussions() {
  const [discussions] = useState(discussionsData)

  return (
    <ul className='discussions divide-y divide-gray-200'>
      {discussions.map((item) => (
        <Discussion
          key={item.id}
          title={item.title}
          author={item.author}
          createdAt={item.createdAt}
        />
      ))}
    </ul>
  )
}
