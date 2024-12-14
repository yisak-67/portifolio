import React, { useState } from "react";
import "./services.css";
import { FaArrowRight, FaTimes, FaRegEdit } from "react-icons/fa";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { CiGrid31 } from "react-icons/ci";
import { IoCodeSharp } from "react-icons/io5";

function Services() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <CiGrid31 className="services__icon" />
            <h3 className="services__title">
              Front-end <br /> Developer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More <FaArrowRight className="services__button-icon" />
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <FaTimes
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">Front-end developer</h3>
              <p className="services__modal-description">
                I specialize in front-end development, which encompasses the
                following areas:
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">
                    I develop responsive and interactive user interfaces.
                  </p>
                </li>

                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">
                    I write clean and maintainable front-end code.
                  </p>
                </li>

                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">
                    I implement front-end frameworks and libraries.
                  </p>
                </li>

                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">
                    I optimizing website performance.
                  </p>
                </li>

                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">
                    I stay updated with front-end trends and technologies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <FaRegEdit className="services__icon" />
            <h3 className="services__title">
              Back-end <br /> Developer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More <FaArrowRight className="services__button-icon" />
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <FaTimes
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">Back-end Developer</h3>
              <p className="services__modal-description">
                I specialize in back-end development, which encompasses the
                following areas:
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">
                    Designing and developing server-side logic.
                  </p>
                </li>

                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">Building RESTful APIs.</p>
                </li>

                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">
                    Working with databases.
                  </p>
                </li>

                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">
                    Integrating third-party services.
                  </p>
                </li>

                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">
                    Optimizing backend performance.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <IoCodeSharp className="services__icon" />
            <h3 className="services__title">
              Ui/Ux <br /> Designer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More <FaArrowRight className="services__button-icon" />
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <FaTimes
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">UI / UX Designer</h3>
              <p className="services__modal-description">
                I specialize in UI/UX, which encompasses the following areas:
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">
                    Crafting visually appealing interfaces.
                  </p>
                </li>

                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">
                    Implementing responsive and accessible designs.
                  </p>
                </li>

                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">
                    Applying user-centered design principles.
                  </p>
                </li>

                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">
                    Creating wireframes and prototypes.
                  </p>
                </li>

                <li className="services__modal-service grid">
                  <IoCheckmarkCircleOutline className="services__modal-icon" />
                  <p className="services__modal-info">
                    Keeping up with design trends and tools.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
