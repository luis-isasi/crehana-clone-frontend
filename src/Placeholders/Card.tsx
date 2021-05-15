import ContentLoader from 'react-content-loader';

const CardPlaceHolder = () => (
  <div className="bg-white h-58 w-56 absolute rounded-md z-50 lg:-bottom-62 lg:-left-42 xl:-bottom-62 xl:-left-40 ">
    <ContentLoader
      speed={2}
      width={232}
      height={224}
      viewBox="0 0 232 224"
      backgroundColor="#f0f0f0"
      foregroundColor="#c4c4c4"
    >
      <rect x="17" y="48" rx="3" ry="3" width="88" height="6" />
      <rect x="15" y="180" rx="3" ry="3" width="181" height="28" />
      <rect x="17" y="101" rx="3" ry="3" width="88" height="6" />
      <rect x="17" y="75" rx="3" ry="3" width="88" height="6" />
      <rect x="19" y="128" rx="3" ry="3" width="88" height="6" />
      <rect x="20" y="157" rx="3" ry="3" width="163" height="1" />
    </ContentLoader>
  </div>
);

export default CardPlaceHolder;
