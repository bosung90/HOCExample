// @flow
import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

export default (Comp: ReactClass<*>) => {
  return ({ children, ...props }: Object) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Comp {...props}>
        {children}
      </Comp>
    </TouchableWithoutFeedback>
  );
};
