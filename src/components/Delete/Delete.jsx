import { MdDeleteOutline } from "react-icons/md";

const Delete = ({handleDelete}) => {
    return (
        <>
        <button onClick={handleDelete} style={{backgroundColor:'rgba(235, 87, 87, 1)',fontSize:'12px',
        paddingBlock:'15px',paddingInline:'30px',color:'white',fontWeight:'600',letterSpacing:'1px',
        border:"none",borderRadius:'12px',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',marginLeft:'445px',marginTop:'20px'}}>
        <MdDeleteOutline color='white' fontSize='24px' margin='0px'/>
        Delete all</button>
        </>

    );
}

export default Delete;
