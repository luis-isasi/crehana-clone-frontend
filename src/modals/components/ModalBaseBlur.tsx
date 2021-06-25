import ReactDOM from 'react-dom';

const ModalBaseBlur: React.FC<{ className: string }> = ({ className }) => {
  return ReactDOM.createPortal(
    <div
      className={`${className} w-screen h-screen bg-base-main-80 fixed backdrop-filter backdrop-blur-sm top-0 left-0 z-10`}
    >
      <style global jsx>{`
        body {
          overflow-y: hidden;
        }
      `}</style>
    </div>,
    document.querySelector('#modal')
  );
};

export default ModalBaseBlur;
