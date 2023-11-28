import video1 from "../assets/videos/video-1.mp4";
import video2 from "../assets/videos/video-2.mp4";
import video3 from "../assets/videos/video-3.mp4";
import video4 from "../assets/videos/video-4.mp4";
import video5 from "../assets/videos/video-5.mp4";

import map1 from "../assets/imgs/mapa-1.png";
import map2 from "../assets/imgs/mapa-2.png";
import map3 from "../assets/imgs/mapa-3.png";
import map4 from "../assets/imgs/mapa-4.png";
import map5 from "../assets/imgs/mapa-5.png";

export const getVideo = (video: number) => {
  switch (video) {
    case 1:
      return video1;

    case 2:
      return video2;

    case 3:
      return video3;

    case 4:
      return video4;

    case 5:
      return video5;
  }
};

export const getMap = (item: number) => {
  switch (item) {
    case 1:
      return map1;

    case 2:
      return map2;

    case 3:
      return map3;

    case 4:
      return map4;

    case 5:
      return map5;
  }
};
