import App from './App';

const Index = () => {
  return (
    <>
      <App />
      <style global jsx>{`
        body {
          //bg-base-dark
          background-color: rgba(7, 14, 39, 1);
        }

        header {
          //bg-base-main
          background-color: transparent !important;
          position: absolute !important;
          top: 0px;
          z-index: 1;
        }

        header > :global(*) {
          color: #ffffff;
        }
      `}</style>
    </>
  );
};

export default Index;
