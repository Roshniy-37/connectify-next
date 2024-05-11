import React from 'react'

function page({ params }: { params: { username: string } }) {
  return (
    <div>
      I am {params.username}
    </div>
  )
}

export default page
