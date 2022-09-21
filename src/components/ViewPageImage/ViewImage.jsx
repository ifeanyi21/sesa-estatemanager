import React from 'react'

function ViewImage(props) {
    const UserImage = props.image
  return (
      <div className="p-2 h-32 relative" style={{backgroundColor:"#7D9EB4"}}>
            <div className="absolute top-16 left-10">
              <img
                src={UserImage}
                className="rounded-full w-36 h-36 object-cover"
                style={{ border: "3px solid #20B16A" }}
                alt={'user'}
              />
            </div>
          </div>
  )
}

export default ViewImage