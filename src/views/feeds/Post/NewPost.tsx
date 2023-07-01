import React from 'react'

function NewPost() {
    return (
        <>
            <div className='card mb-3'>
                <div className='p-2'>
                    {/* <div className=''>
                        <h5 className='text-main'>
                            โพสต์
                        </h5>
                    </div> */}
                    <div className='d-flex align-items-center'>
                        <div className="img-mask mask-1 px-1">
                            <img src="/nonpawiz.png" alt="" style={{ width: "40px" }} />
                        </div>
                        <div className='px-1  w-100' style={{ lineHeight: "15px" }}>
                            <div className="">
                                <input id="textInputExample" type="text" className="form-control p-1" placeholder='คุณกำลังคิดอิหยังอยู่' />
                                {/* <textarea id="textareaExample" className="form-control" placeholder="คุณกำลังคิดอะไรอยู่" style={{ height: "50px" }}></textarea> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewPost