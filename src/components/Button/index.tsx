import React, { useMemo } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  type?: "add" | "remove"
}

export function Button({ type = "add", ...props }: ButtonProps) {
  const text = useMemo(() => {
    if (type === "add") {
      return "+"
    } else {
      return "-"
    }
  }, [type])
  const backgroundColor = useMemo(() => {
    if (type === "add") {
      return "#31cf67"
    } else {
      return "#E23C44"
    }
  }, [type])

  return (
    <TouchableOpacity style={{...styles.button,backgroundColor}} {...props} >
      <Text style={styles.buttonText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}