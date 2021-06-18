import Image from 'next/image';

import CoursePrice from '../components/CoursePrice';
import CourseInformation from '../components/CourseInformation';
import CartIcon from '@Components/Icons/CartIcon';

const PayCourse = () => {
  return (
    <section>
      <CoursePrice />
      <div className="my-3 flex flex-col md:flex-row xl:flex-col items-center ">
        <button className="btn-lg btn-primary w-full max-w-xl mb-3 md:mr-5 xl:mr-0">
          Cómpralo ahora
        </button>
        <button className="btn-lg btn-invert-gray w-full max-w-xl flex justify-center items-center mb-3">
          <CartIcon className="text-base-lighter active:text-white mr-2 h-6 w-6 " />
          Agregar a mi carrito
        </button>
      </div>
      <article className="bg-gray-50 w-full h-24 p-3 my-5 xl:my-2 flex items-center">
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
