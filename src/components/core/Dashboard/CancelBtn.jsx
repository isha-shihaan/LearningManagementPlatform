import React from 'react'
import { useNavigate } from 'react-router-dom';

const CancelBtn = () => {

    const navigate = useNavigate();

  return (
    <button onClick={ () => navigate("/dashboard/my-profile") } className='font-semibold text-base text-black border border-black  bg-white py-2 px-6 rounded-lg hover:bg-[#002868] hover:border-[#002868]  hover:text-white ' >
        Cancel
    </button>
  )
}

export default CancelBtn;