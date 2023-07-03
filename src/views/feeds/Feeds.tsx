import React from 'react'
import NavBar from '../../Layouts/NavBar'
import { Link } from 'react-router-dom'
import NewPost from './Post/NewPost'

function Feeds() {
    return (
        <>
            <NavBar />
            <div className='container-fluid bg-primary py-2' style={{ height: "83vh" }}>
                <div className='row'>
                    <div className='col-md-3 d-none d-lg-block'>
                        <div className='px-1'>
                            <Link to="/sdas">
                                <div className='d-flex align-items-center fb-link p-1 mb-1'>
                                    <div className="img-mask mask-1 px-1">
                                        <img src="/nonpawiz.png" alt="" style={{ width: "40px" }} />
                                    </div>
                                    <div className='px-1'>
                                        <span>Nonpawit Thonthong</span>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/sdas">
                                <div className='d-flex align-items-center fb-link p-1 mb-0'>
                                    <div className='px-2'>
                                        <i className="uil uil-user fs-25 p-0"></i>
                                    </div>
                                    <div className='px-1'>
                                        <span>เพื่อน</span>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/sdas">
                                <div className='d-flex align-items-center fb-link p-1 mb-0'>
                                    <div className='px-2'>
                                        <i className="uil uil-users-alt fs-25 p-0"></i>
                                    </div>
                                    <div className='px-1'>
                                        <span>กลุ่ม</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='border-top-light my-2'></div>
                    </div>
                    <div className='col-md-6'>
                        <NewPost />
                        <div className='card mb-4'>
                            <div className='d-flex align-items-center justify-content-between fb-link p-1'>
                                <div className='d-flex align-items-center'>
                                    <div className="img-mask mask-1 px-1">
                                        <img src="/nonpawiz.png" alt="" style={{ width: "40px" }} />
                                    </div>
                                    <div className='px-1' style={{ lineHeight: "15px" }}>
                                        <span>Nonpawit Thonthong</span><br />
                                        <span className='text-muted fs-14'>now</span>
                                    </div>
                                </div>
                                <div>
                                    <button className='btn btn-light text-main p-1 border-0 px-3'>
                                        <i className="uil uil-ellipsis-h"></i>
                                    </button>
                                </div>
                            </div>
                            <div className='px-2'>
                                <span>สวัสดีครับ</span>
                            </div>
                            <img src="/demo.jpg" alt="" style={{ height: "350px", objectFit: "cover" }} />
                            <div className='p-2 pt-0'>
                                <div className='d-flex justify-content-between py-1'>
                                    <div>
                                        <i className="uil uil-thumbs-up"></i>
                                        <span> 5 คนถูกใจ</span>
                                    </div>
                                    <div>
                                        <span> 2 ความคิดเห็น</span>
                                    </div>
                                </div>
                                <div className='card mb-2'>
                                    <div className='row'>
                                        <div className='col-6 text-center'>
                                            <div className='fb-action py-1 w-100'>
                                                <i className="uil uil-thumbs-up"></i>
                                                <span> ถูกใจ</span>
                                            </div>
                                        </div>
                                        <div className='col-6 text-center'>
                                            <div className='fb-action py-1 w-100'>
                                                <i className="uil uil-comment-alt"></i>
                                                <span> แสดงความคิดเห็น</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='d-flex align-items-center'>
                                        <div className="img-mask mask-1 px-1">
                                            <img src="/nonpawiz.png" alt="" style={{ width: "30px" }} />
                                        </div>
                                        <div className='px-1  w-100' style={{ lineHeight: "15px" }}>
                                            <div className="">
                                                <input id="textInputExample" type="text" className="form-control p-1" placeholder='แสดงความคิดเห็น' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 d-none d-lg-block'>
                        <div className='px-1'>
                            <div className='d-flex justify-content-between mb-2'>
                                <span className='fs-16'>คำขอเป็นเพื่อน</span>
                                <Link to="/sdas" className=''>
                                    <span className='fs-16'>ดูทั้งหมด</span>
                                </Link>
                            </div>
                            <div className='d-flex justify-content-between fb-link'>
                                <div className='d-flex p-1'>
                                    <div className="img-mask mask-1 px-1">
                                        <img src="/nonpawiz.png" alt="" style={{ width: "40px" }} />
                                    </div>
                                    <div className='px-1'>
                                        <span>Nonpawit Thonthong</span>

                                        <div className='d-flex'>
                                            <button className='btn bg-btn-ok text-light border-0 p-0 px-3 mx-1 w-100'>ยืนยัน</button>
                                            <button className='btn bg-btn-cancel text-navy border-0 p-0 px-3 mx-1 w-100'>ลบ</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2'>
                                    <span>1 วัน</span>
                                </div>
                            </div>
                        </div>
                        <div className='border-top-light my-2'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feeds