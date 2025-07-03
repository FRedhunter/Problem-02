
import { useState } from 'react'
import discussionsData from '../data/Data'
import Discussion from './Discussion'

export default function Discussions() {
  const [discussions] = useState(discussionsData)

  return (
    <ul className='divide-y divide-gray-200'>
      {discussions.map((item, index) => (
        <Discussion
          key={item.id}
          title={`Tartışma konusu #${index + 1}`}
          author={item.author}
          createdAt={item.createdAt}
        />
      ))}
    </ul>
  )
}
