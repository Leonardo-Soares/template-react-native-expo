import React from 'react'
import ButtonSolid from '../buttons/ButtonSolid';
import { View, Text, StyleSheet, Linking } from 'react-native'
import ModalCopyText from '../modals/ModalCopyText';

interface fileBoleto {
  title: string,
  props: any,
}

export default function CardBoleto({ title, ...props }: fileBoleto) {
  return (
    <View style={styles.cardBoleto}>
      <View style={styles.cardHeader}>
        {title === 'Vence em breve' ?
          <Text style={styles.tituloCardVenceEmBreve}>Vence em breve</Text>
          : <></>
        }
        {title === 'Atrasado' ?
          <Text style={styles.tituloCardAtrasado}>Atrasado</Text>
          : <></>
        }
        {title === 'Pago' ?
          <Text style={styles.tituloCardPago}>Pago</Text>
          : <></>
        }

        <Text style={styles.tituloVencimentoCard}>Vencimento: {' '}
          <Text style={styles.tituloDataoCard}>19/12/2022</Text>
        </Text>
      </View>
      {title === 'Pago' ?
        <View style={styles.cardBodyPago}>
          <ButtonSolid title="VER COMPROVANTE" onPress={() => Linking.openURL("http://www.educacaocristacontinuada.com.br/v2/revista/marcos-o-evangelho-do-servo/revistas/L1.pdf")} />
        </View>
        :
        <View style={styles.cardBody}>
          <ButtonSolid title="VER BOLETO" onPress={() => Linking.openURL("http://www.educacaocristacontinuada.com.br/v2/revista/marcos-o-evangelho-do-servo/revistas/L1.pdf")} />
          <ModalCopyText
            conteudoCopy='Código do boleto'
            titleButton='COPIAR CÓDIGO'
            titleModal='Código copiado para a área de transferencia'
          />
        </View>
      }
    </View>
  )
}
const styles = StyleSheet.create({
  cardBoleto: {
    padding: 20,
    width: '100%',
    minHeight: 140,
    borderRadius: 8,
    marginVertical: 8,
    backgroundColor: '#fff',

  },
  cardHeader: {
    width: '100%',
    flexDirection: 'column',
  },
  tituloCardVenceEmBreve: {
    fontSize: 24,
    color: '#0079BD',
    fontWeight: 'bold',
  },
  tituloCardAtrasado: {
    fontSize: 24,
    color: '#D94540',
    fontWeight: 'bold',
  },
  tituloCardPago: {
    fontSize: 24,
    color: '#189E2A',
    fontWeight: 'bold',
  },
  tituloVencimentoCard: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tituloDataoCard: {
    fontWeight: 'normal'
  },
  cardBody: {
    width: '100%',
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  cardBodyPago: {
    width: '100%',
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
});
