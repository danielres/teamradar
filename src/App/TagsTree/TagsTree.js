import React from 'react'

const TagsTree = ({ tags }) => (
  <ul>
    {tags.map(t => (
      <li key={t.id}>
        {t.name}
        {t.tags && <TagsTree tags={t.tags} />}
      </li>
    ))}
  </ul>
)

export default TagsTree
