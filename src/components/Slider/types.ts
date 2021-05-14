import { NEXT, PREVIOUS } from '@Constans';
import React from 'react';

export interface ParametersHandlePreviousAndNext {
  type: typeof NEXT | typeof PREVIOUS | 'OTHER';
  newIndex: number;
  marginLeft: number;
  selectedIndex: number;
  totalSections: number;
  sliderRef: React.RefObject<HTMLUListElement>;
  setSelectedIndex: (newIndex: number) => void;
}

interface PropsSwitch {
  // selectedIndex: number;
  // setSelectedIndex: (selectedIndex: number) => void;
  totalSections: number;
  sliderRef: React.RefObject<HTMLUListElement>;
  marginLeft?: number;
}

//Slider Switch Desktop
export interface PropsSwitchDesktop extends PropsSwitch {}

//Slider Switch Movil
export interface PropsSwitchMovil extends PropsSwitch {
  colorText?: string;
}

//Slider Switch with points
export interface PropsSwitchWithPoints extends PropsSwitch {}
