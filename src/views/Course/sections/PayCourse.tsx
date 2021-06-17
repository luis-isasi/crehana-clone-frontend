import Image from 'next/image';

import CoursePrice from '../components/CoursePrice';
import CourseInformation from '../components/CourseInformation';
import CartIcon from '@Components/Icons/CartIcon';

const PayCourse = () => {
  return (
    <section>
      <CoursePrice />
      <div className="my-3">
        <button className="btn-lg btn-primary w-full mb-3">
          Cómpralo ahora
        </button>
        <button className="btn-lg btn-invert-gray flex justify-center items-center w-full mb-3">
          <CartIcon className="text-base-lighter active:text-white mr-2 h-6 w-6 " />
          Agregar a mi carrito
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
