import { useCallback } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Button } from "../../components/Button";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {

  const participants = [
    "Na",
    "Jheni",
    "Dani",
    "Celo",
    "Ni",
    "CJ",
    "DK",
    "Rick",
    "Giu",
    "Bia",
  ]

  const handleParticipantAdd = useCallback(() => {
    console.info("Voce clicou no botao de adicionar")
  }, [])
  const handleParticipantRemove = useCallback((name: string) => {
    console.info(`Voce clicou no botao de remover: ${name}`)
  }, [])

  return (
    <View style={styles.container}>
      <Text
        style={styles.eventName}
      >
        Nome do evento
      </Text>

      <Text
        style={styles.eventDate}
      >
        Sexta, 4 de Novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <Button onPress={handleParticipantAdd} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map(p => (
          <Participant name={p} key={p} onRemove={() => handleParticipantRemove(p)} />
        ))}
      </ScrollView>

    </View>
  );
}