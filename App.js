import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useState} from 'react';

export default function App() {
  const [numero_actuel, setNumeroActuel] = useState(''); // (useState) permet d’ajouter l’état local React à des fonctions composants.
  const [numero_dernier, setDernierNumero] = useState('');
  const boutons = ['C', 'DEL', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '=']
 const [nd, getDernierNumero] = useState('');
 const [na, getNumeroActuel] = useState('');

  function function_calculatrice() 
  {
    
    let variable = numero_actuel[numero_actuel.length-1];
    
    if(variable === '/' || variable === '*' || variable === '-' || variable === '+' || variable === '.') 
    {
      setNumeroActuel(numero_actuel)
      getNumeroActuel(numero_actuel)
      return
    }
    else {
      let resultat = eval(numero_actuel).toString();
      setNumeroActuel(resultat)
      getNumeroActuel(resultat)
      return
    }
  }

  
  function clique_bouton(appuie_sur) 
  {
    if(appuie_sur  === '+' || appuie_sur === '-' || appuie_sur === '*' || appuie_sur === '/') 
    {
      setNumeroActuel(numero_actuel + appuie_sur)
      return
    }
    else if (appuie_sur === 1 || appuie_sur === 2 || appuie_sur === 3 || appuie_sur === 4 || appuie_sur === 5 ||
      appuie_sur === 6 || appuie_sur === 7 || appuie_sur === 8 || appuie_sur === 9 || appuie_sur === 0 || appuie_sur === '.' ) {
    }
    switch(appuie_sur) {
      case 'DEL':
        setNumeroActuel(numero_actuel.substring(0, (numero_actuel.length - 1)))
        return
      case 'C':
        setDernierNumero('')
        setNumeroActuel('')
        return
      case '=':
        setDernierNumero(numero_actuel + '=')
        getDernierNumero(numero_actuel + '=')
        function_calculatrice()
        return
    }
    setNumeroActuel(numero_actuel + appuie_sur)
  }





  // Mode design de la calculatrice
  const calculatrice = StyleSheet.create({
    results: {
      maxWidth: '30%',
      minHeight: '50%',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      backgroundColor: 'rgb(147, 147, 230)'
    },
    resultText: {
      maxHeight: 45,
      color: 'red',
      margin: 15,
      fontSize: 35,
    },

    boutons: {
      width: '30%',
      height: '50%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: 'rgb(206, 134, 134)'
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '24%',
      minHeight: '54%',
      flex: 2,
      backgroundColor: 'rgb(206, 134, 134)'
    },
  })


  /* Affichage calculatrice */ 
  return(
    <View>
      <View style={calculatrice.results}>
        <p> {nd} {na} <br></br> <hr></hr></p>
        <Text style={calculatrice.resultText}>{numero_actuel}</Text>
      </View>
      <View style={calculatrice.boutons}>
        {boutons.map((button) =>
          button === '=' || button === '/' || button === '*' || button === '-' || button === '+' ?
          <TouchableOpacity key={button} style={[calculatrice.button, {backgroundColor: '#00b9d6'} ]} onPress={() => clique_bouton(button)}>
            <Text style={[calculatrice.textButton, {color: 'white', fontSize: 28} ]}>{button}</Text>
          </TouchableOpacity>
          :
          button === 0 ?
          <TouchableOpacity key={button} style={[calculatrice.button]} onPress={() => clique_bouton(button)}>
            <Text style={calculatrice.textButton}>{button}</Text>
          </TouchableOpacity>
          :
          button === '.' || button === 'DEL' ?
          <TouchableOpacity key={button} style={[calculatrice.button]} onPress={() => clique_bouton(button)}>
            <Text style={calculatrice.textButton}>{button}</Text>
          </TouchableOpacity>
          :
          button === 'C' ?
          <TouchableOpacity key={button} style={[calculatrice.button, {backgroundColor: typeof(button) === 'number' , '#414853' : '#ededed', minWidth: '36%'} ]} onPress={() => clique_bouton(button)}>
            <Text style={calculatrice.textButton}>{button}</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity key={button} style={[calculatrice.button ]} onPress={() => clique_bouton(button)}>
            <Text style={calculatrice.textButton}>{button}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}