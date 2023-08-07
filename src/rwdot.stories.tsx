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

export const RwdotDefaultShowSize = () => {
  return <Rwdot showSize />;
};

export const RwdotBottomRightShowSize = () => {
  return <Rwdot position="bottom-right" showSize />;
};

export const RwdotTopLeftShowSize = () => {
  return <Rwdot position="top-left" showSize />;
};

export const RwdotTopRightShowSize = () => {
  return <Rwdot position="top-right" showSize />;
};
