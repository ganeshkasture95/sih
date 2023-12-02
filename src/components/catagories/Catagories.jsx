import React from 'react';
import { GiWhiteBook } from "react-icons/gi";
import './catagories.css';


const Catagories = () => {
    return (
        <section className="catagories">
            <div className="container catagories__container">
                <div className="catagories__left">
                    <h1>Catagories</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam veritatis minima autem, porro accusantium, voluptatibus doloribus nisi labore harum temporibus sequi nulla, optio deleniti fugit exercitationem enim animi non dolor eveniet excepturi? Aspernatur.</p>
                    <a href="#" class="btn">Learn More</a>
                </div>
                <div className="categories__right">

                    <article class="category">
                        <span className="category__icon">
                            <GiWhiteBook />

                        </span>
                        <h5>
                            Study Material
                        </h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, temporibus?</p>
                    </article>
                    <article class="category">
                        <span className="category__icon">
                            <GiWhiteBook />

                        </span>
                        <h5>
                            Study Material
                        </h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, temporibus?</p>
                    </article>
                    <article class="category">
                        <span className="category__icon">
                            <GiWhiteBook />

                        </span>
                        <h5>
                            Study Material
                        </h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, temporibus?</p>
                    </article>
                    <article class="category">
                        <span className="category__icon">
                            <GiWhiteBook />

                        </span>
                        <h5>
                            Study Material
                        </h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, temporibus?</p>
                    </article>
                    <article class="category">
                        <span className="category__icon">
                            <GiWhiteBook />

                        </span>
                        <h5>
                            Study Material
                        </h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, temporibus?</p>
                    </article>
                    <article class="category">
                        <span className="category__icon">
                            <GiWhiteBook />

                        </span>
                        <h5>
                            Study Material
                        </h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, temporibus?</p>
                    </article>
                   


                </div>
            </div>
        </section>







    )
}

export default Catagories