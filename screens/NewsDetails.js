import {View, Text, SafeAreaView, ScrollView, Share} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../constants/styles';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../constants/theme';
import {useSelector} from 'react-redux';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const NewsDetails = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const navigation = useNavigation();

  const [inputValue, setInputValue] = useState('Hey! share me.');

  const shareMessage = () => {
    //Here is the Share API
    Share.share({
      message: inputValue.toString(),
    })
      //after successful share return result
      .then(result => console.log(result))
      //If any thing goes wrong it comes here
      .catch(errorMsg => console.log(errorMsg));
  };

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.newsDetailsTop}>
            <View style={styles.newsDetailsCat}>
              <Icon name="circle" color={COLORS.light.primary} />
              <Text style={styles.newsListDetExtraTxt}>SPORTS</Text>
            </View>
            <View style={styles.newsDetailsAuthor}>
              <FastImage
                style={styles.profileImg}
                source={{
                  uri: 'https://i.ibb.co/8c3xKmX/profilepic.png',
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <Text style={styles.profileText}>Radji Mouhammed</Text>
            </View>
          </View>
          <View style={styles.newsDetiailTitleCon}>
            <Text style={styles.titleText}>
              Mort de Pelé : les ambiguïtés politiques du « roi » du football,
              loin des terrains
            </Text>
            <View style={styles.titleDetails}>
              <Text style={styles.newsListDetExtraRightView}>
                Le 29 Decembre 2022 à 9H35
              </Text>
              <View style={styles.titleDetailTime}>
                <Icon name="schedule" color={COLORS.dark.textSoft} />
                <Text style={styles.newsListDetExtraRightView}>
                  Lecture de 5 Mins
                </Text>
              </View>
            </View>
          </View>

          {/* paragraphs */}
          <Text style={styles.newsDetailsParagraph}>
            Le Brésilien, mort le 29 décembre 2022, a souvent été critiqué,
            pendant et après sa carrière, pour sa proximité avec des figures du
            pouvoir autoritaire et pour son affairisme. Ministre des sports de
            1995 à 1999, il a même un temps caressé l’espoir d’être élu à la
            présidence.
          </Text>
          <FastImage
            style={styles.paragraphImg}
            source={{
              uri: 'https://i.ibb.co/0JtSJPD/La-France-sans-Pogba-Benzema-Kante-face-a-l-Australie-370x248-1.png',
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <Text style={styles.newsDetailsParagraph}>
            Pelé, « roi » du football, mais aussi des polémiques. Célébrée dans
            le monde pour ses performances sportives exceptionnelles, la star du
            ballon rond aura aussi été la cible d’intenses critiques au Brésil.
            En cause : des positions controversées tenues durant et après sa
            carrière de joueur. Entre passivité, dérapages, conservatisme et
            indifférence aux grands enjeux de la société de son pays.
          </Text>
          <Text style={styles.newsDetailsParagraph}>
            Le principal grief concerne la période de la dictature militaire
            (1964-1985). Arrivé au pouvoir en 1969, le général Emilio Garrastazu
            Médici accentue la répression sur un Brésil où les libertés sont
            suspendues et la torture des opposants généralisée. Pour masquer ses
            crimes, la junte a besoin d’un succès éclatant à l’international. La
            victoire au Mondial mexicain de 1970 devient sa priorité.
          </Text>
          <Text style={styles.newsDetailsParagraph}>
            A presque 30 ans, Pelé est au sommet de son art. « Il était la
            figure humaine la plus connue du monde. Pour Médici, il était
            crucial de s’approprier son image », rappelle Euclides de Freitas
            Couto, spécialiste des liens entre football et politique. A
            l’approche du tournoi, la dictature appose la figure du « roi » du
            football sur les affiches de sa propagande, accompagnée de slogans
            nationalistes (« Le Brésil, tu l’aimes ou tu le quittes », «
            Personne ne peut retenir ce pays ! »…).
          </Text>

          <View style={styles.newsDetailsDown}>
            <Text style={styles.newsDetailsDownText}>
              Abonnez-vous Pour lire la suite
            </Text>
            <RectButton
              onPress={() => navigation.navigate('Abonnement')}
              style={styles.newsDetailsBtn}>
              <Text style={styles.newsDetailsBtnText}>Abonnez vous</Text>
            </RectButton>
            <Text style={styles.newsListDetExtraRightView}>
              Déjà abonné? Connecte vous
            </Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.newsDetailsFooterCom}>
        <BorderlessButton>
          <Icon
            name="arrow-back"
            color={COLORS.dark.backgroundSoft}
            size={24}
            onPress={() => navigation.goBack()}
          />
        </BorderlessButton>
        <BorderlessButton>
          <Icon
            name="bookmark-border"
            color={COLORS.dark.backgroundSoft}
            size={24}
          />
        </BorderlessButton>
        <BorderlessButton onPress={shareMessage}>
          <Icon name="share" color={COLORS.dark.backgroundSoft} size={24} />
        </BorderlessButton>
        <BorderlessButton>
          <Icon name="tune" color={COLORS.dark.backgroundSoft} size={24} />
        </BorderlessButton>
      </View>
    </SafeAreaView>
  );
};

export default NewsDetails;
