import { Oval } from 'react-loader-spinner';
import React from 'react';

const Loader = ({ isLoading }) => {
  return (
    <div
      className="loader-overlay"
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(15, 23, 42, 0.7)", // matches app dark theme
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2000,
      }}
    >
      <Oval
        visible={isLoading}
        height={200}
        width={200}
        color="#60a5fa"
        secondaryColor="#94a3b8"
        strokeWidth={1}
        strokeWidthSecondary={1}
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
