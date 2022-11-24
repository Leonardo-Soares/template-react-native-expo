import React, { useEffect, useState } from 'react'
import ButtonSolid from '../buttons/ButtonSolid';
import { View, Text, StyleSheet, Alert, Modal } from 'react-native'
import * as Clipboard from 'expo-clipboard';

interface propsModalCopyText {
  titleModal: string,
  titleButton: string,
  conteudoCopy: string,
  props?: any,
  icon?: any,
  backgroundColor?: string,
  color?: string,
}

export default function ModalCopyText({ titleModal, titleButton, conteudoCopy, icon, backgroundColor, color, ...props }: propsModalCopyText) {
  const [modalVisible, setModalVisible] = useState(false);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(conteudoCopy);
  };

  useEffect(() => {
    copyToClipboard()
  }, [])

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        style={styles.centeredView}
      >
        <View style={styles.modalView}>
          <View style={styles.cardModal}>
            <Text style={styles.modalText}>{titleModal}</Text>
            <ButtonSolid
              title={'VOLTAR'}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal >
      <ButtonSolid
        title={titleButton}
        onPress={() => setModalVisible(true)}
        icon={icon}
        color={color}
        backgroundColor={backgroundColor}
      />
    </View >
  )
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    flex: 1,
    opacity: 0.9,
    width: '100%',
    height: '100%',
    alignItems: "center",
    backgroundColor: "#000",
    justifyContent: "center",
  },
  cardModal: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    padding: 16,
    elevation: 5,
    borderRadius: 8,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    marginHorizontal: 12,
    backgroundColor: '#fff',
  },
  button: {
    padding: 10,
    elevation: 2,
    borderRadius: 20,
  },
  modalText: {
    fontSize: 20,
    color: '#0079BD',
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: "center",
  }
});
