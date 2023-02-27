import { useCallback, useState } from "react";
import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Button } from "../../components/Button";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {

  const [participants,setParticipants] = useState<string[]>([])
  const [participantName,setParticipantName] = useState('')

  const handleParticipantAdd = useCallback(() => {

    if(participants.includes(participantName)) {
      return Alert.alert("Participante existe","Já existe um participante na lista com esse nome")
    }

    setParticipants(s=>[...s,participantName])
    setParticipantName('')
  }, [participants,setParticipants,participantName,setParticipantName])

  const handleParticipantRemove = useCallback((name: string) => {

    Alert.alert("Remover participante", `Remover participante ${name}?`,[
      {
        text: "Sim",
        onPress:()=>{
          setParticipants(p=>p.filter(n => n!==name))
        }
      },
      {
        text: "Não",
        style: "cancel"
      },
    ])
  }, [setParticipants])

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
          onChangeText={(v)=>setParticipantName(v)}
          value={participantName}
        />

        <Button onPress={handleParticipantAdd} />
      </View>

      <FlatList 
        keyExtractor={item => item}
        data={participants}
        renderItem={({item})=>(
          <Participant name={item} key={item} onRemove={() => handleParticipantRemove(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=>(
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda ? Adicione participantes a sua lista de presença
          </Text>
        )}
      />

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map(p => (
          <Participant name={p} key={p} onRemove={() => handleParticipantRemove(p)} />
        ))}
      </ScrollView> */}

    </View>
  );
}