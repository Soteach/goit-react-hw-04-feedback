import React from 'react';

export const Section = ({ title, children }) => {
  return (
    <>
      <section>
        <h2 className="StatHeader">{title}</h2>
        {children}
      </section>
    </>
  );
};
