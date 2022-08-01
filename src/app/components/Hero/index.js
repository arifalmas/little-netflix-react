import { useState } from 'react';
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { TbX } from 'react-icons/tb'
import React from "react";
import Modal from 'react-modal';


// Modal.setAppElement('button');


function Hero() {

    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (


        // <div className="relative">
        //     <img className="rounded-xl  " src="https://4creativehds.files.wordpress.com/2017/03/kung-fu-panda-wallpapers-003-e1490624697282.jpg?w=1440" loading="lazy" alt="" />
        //     <div className="absolute  md:text-xs md:top-[140px] md:left-10 top-5  left-5 sm:text-xs sm:top-[30px]">
        //         <h1 className=" font-sans md:text-6xl text-4xl font-bold text-green-600  ">Kung Fu <span className='text-white'>Panda</span> </h1>
        //         <button className=' bg-red-400 flex  items-center sm:p-3 md:p-3 p-1 rounded-lg border-2 border-red-500 text-white mt-5' ><AiOutlinePlayCircle /><span className='ml-2' >Watch Now</span></button>
        //     </div>
        // </div>

        <div>
         <div className="relative ">
            <img className="rounded-xl  " src="https://4creativehds.files.wordpress.com/2017/03/kung-fu-panda-wallpapers-003-e1490624697282.jpg?w=1440" loading="lazy" alt="" />
            <div className="absolute  md:text-xs md:top-[140px] md:left-10 top-5  left-5 sm:text-xs sm:top-[30px]">
            <h1 className=" font-sans md:text-6xl text-4xl font-bold text-green-600  ">Kung Fu <span className='text-white'>Panda</span> </h1>
            <button className=' bg-green-600 flex  items-center sm:p-3 md:p-3 p-1 rounded-lg border-2 border-white-500 text-white mt-5' onClick={openModal} ><AiOutlinePlayCircle /><span className='ml-2' >Watch Now</span></button>
            </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className='bg-gray-800  h-[100vh] z-[999999]'
            >
                <h2 className='ml-[100px] pt-2 sm:ml-[500px] text-3xl' ref={(_subtitle) => (subtitle = _subtitle)}>Hello 😎 </h2>
                <button className='ml-[270px]  sm:ml-[1350px] pb-5 text-green-500' onClick={closeModal}><TbX size={30} /></button>

            <div > 
                <iframe  className='w-[300px] h-[240px] md:w-[1080px] md:h-[720px] md:ml-[400px] sm:h-[320px] sm:w-[480px] pb-12 z-[999999]' src="https://www.youtube.com/embed/10r9ozshGVE" title="Kung Fu Panda 3 | Official Trailer #1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowfullscreen"> </iframe>
        
            </div>
            </Modal>
        </div>







    )
}


export default Hero




