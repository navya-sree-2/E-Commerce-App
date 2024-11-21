import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
    return (
        <div>
            <div className='text-2xl text-center pt-8 border-t'>
                <Title text1={'ABOUT'} text2={'US'}/>
            </div>
            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                    <p>Loreum ipsum dolor sit amet consectetur adipisicing elit. Debitis tempora iste cumque labore beatae suscipit maiores voluptatibus dolore provident totam, quia repellat esse dicta corrupti saepe modi voluptatum deserunt iusto!  Quisquam, voluptates.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis tempora iste cumque labore beatae suscipit maiores voluptatibus dolore provident totam, quia repellat esse dicta corrupti saepe modi voluptatum deserunt iusto!</p>
                    <b className='text-gray-800'>Our Mission</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti vero quam omnis incidunt voluptates repellat voluptatum molestiae possimus et, quidem voluptatibus eaque distinctio facilis molestias. Dolor assumenda recusandae quia?</p>
                </div>
            </div>
            <div className='text-xl py-4'>
                <Title text1={'WHY'} text2={'CHOOSE US'}/>
            </div>
            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Quality Assurance:</b>
                    <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our high standards.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Convenience:</b>
                    <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, you can shop with confidence.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Exceptional Customer Service:</b>
                    <p className='text-gray-600'>Our team of dedicated professionals is here to help you the way, ensuring you receive the best possible service.</p>
                </div>
            </div>
            <NewsLetterBox />
        </div>
    )
}

export default About
