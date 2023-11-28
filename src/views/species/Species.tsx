import StateConservation from "../../components/state-conservation/StateConservation";
import { useItem } from "../../store/select-item";
import { getMap } from "../../utils/fuctions";
import data from "../../data/info.json";
import { CgArrowLongLeft } from "react-icons/cg";
import "./Species.css";

interface Props {
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const Species = ({ open, onClose }: Props) => {
  const { item } = useItem();

  return (
    <section
      className={open ? "container-species-open" : "container-species-close"}
    >
      <div className="back">
        <span onClick={() => onClose(false)}>
          <CgArrowLongLeft />
        </span>
        <span onClick={() => onClose(false)}>Atras</span>
      </div>

      <div className="content">
        <div className="column-1">
          <p className="title">Terrotorio</p>
          <img src={getMap(item)} width={200} className="image-map" />
          <p className="title">Estado de conservación</p>

          <StateConservation state={data[item - 1].state} />
          <br />
          <p className="title">Reino</p>
          <p>{data[item - 1].kingdom}</p>
          <br />
          <p className="title">Filo</p>
          <p>{data[item - 1].edge}</p>
          <br />
          <p className="title">Clase</p>
          <p>{data[item - 1].class}</p>
          <br />
          <p className="title">Subclase</p>
          <p>{data[item - 1].subclass}</p>
          <br />
          <p className="title">Familia</p>
          <p>{data[item - 1].family}</p>
          <br />
          <p className="title">Género</p>
          <p>{data[item - 1].gender}</p>
          <br />
          <p className="title">Orden</p>
          <p>{data[item - 1].order}</p>
        </div>
        <div className="column-2">
          <h2>Información general</h2>
          <p>{data[item - 1].general_information}</p>
          <br />
          <h2>Hábitat</h2>
          <p>{data[item - 1].habitat}</p>
          <br />
          <h2>Alimentación</h2>
          <p>{data[item - 1].feeding}</p>
        </div>
        <div className="column-3">
          <img src={data[item - 1].urlImagen1} />
          <img src={data[item - 1].urlImagen2} />
          <img src={data[item - 1].urlImagen3} />
        </div>
      </div>
    </section>
  );
};

export default Species;
