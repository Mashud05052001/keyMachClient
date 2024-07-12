declare module "react-awesome-stars-rating" {
  import * as React from "react";

  interface ReactStarsRatingProps {
    value?: number;
    className?: string;
    size?: number;
    starGap?: number;
    primaryColor?: string;
    isEdit?: boolean;
    onChange?: (value: number) => void;
  }

  const ReactStarsRating: React.FC<ReactStarsRatingProps>;
  export default ReactStarsRating;
}
