import React from 'react'

function Conversation() {
    return (
        <div className='bg-chat' style={{ height: "78vh" }}>
            <div className='text-center pt-3'>
                <span className='badge bg-light'>วันนี้</span>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <div className='d-flex p-1 mb-0' style={{ lineHeight: "20px" }}>
                        <div className="img-mask mask-1 px-1">
                            <img src="/nonpawiz.png" alt="" style={{ width: "20px" }} />
                        </div>
                        <div className='px-1'>
                            <div className='bg-white p-1 rounded'>
                                <span className='text-navy fs-16 flex-wrap'>
                                    สวัสดีครับ ผมชื่อนายนนท์ปวิธ ทนทอง
                                </span>
                            </div>
                            <span className='text-muted fs-12'>09.00</span>
                        </div>
                    </div>
                </div>
                <div className='col-6'></div>
            </div>
            <div className='row'>
                <div className='col-6'></div>
                <div className='col-6'>
                    <div className='d-flex justify-content-end p-1 mb-0' style={{ lineHeight: "20px" }}>
                        <div className='px-1'>
                            <div className='bg-white p-1 rounded'>
                                <span className='text-navy fs-16 flex-wrap'>
                                    สวัสดีจ้าน้อง
                                </span>
                            </div>
                            <div className='text-end'>
                                <span className='text-muted fs-12'>09.01</span>
                            </div>
                        </div>
                        <div className="img-mask mask-1 px-1">
                            <img src="/nonpawiz.png" alt="" style={{ width: "20px" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <div className='d-flex p-1 mb-0' style={{ lineHeight: "20px" }}>
                        <div className="img-mask mask-1 px-1">
                            <img src="/nonpawiz.png" alt="" style={{ width: "20px" }} />
                        </div>
                        <div className='px-1'>
                            <div className='bg-white p-1 rounded'>
                                <span className='text-navy fs-16 flex-wrap'>
                                    ครับผมครับ
                                </span>
                            </div>
                            <span className='text-muted fs-12'>09.05</span>
                        </div>
                    </div>
                </div>
                <div className='col-6'></div>
            </div>

        </div>
    )
}

export default Conversation