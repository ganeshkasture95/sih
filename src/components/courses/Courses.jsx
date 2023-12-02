import React from 'react'
import course1Img from '../../assests/images/course1.jpg'
import C from '../../pages/CourcesPage'
import './courses.css'

const Courses = () => {
    return (

        <section className="courses">
            <h2>Our Popular Mentors</h2>
            
            <div className="container courses__container">
                <article className="course">
                    <div className="course___image">
                        <img src={course1Img} alt="courses-image-1" />
                    </div>
                    <div className="course__info">
                    <h4>Saurabh Bhasker</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi asperiores vero ipsa commodi beatae, debitis sunt in facilis officia placeat.</p>
                    <a href={C} class="btn btn-primary">Learn more</a>
                
                    </div>
                </article>
                <article className="course">
                    <div className="course___image">
                        <img src={course1Img} alt="courses-image-1" />
                    </div>
                    <div className="course__info">
                    <h4>Saurabh Bhasker</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi asperiores vero ipsa commodi beatae, debitis sunt in facilis officia placeat.</p>
                    <a href={C} class="btn btn-primary">Learn more</a>
                
                    </div>
                </article>

                <article className="course">
                    <div className="course___image">
                        <img src={course1Img} alt="courses-image-1" />
                    </div>
                    <div className="course__info">
                    <h4>Saurabh Bhasker</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi asperiores vero ipsa commodi beatae, debitis sunt in facilis officia placeat.</p>
                    <a href={C} class="btn btn-primary">Learn more</a>
                    </div>
                </article>

               




            </div>
        </section>





    )
}

export default Courses