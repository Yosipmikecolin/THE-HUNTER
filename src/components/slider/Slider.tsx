import { useItem } from "../../store/select-item";
import { BiPlay } from "react-icons/bi";
import data from "../../data/info.json";
import { useEffect, useRef, useState } from "react";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { getMap, getVideo } from "../../utils/fuctions";
import StateConservation from "../state-conservation/StateConservation";
import { CgArrowLongRight } from "react-icons/cg";
import Logo from "../../../public/logo2.png";
import "animate.css";
import "./Slider.css";
import Species from "../../views/species/Species";

const Slider = () => {
  const { item } = useItem();
  const isFirstTimeRef = useRef(0);
  const [index, setIndex] = useState(1);
  const [opened, { open, close }] = useDisclosure(false);
  const [openSpecies, setOpenSpecies] = useState(false);
  const [loading, setLoading] = useState(true);
  const [animation, setAnimation] = useState(
    "animate__animated animate__fadeInUp"
  );

  const [animationHabit, setAnimationHabit] = useState(
    "animate__animated animate__fadeIn"
  );

  useEffect(() => {
    if (isFirstTimeRef.current === 0 && item === 1) {
      return;
    } else if (isFirstTimeRef.current !== 0 && item === 1) {
      setAnimation("animate__animated animate__fadeOutUp");
      setAnimationHabit("animate__animated animate__fadeOut");
      setTimeout(() => {
        setAnimation("animate__animated animate__fadeInUp");
        setAnimationHabit("animate__animated animate__fadeIn");
        setIndex(item);
      }, 1000);
    } else {
      setAnimation("animate__animated animate__fadeOutUp");
      setAnimationHabit("animate__animated animate__fadeOut");
      setTimeout(() => {
        setAnimation("animate__animated animate__fadeInUp");
        setAnimationHabit("animate__animated animate__fadeIn");
        setIndex(item);
      }, 1000);
    }

    isFirstTimeRef.current = item;
  }, [item]);

  const handleLoadedMetadata = () => {
    setLoading(false);
  };

  const openSection = () => {
    setOpenSpecies(true);
  };

  return (
    <section className="slider">
      <div className="logo">
        <img src={Logo} width={60} />
      </div>
      <div className="slider-1" style={{ opacity: item === 1 ? 0.5 : 0 }} />
      <div className="slider-2" style={{ opacity: item === 2 ? 0.5 : 0 }} />
      <div className="slider-3" style={{ opacity: item === 3 ? 0.5 : 0 }} />
      <div className="slider-4" style={{ opacity: item === 4 ? 0.5 : 0 }} />
      <div className="slider-5" style={{ opacity: item === 5 ? 0.5 : 0 }} />

      <section className="info">
        <h1 className={animation}>{data[index - 1].title}</h1>
        <p className={animation}>{data[index - 1].content}</p>
        <div className={animation}>
          <span className="button-play">
            <div className="container-icon-play" onClick={open}>
              <BiPlay />
            </div>
          </span>
          <strong>Mirar video</strong>
        </div>
      </section>

      <div className="map-2">
        <img src={getMap(index)} className={animationHabit} />
      </div>

      <Modal
        opened={opened}
        onClose={close}
        size={"70%"}
        withCloseButton={false}
        centered
      >
        {loading && <h1>Cargando...</h1>}
        <video controls onLoadedMetadata={handleLoadedMetadata}>
          <source src={getVideo(item)} type="video/mp4" />
        </video>
      </Modal>

      <section className="container-habit">
        <section className="habit">
          <img src={getMap(index)} className={animationHabit} />
        </section>

        <section className="info-habit">
          <p className="title">Clase</p>
          <div className={animationHabit}>
            <p>{data[index - 1].class}</p>
          </div>

          <p className="title">Estado de conservación</p>
          <div className={animationHabit}>
            <StateConservation state={data[index - 1].state} />
          </div>
        </section>
      </section>

      <section className="info-more">
        Habitad, alimentación y<br /> más información
        <br />
        <div className="icon-more" onClick={openSection}>
          <CgArrowLongRight />
        </div>
      </section>

      <Species open={openSpecies} onClose={setOpenSpecies} />
    </section>
  );
};

export default React.memo(Slider);
