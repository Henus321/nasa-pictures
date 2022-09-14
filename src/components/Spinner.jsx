import spinner from '../assets/spinner.svg';

const Spinner = () => {
  return (
    <div className="flex w-100 min-h-[50vh] bg-whiteTransparent rounded-xl">
      <img className="mx-auto my-auto" src={spinner} alt="Spinner" />
    </div>
  );
};

export default Spinner;
