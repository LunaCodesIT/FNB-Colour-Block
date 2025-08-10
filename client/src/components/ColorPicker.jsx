import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#FBCEB1", // peach

          // Reds & Pinks
          "#FF6F91", // watermelon pink
          "#C72C48", // crimson red
          "#B22222", // firebrick red
          "#FEC8D8", // fairy pink
          "#FFD1DC", // cotton candy pink
          "#E97451", // burnt sienna

          // Oranges & Yellows
          "#FFB347", // pastel orange
          "#FF9F80", // salmon orange
          "#E1A95F", // earth yellow
          "#F4BB44", // saffron
          "#FFBA00", // vivid amber
          "#DFFF00", // chartreuse yellow

          // Greens
          "#A4DE02", // lime punch
          "#80FF72", // spring green
          "#B5EAD7", // mint pastel
          "#A3C1AD", // cambridge blue
          "#00A693", // persian green
          "#1E555C", // dark teal
          "#7A9E9F", // greenish teal

          // Blues
          "#A7C7E7", // pastel blue
          "#7CB9E8", // aero blue
          "#00CED1", // dark turquoise
          "#80A9C0", // steel blue pastel
          "#4682B4", // steel blue
          "#4C516D", // independence gray

          // Purples
          "#B284BE", // amethyst
          "#6F2DA8", // indigo purple
          "#E0BBE4", // thistle pink
          "#B0A8B9", // lavender gray

          // Earth & Neutral
          "#C2B280", // khaki brown
          "#D2A679", // camel
          "#9F8170", // beaver brown
          "#6B4226", // coffee brown
          "#3B3C36", // charcoal
          "#FFFFFF", // white
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
