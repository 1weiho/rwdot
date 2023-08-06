import React from 'react';
import { Rwdot } from '.';

export default {
  title: 'Rwdot',
};

export const RwdotDefault = () => {
  return <Rwdot />;
};

export const RwdotBottomRight = () => {
  return <Rwdot position="bottom-right" />;
};

export const RwdotTopLeft = () => {
  return <Rwdot position="top-left" />;
};

export const RwdotTopRight = () => {
  return <Rwdot position="top-right" />;
};
