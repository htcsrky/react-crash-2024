import  ClipLoder  from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
  borderColor: "red",
};

// eslint-disable-next-line react/prop-types
const Spinner = ({ loading }) => {
  return (
    <ClipLoder
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Spinner;
