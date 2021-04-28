import React from 'react'

const Store = ({filePath, alt}) =>{
return(
    <React.Fragment>
        <div>
            <img src={filePath} alt={alt} style={{width:200, height:70}}/>
        </div>
   </React.Fragment>
)
}

export default Store