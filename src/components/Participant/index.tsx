import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../Button';

import { styles } from './styles';

type Props = {
  name: string
  onRemove: ()=>void
}

export function Participant({ name, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Button type='remove' onPress={onRemove} />
    </View>
  );
}