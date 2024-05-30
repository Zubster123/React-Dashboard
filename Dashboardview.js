import React from 'react'

const Dashboardview = () => {
  return (
    <div className='p-8'>
        <div className='pl-[50px] pt-[30px] pb-[40px]'>
            <h1 className='text-[30px]'>Students</h1>
        </div>
        <div className='pl-[50px] flex justify-start gap-[50px]'>
            <div className='px-[25px] bg-blue-300 opacity-35 h-[400px] w-[350px] shadow-lg rounded-lg'>
                <form>
                    <div className='mb-4'>
                        <label className='pt-5 block text-black font-bold mb-2' htmlFor='firstName'>
                            First Name
                        </label>
                        <input id='firstName' type='text' placeholder='Example Name' 
                        classname='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400' />
                    </div>
                </form>

            </div>
            <div className='bg-white h-[170px] w-[650px] shadow-lg rounded-[10px] border-[2px] border-grey'>
                <div className="bg-blue-200 px-[50px] py-[15px] flex items-center justify-between border-b-[2px] border-grey">
                    <div>
                        <h2 className='text-purple-400'>First Name</h2>
                    </div>
                    <div>
                        <h2 className='text-purple-400'>Family Name</h2>
                    </div>
                    <div>
                        <h2 className='text-purple-400'>Date of Birth</h2>
                    </div>
                </div>
                <div className="px-[50px] py-[15px] flex items-center justify-between border-b-[2px] border-grey">
                    <div>
                        <h2 className='text-black'>John</h2>
                    </div>
                    <div>
                        <h2 className='text-black'>Doe</h2>
                    </div>
                    <div>
                        <h2 className='text-black'>2003-12-12</h2>
                    </div>
                </div>
                <div className="px-[50px] py-[15px] flex items-center justify-between border-b-[2px] border-grey">
                    <div>
                        <h2 className='text-black'>John</h2>
                    </div>
                    <div>
                        <h2 className='text-black'>White</h2>
                    </div>
                    <div>
                        <h2 className='text-black'>1999-02-03</h2>
                    </div>
                </div>
            </div>
            


        </div>


    </div>
  )
}

export default Dashboardview