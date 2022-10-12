import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <>
      <h2 className="blogs-title">
        <span>C</span>oder's <span>B</span>logs <span>H</span>ouse!
      </h2>
      <div className="blogs-container">
        <article
          class="blogs"
          data-aos="zoom-in-right"
          data-aos-duration="2000"
        >
          <h5 class="blogs-Que">1: What is the purpose of React Router?</h5>
          <p class="blogs-Ans">
            React router is a library to navigate among the different pages of a
            website. That means, it enables the navigational system of a
            website.
          </p>
          <p class="blogs-Ans">
            The main components of react router are:
            <ul>
              <li>BrowserRouter</li>
              <li>Routes</li>
              <li>Route</li>
              <li>Link</li>
            </ul>
          </p>
        </article>
        <article
          class="blogs"
          data-aos="zoom-in-left"
          data-aos-duration="2000"
        >
          <h5 class="blogs-Que">2: How does context API works?</h5>
          <p class="blogs-Ans">
            Context is primarily used when some data needs to be accessible by
            many components at different nesting levels. It makes the components
            reusable.
          </p>
          <p class="blogs-Ans">
            Another way to pass data from a component to another by props. But
            sometimes it takes much time and code to implement it. Context API
            makes it much easier. We can send data without as any component's
            prop.
          </p>
        </article>
        <article
          class="blogs"
          data-aos="zoom-in-right"
          data-aos-duration="2000"
        >
          <h5 class="blogs-Que">
            3: Why do we use it and How does useRef works?
          </h5>
          <p class="blogs-Ans">
            The useRef Hook allows you to persist values between renders. It can
            be used to store a mutable value that does not cause a re-render
            when updated. It can be used to access a DOM element directly.
          </p>
          <p class="blogs-Ans">
            At first we need to import useRef from React and then to initialize
            the useRef.
          </p>
          <p class="blogs-Ans">
            We generally use it when we need to manage:
            <ul>
              <li>focus</li>
              <li>text selection</li>
              <li>trigger imperative interaction</li>
              <li>integrating third-party libraries</li>
            </ul>
          </p>
        </article>
      </div>
    </>
  );
};

export default Blogs;
