import {AiFillStar} from 'react-icons/ai'
function MovieCard({medium_cover_image,title_long,rating,year,onClick}) {
    return(
        <div onClick={onClick} className="md:w-44 w-36 mr-4 mb-5 cursor-pointer bg-slate-700 p-3 rounded-xl hover:-translate-y-3 transition-all duration-100">
            <img className='rounded-lg' src={medium_cover_image} alt="" loading="lazy" />
            <div className='mt-2'>
                <h1 className='text-gray-100 text-md truncate font-medium' title={title_long} > {title_long}</h1>         
              <div className='flex items-center space-x-2'>
              <div className='border border-orange-400 text-orange-500 flex items-center w-fit p-[3px] rounded text-xs space-x-1 mt-1'>
                    <AiFillStar size={15}/>
                    <span>
                        {rating}
                    </span>
                </div>
                <span className='text-xs text-gray-500'>
                    {year}
                </span>
              </div>
            </div>

        </div>
    )
}

export default MovieCard