import React from 'react';
import img from '../../assets/tenant-right/img6.jpeg';
import icon from '../../assets/tenant-right/icon6.png';
import pattern from '../../assets/pattern.png';
import { motion } from 'framer-motion';
const SafteyAndRepair = () => {
    return (
        <motion.div className="max-w-6xl min-h-screen mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 overflow-hidden"
            style={{
                backgroundImage: `url(${pattern})`,
            }}
        >
            <div className="flex-1 flex justify-center items-center h-[35rem]">
                <img src={img} className='w-full h-full object-cover rounded-lg overflow-hidden' alt="Discrimination" />
            </div>
            <div className="w-full lg:w-3/5 flex flex-col justify-center ">
                <div className='w-14 h-14'>
                    <img className='w-full h-full' src={icon} alt={"discrimination"} />
                </div>
                <h1 className='text-4xl md:text-5xl font-medium mt-5'>Safety and Repairs</h1>
                <p className='leading-snug text-gray-700 py-5'>
                    The Fair Housing Act dictates that NYC tenants cannot be denied from renting or charged more in rent based on a list of protected characteristics including disability, gender identity, sexual orientation, race, religion, source of income, age, citizenship status, and more
                </p>
                <p className='leading-snug text-gray-700'>
                    What’s more, federal nondiscrimination laws demand that landlords grant requests for reasonable housing accommodations and modifications. You can report discrimination to the New York City Commission on Human Rights (NYCCHR) <a className='text-blue-500 underline' target='_blank' href='https://www.nyc.gov/site/cchr/about/report-discrimination.page'></a> on their website here. You can also dial 311 and say {"human rights"} or call NYCCHR directly at 212-416-0197.
                </p>
            </div>
        </motion.div>
    );
};

export default SafteyAndRepair;
