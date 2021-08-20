import ReactDOM from 'react-dom';

const ModalBase: React.FC<{ className?: string }> = ({
  className,
  children,
}) => {
  return ReactDOM.createPortal(
    <div className={`${className} w-screen h-screen fixed top-0 left-0 z-20`}>
      {children}
      <style global jsx>{`
        body {
          overflow-y: hidden;
        }
      `}</style>
    </div>,
    document.querySelector('#modal')
  );
};

export default ModalBase;
