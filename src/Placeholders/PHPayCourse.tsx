import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={368}
    height={600}
    viewBox="0 0 368 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="22" y="174" rx="3" ry="3" width="321" height="58" />
    <rect x="25" y="85" rx="3" ry="3" width="110" height="16" />
    <rect x="0" y="600" rx="3" ry="3" width="410" height="6" />
    <rect x="24" y="122" rx="3" ry="3" width="274" height="12" />
    <rect x="25" y="28" rx="3" ry="3" width="81" height="40" />
    <circle cx="38" cy="485" r="13" />
    <rect x="123" y="26" rx="3" ry="3" width="43" height="21" />
    <rect x="22" y="242" rx="3" ry="3" width="321" height="56" />
    <rect x="24" y="333" rx="3" ry="3" width="321" height="78" />
    <rect x="25" y="439" rx="3" ry="3" width="219" height="10" />
    <circle cx="38" cy="524" r="13" />
    <circle cx="38" cy="564" r="13" />
    <rect x="66" y="479" rx="3" ry="3" width="162" height="10" />
    <rect x="67" y="558" rx="3" ry="3" width="162" height="10" />
    <rect x="67" y="519" rx="3" ry="3" width="162" height="10" />
  </ContentLoader>
);

export default MyLoader;
