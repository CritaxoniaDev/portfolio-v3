declare module 'locomotive-scroll' {
    export interface LocomotiveScrollOptions {
      el?: HTMLElement | null;
      name?: string;
      offset?: [number, number];
      repeat?: boolean;
      smooth?: boolean;
      smoothMobile?: boolean;
      direction?: string;
      inertia?: number;
      class?: string;
      scrollbarClass?: string;
      scrollingClass?: string;
      draggingClass?: string;
      smoothClass?: string;
      initClass?: string;
      getSpeed?: boolean;
      getDirection?: boolean;
      multiplier?: number;
      firefoxMultiplier?: number;
      touchMultiplier?: number;
      resetNativeScroll?: boolean;
      tablet?: {
        smooth?: boolean;
        direction?: string;
        breakpoint?: number;
        [key: string]: any;
      };
      smartphone?: {
        smooth?: boolean;
        direction?: string;
        [key: string]: any;
      };
      reloadOnContextChange?: boolean;
      lerp?: number;
      [key: string]: any;
    }
  
    export interface LocomotiveScrollInstance {
      scroll: {
        x: number;
        y: number;
        limit: {
          x: number;
          y: number;
        };
      };
      scrollTo(target: string | HTMLElement | number, options?: any): void;
      update(): void;
      destroy(): void;
      start(): void;
      stop(): void;
      on(event: string, callback: (data?: any) => void): void;
    }
  
    export default class LocomotiveScroll {
      constructor(options?: LocomotiveScrollOptions);
      destroy(): void;
      update(): void;
      start(): void;
      stop(): void;
      scrollTo(target: string | HTMLElement | number, options?: any): void;
      setScroll(x: number, y: number): void;
      on(event: string, callback: (data?: any) => void): void;
      off(event: string, callback: (data?: any) => void): void;
    }
  }
  