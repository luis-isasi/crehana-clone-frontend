import AccessTimeIcon from '@material-ui/icons/AccessTime';

import ModalBase from '@Modals/ModalBase';
import BtnPrimary from '@Components/buttons/BtnPrimary';
import Price from '../components/Price';
import { Prices } from '@Types/course';
import CloseModal from './components/CloseModal';
import TrailerVideo from './components/TrailerVideo';

export interface DataTrailer {
  url: string;
  title: string;
  description: string;
  duration: number;
  prices: Prices;
}

const ModalTrailer: React.FC<{
  handleIsOpenModal: () => void;
  dataTrailer: DataTrailer;
}> = ({ handleIsOpenModal, dataTrailer }) => {
  return (
    <ModalBase className="bg-base-dark bg-opacity-80 backdrop-blur-sm -z-3 flex justify-center items-center">
      <div className="w-xl h-auto overflow-hidden rounded-md flex flex-col">
        <div className=" self-end">
          <CloseModal handleOpenModal={handleIsOpenModal} />
        </div>
        <TrailerVideo url={dataTrailer.url} />
        <section className="w-full h-60 bg-white p-4">
          <h4 className="text-xl font-bold">{dataTrailer.title}</h4>
          <div className="mt-2 text-primary-main flex items-center">
            <AccessTimeIcon className="fill-current mr-1" />
            <span>{`${dataTrailer.duration} m`}</span>
          </div>
          <p className="h-auto max-h-16 overflow-hidden text-xs font-light text-gray-600 my-3">
            {dataTrailer.description}
          </p>
          <div className="flex justify-end items-center mt-2">
            <Price prices={dataTrailer.prices} />
            <BtnPrimary className="ml-4">Comprar</BtnPrimary>
          </div>
        </section>
      </div>
    </ModalBase>
  );
};

export default ModalTrailer;
