import Image from 'next/image';

import CoursePrice from '../components/CoursePrice';
import CourseInformation from '../components/CourseInformation';
import BtnPrimaryBorder from '@Components/buttons/BtnPrimaryBorder';
import BtnPrimary from '@Components/buttons/BtnPrimary';
import CartIcon from '@Components/Icons/CartIcon';

const PayCourse = () => {
  return (
    <section>
      <CoursePrice />
      <div>
        <BtnPrimary>Cómpralo ahora</BtnPrimary>
        <button className="box-border border-2 border-base-lighter text-base-lighter ">
          <CartIcon />
          Agregar a carrito
        </button>
      </div>
      <article className="bg-gray-50 w-full h-auto p-3 my-5 flex items-center ">
        <Image
          loader={({ src }) => `${src}`}
          src={'https://i.imgur.com/urCp5aS.pnghttps://i.imgur.com/urCp5aS.png'}
          height="70"
          width="80"
        />
        <p className="text-gray-700 text-sm ml-3">
          Te devolvemos tu compra al 100% si no estás contento con tu curso.
        </p>
      </article>
      <CourseInformation />
    </section>
  );
};

export default PayCourse;
