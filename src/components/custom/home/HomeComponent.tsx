import "../Login/LoginComponent.scss";
import "../../../assets/theme/custom-theme.scss";
import "./HomeComponent.scss";
import "primeicons/primeicons.css";
import React, { createRef, useEffect, useRef } from "react";
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import WhyImg from "../../../assets/img/why.png";
import HowImg from "../../../assets/img/how2.png";
import Feature1 from "../../../assets/img/feature/feature1.png";
import Feature2 from "../../../assets/img/feature/feature2.png";
import Feature3 from "../../../assets/img/feature/feature3.png";
import MetamaskImg from "../../../assets/img/timeline/metamask.png";
import { Messages } from "primereact/messages";
import { Message } from "primereact/message";
import { FormattedMessage, injectIntl } from "react-intl";
import { NavLink } from "react-router-dom";
import { Accordion, AccordionTab } from "primereact/accordion";

const HomeComponent = (props: any) => {
  const { intl } = props;

  const events1 = [
    {
      title: intl.formatMessage({ id: "homepage.timeline.step1" }),
      text: intl.formatMessage({ id: "homepage.timeline.step1.text" }),
      linkText: intl.formatMessage({ id: "homepage.timeline.step1.download" }),
      link: "https://metamask.io/",
      step: 1,
      icon: "pi pi-shopping-cart",
      color: "#F8D6B9",
      image: MetamaskImg,
    },
    {
      title: intl.formatMessage({ id: "homepage.timeline.step2" }),
      text: intl.formatMessage({ id: "homepage.timeline.step2.text" }),
      linkText: intl.formatMessage({ id: "homepage.timeline.step2.download" }),
      link: "/register",
      step: 2,
      icon: "pi pi-cog",
      color: "#F8D6B9",
    },
    {
      title: intl.formatMessage({ id: "homepage.timeline.step3" }),
      text: intl.formatMessage({ id: "homepage.timeline.step3.text" }),
      linkText: intl.formatMessage({ id: "homepage.timeline.step3.download" }),
      link: "/getter",
      step: 3,
      icon: "pi pi-shopping-cart",
      color: "#F8D6B9",
    },
  ];

  const roadmapFields = [
    {
      title: intl.formatMessage({ id: "homepage.roadmap.step1.title" }),
      text: intl.formatMessage({ id: "homepage.roadmap.step1.text" }),
      step: 1,
      icon: "pi pi-shopping-cart",
      color: "#00C59D",
    },
    {
      title: intl.formatMessage({ id: "homepage.roadmap.step2.title" }),
      text: intl.formatMessage({ id: "homepage.roadmap.step2.text" }),
      step: 2,
      icon: "pi pi-cog",
      color: "#00C59D",
    },
    {
      title: intl.formatMessage({ id: "homepage.roadmap.step3.title" }),
      text: intl.formatMessage({ id: "homepage.roadmap.step3.text" }),
      step: 3,
      icon: "pi pi-shopping-cart",
      color: "#F8D6B9",
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (inView1) {
      controls.start("visible");
    }
    if (inView2) {
      controls.start("visible");
    }
  }, [controls, inView, inView1, inView2]);

  const customizedMarker = (item: any) => {
    return (
      <span
        className="custom-marker p-shadow-2"
        style={{ backgroundColor: item.color }}
      >
        {/* <i className={item.icon}></i> */}
        <div className="bold">{item.step}</div>
      </span>
    );
  };

  const customizedContent = (item: any) => {
    return (
      <Card title={item.title} subTitle={item.subtitle}>
        {item.image && (
          <img
            src={item.image}
            onError={(e: any) =>
              (e.target.src =
                "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
            }
            alt={item.name}
            width={150}
            className="p-shadow-2"
          />
        )}
        <h6>{item.text}</h6>
        {item.link && (
          <a className="bold" href={item.link}>
            {item.linkText}
          </a>
        )}
        {/* <Button label="Read more" className="p-button-text"></Button> */}
      </Card>
    );
  };

  const featureContent = (imgPath: any, title?: string, subTitle?: string) => {
    //title: string, percentage: number
    return (
      <motion.div whileHover={{ scale: 1.2 }}>
        <div className="container features">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 p-2">
              <img src={imgPath} className="img-size" />
            </div>

            <div className="col-12 p-2">
              <div className="row justify-content-center">
                <h2 className="bold">{title}</h2>
              </div>
              <div className="row justify-content-center">
                <h4>{subTitle}</h4>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const headerTemplate = (title: string) => {
    return (
      <div className="bold">
        <h2>{title}</h2>
      </div>
    );
  };

  return (
    <div id="Login" className="background-primary">
      <div className="background-img">
        <div className="background-opacity">
          <div className="container custom-container">
            <div className="row full-height justify-content-center align-items-center">
              <div className="col-md-12 col-lg-8 justify-content-center text-center align-items-center full-height">
                <div className="main-title">
                  Il primo registro di animali su Blockchain
                </div>
                <div className="sub-title">
                  Sicuro, Semplice e Trasparente. Per padroni e veterinari
                </div>
              </div>
              <div className="col-sm-12 col-lg-6  text-center m-4">
                <NavLink className="p-button third m-2" to="/register">
                  {intl.formatMessage({ id: "homepage.button.register" })}
                </NavLink>
                <NavLink className="p-button third m-2" to="/getter">
                  {intl.formatMessage({ id: "homepage.button.getter" })}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Why */}
        <div className="background-primary" id="#why">
          <div className="row justify-content-around align-items-center mt-4 mb-4 pt-4 pb-4">
            <div className="col-lg-4 col-md-12 justify-content-center text-center align-items-center full-height">
              <motion.div
                ref={ref1}
                animate={controls}
                initial="hidden"
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -300 },
                }}
              >
                <div className="row justify-content-start align-items-center p-2">
                  <div className="main-title">
                    <FormattedMessage id="homepage.why.title"></FormattedMessage>
                  </div>
                  <div className="sub-paragraph">
                    <FormattedMessage id="homepage.why.text"></FormattedMessage>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="col-lg-6 col-md-12 justify-content-end text-center align-items-center full-height">
              <motion.div
                ref={ref2}
                animate={controls}
                initial="hidden"
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 300 },
                }}
              >
                <img src={WhyImg} className="img-size"></img>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div id="#features" className="features">
          <div className="row justify-content-around bordered-card pt-4 pb-4">
            <div className="col-lg-3 col-sm-10 p-1">
              {featureContent(
                Feature1,
                intl.formatMessage({ id: "homepage.feature.data.title" }),
                intl.formatMessage({ id: "homepage.feature.data.text" })
              )}
            </div>

            <div className="col-lg-3 col-sm-10 p-1">
              {featureContent(
                Feature2,
                intl.formatMessage({ id: "homepage.feature.track.title" }),
                intl.formatMessage({ id: "homepage.feature.track.text" })
              )}
            </div>

            <div className="col-lg-3 col-sm-10 p-1">
              {featureContent(
                Feature3,
                intl.formatMessage({ id: "homepage.feature.genealogy.title" }),
                intl.formatMessage({ id: "homepage.feature.genealogy.text" })
              )}
            </div>
          </div>
        </div>

        {/* How */}
        <div id="#why">
          <div className="row justify-content-around align-items-center pt-4 pb-4">
            <div className="col-lg-6 col-md-12 justify-content-center text-center align-items-center full-height">
              <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -300 },
                }}
              >
                <img src={HowImg} className="img-size"></img>
              </motion.div>
            </div>

            <div className="col-lg-4 order-first order-md-last col-md-12 justify-content-end text-center align-items-center full-height">
              <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 300 },
                }}
              >
                <div className="row justify-content-start align-items-center p-2">
                  <div className="main-title">
                    <FormattedMessage id="homepage.how.title"></FormattedMessage>
                  </div>
                  <div className="sub-paragraph">
                    <FormattedMessage id="homepage.how.text"></FormattedMessage>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div id="#howItWorks">
          <div className="row justify-content-around bordered-card pt-4 pb-4">
            <div className="col-12 text-center">
              <div className="main-title mb-4">Come Funziona?</div>
            </div>

            <div className="col-12 bordered-card timeline-demo">
              <Timeline
                value={events1}
                align="alternate"
                className="customized-timeline"
                marker={customizedMarker}
                content={customizedContent}
              />
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div id="#faq" className="faq">
          <div className="row justify-content-around pt-4 pb-4">
            <div className="col-12 text-center">
              <div className="main-title mb-4">FAQ</div>
            </div>

            <div className="col-12 custom-accordion">
              <Accordion multiple>
                <AccordionTab
                  header={headerTemplate(
                    intl.formatMessage({
                      id: "app.homepage.faq.question1.title",
                    })
                  )}
                >
                  <h6>
                    <FormattedMessage id="app.homepage.faq.question1.content" />
                  </h6>
                </AccordionTab>
                <AccordionTab
                  header={headerTemplate(
                    intl.formatMessage({
                      id: "app.homepage.faq.question2.title",
                    })
                  )}
                >
                  <h6>
                    <FormattedMessage id="app.homepage.faq.question2.content" />
                  </h6>
                  <Message
                    className="mt-2 mb-2"
                    severity="info"
                    text={intl.formatMessage({
                      id: "app.homepage.faq.question2.message",
                    })}
                  />
                </AccordionTab>
                <AccordionTab
                  header={headerTemplate(
                    intl.formatMessage({
                      id: "app.homepage.faq.question3.title",
                    })
                  )}
                >
                  <h6>
                    <FormattedMessage id="app.homepage.faq.question3.content" />
                  </h6>
                  <Message
                    className="mt-2 mb-2"
                    severity="info"
                    text={intl.formatMessage({
                      id: "app.homepage.faq.question3.message",
                    })}
                  />
                </AccordionTab>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div id="#roadmap">
          <div className="row justify-content-around bordered-card pt-4 pb-4">
            <div className="row justify-content-start align-items-center">
              <div className="main-title mb-4">RoadMap</div>
            </div>

            <div className="col-12 bordered-card timeline-demo">
              <Timeline
                value={roadmapFields}
                align="alternate"
                className="customized-timeline"
                marker={customizedMarker}
                content={customizedContent}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default injectIntl(HomeComponent);
