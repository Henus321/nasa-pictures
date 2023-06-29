import React from 'react';
import { ReactComponent as LoaderSpinner } from '../assets/spinner.svg';

const Spinner: React.FC = () => {
  return (
    <div className="flex w-100 min-h-[50vh] bg-whiteTransparent rounded-xl">
      <LoaderSpinner className="mx-auto my-auto" />
    </div>
  );
};

export default Spinner;
