import React, {memo} from "react";
import isEqual from "react-fast-compare";

import {SwitchProps} from "./Switch.props";
import {Switch as SwitchIOS} from "./Switch_IOS";
import {Switch as SwitchAndroid} from "./Swtich_Android";

const SwitchComponent = (props: SwitchProps) => {
  return props.type === "android" ? (
    <SwitchAndroid {...props} />
  ) : (
    <SwitchIOS {...props} />
  );
};

export const Switch = memo(SwitchComponent, isEqual);
