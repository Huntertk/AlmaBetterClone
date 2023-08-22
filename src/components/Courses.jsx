import React, { useState } from 'react'
import './courses.scss'
import { courseData, btnData } from './courseData'
import { MdOutlineWatchLater } from 'react-icons/md';
import { RiGraduationCapLine } from 'react-icons/ri';
import { FiMonitor } from 'react-icons/fi';
import { GoTrophy } from 'react-icons/go';

const Courses = () => {
    const [isActive, setIsActive] = useState(null)
    const [data, setData] = useState(courseData)
    
    const handleActiveBtn = (name) => {
            setIsActive('active')
    }
    const handleFilterBtn = (type) => {
        console.log(type);
        const filterdData = courseData.filter((item) => {
            return item.type === type
        })
        console.log(filterdData);
        setData(filterdData)
    }
  return (
    <section className='homeCourseSectionMainContainer'>
      <div className="BtnCourseContainer">
        <h2 className="homeCourseTitle">Featured Courses</h2>
        <p className="homeCourseDesc">
            The most hands-on, practical, and intensive coding-led courses to fulfill your ambitions.
        </p>
        <div className="courseBtnContainer">
        <button className={`courseBtn ${isActive === null ? 'active' : null}`} onClick={() => {
            setData(courseData)
            setIsActive(null)
            }}>All</button>
        {
            btnData.map((name) =>{
                return <button 
                key={name.id} 
                className={`courseBtn ${name.title === data[0].type ? isActive: null}`} 
                onClick={() => {
                    handleFilterBtn(name.title)
                    handleActiveBtn(name.title)
                }   
                    }
                >{name.title}</button>
            })
        }
        </div>
      </div>

      <div className="courseCardMainContainer">
        {data.map((data) => {
            return <div className="courseCardContainer" key={data.id}>
            <h2 className='courseCardTitle'>{data.title}</h2>
            <div className="underline"></div>
            <p className='courseCardDesc'>{data.desc}</p>
        <div className="courseIconContainer">
            <div className="icon">
                <MdOutlineWatchLater className="iconCourse" />
                <p className="courseIconText">{data.duration} Months</p>
            </div>
            <div className="icon">
                <RiGraduationCapLine className="iconCourse" />
                <p className="courseIconText">{data.forStudent}</p>
            </div>
            <div className="icon">
                <GoTrophy className="iconCourse" />
                <p className="courseIconText">100% Job Assurance</p>
            </div>

            <div className="icon">
                <FiMonitor className="iconCourse" />
                <p className="courseIconText">Part-time, online live classes</p>
            </div>
        </div>
            <button className='btn'>Explore Now</button>
        </div>
        })}
    
      </div>
    </section>
  )
}

export default Courses
