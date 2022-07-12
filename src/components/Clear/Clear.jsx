import React from 'react'

export default function Clear() {
  return (
    <div style={{display:'flex',justifyContent:'space-between',marginTop:'20px'}}>
        <button style={{backgroundColor:'rgba(47, 128, 237, 0.8)',color:'white',
                        fontWeight:'600',padding:'10px',fontSize:'12px',
                        borderRadius:'6px',border:'none'}}>
                        Select all
        </button>
        <button style={{backgroundColor:'rgba(47, 128, 237, 0.8)',color:'white',
                        fontWeight:'600',padding:'10px',fontSize:'12px',
                        borderRadius:'6px',border:'none'}}>
                        Delete
        </button>
    </div>
  )
}
