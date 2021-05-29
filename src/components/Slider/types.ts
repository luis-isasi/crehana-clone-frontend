import { NEXT, PREVIOUS } from '@Constans';

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
  totalSections: number;
  sliderRef: React.RefObject<HTMLUListElement>;
  marginLeft?: number;
  dark?: boolean;
}

//Slider Switch Desktop
export interface PropsSwitchDesktop extends PropsSwitch {}

//Slider Switch Movil
export interface PropsSwitchMovil extends PropsSwitch {
  colorText?: string;
}

//Slider Switch with points
export interface PropsSwitchWithPoints extends PropsSwitch {
  automaticSlider?: boolean;
  intervalTime?: number;
  easing?: EffectTiming['easing'];
  duration?: EffectTiming['duration'];
}

/*-----------AUTOMATIC SLIDER----------*/
//when We start the automatic slider
export interface InitAutomaticSlider {
  refIntervalAnimate: any;
  setSelectedIndex: (newIndex: number) => void;
  sliderRef: React.RefObject<HTMLUListElement>;
  intervalTime: number;
  marginLeft: number;
  easing: EffectTiming['easing'];
  duration: EffectTiming['duration'];
  totalSections: number;
  initIndex?: number;
}

//when We start the automatic slider
export interface HandleAutomaticSlider extends InitAutomaticSlider {
  newIndex: number;
}
