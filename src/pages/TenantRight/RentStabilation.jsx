import img from '../../assets/tenant-right/img7.jpeg'
import icon from '../../assets/tenant-right/icon7.png'
import pattern from '../../assets/pattern.png'
const RentStabilation = () => {
    return (
        <div className="max-w-6xl h-screen mx-auto flex flex-col lg:flex-row justify-center items-center gap-10"
            style={{
                backgroundImage: `url(${pattern})`,
            }}
        >
            <div className="w-3/5 flex flex-col justify-center ">
                <div className='w-14 h-14'>
                    <img className='w-full h-full' src={icon} alt={"disability protection"} />
                </div>
                <h1 className='text-5xl font-medium mt-5'>Rent Stabilization</h1>
                <p className='leading-snug text-gray-700 py-5'>
                    Tenants in rent stabilized apartments are entitled to required essential services and lease renewals, and may not be evicted except on grounds allowed by law. Almost half of all apartments in New York City are rent stabilized, which means that there is a limit on how much their rent can be raised each year.
                </p>

            </div>
            <div className="flex-1 flex justify-center items-center h-[35rem]">
                <img src={img} className='w-full h-full object-cover rounded-lg overflow-hidden' />
            </div>
        </div>
    )
}

export default RentStabilation