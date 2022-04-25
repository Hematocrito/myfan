import React from 'react';

type OutletProps = { children: { type: { Layout?: React.ComponentType } } };

export const Outlet = ({ children }: any) => {
  return children.type?.Layout ? (
    <children.type.Layout>{children}</children.type.Layout>
  ) : (
    <>{children}</>
  );
};
