import React, { useState } from "react";
import { Icon, Divider } from "@rneui/themed";
import {
  SafeAreaView,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import {
  PrimaryColor,
  BlackColor,
  WhiteColor,
  GrayColor,
} from "../constants/Colors";
import {
  height,
  width,
  smallSize,
  verysmallSize,
  secSmallSize,
  TitleSize,
} from "../constants/Sized";
import * as Animatable from "react-native-animatable";
import Collapsible from "react-native-collapsible";
import Accordion from "react-native-collapsible/Accordion";

const CONTENT1 = [
  {
    title: "1. Bring of had which their whose you're it own?",
    content:
      "Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth nhath rule creepeth own lesser years itself so seed fifth for grass.",
  },
  {
    title: "2. Over shall air can't subdue fly divide him?",
    content:
      "Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth nhath rule creepeth own lesser years itself so seed fifth for grass.",
  },
  {
    title: "3. Waters one you'll creeping?",
    content:
      "Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth nhath rule creepeth own lesser years itself so seed fifth for grass.",
  },
  {
    title: "4. Fowl, given morning seed fruitful kind beast be?",
    content:
      "Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth nhath rule creepeth own lesser years itself so seed fifth for grass.",
  },
];
const CONTENT2 = [
  {
    title: "1. Seas their gathered fruitful whose rule darkness?",
    content:
      "Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth nhath rule creepeth own lesser years itself so seed fifth for grass.",
  },
  {
    title: "2. Evening earth replenish land that his place?",
    content:
      "Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth nhath rule creepeth own lesser years itself so seed fifth for grass.",
  },
  {
    title: "3. His in fowl morning to upon?",
    content:
      "Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth nhath rule creepeth own lesser years itself so seed fifth for grass.",
  },
  {
    title: "4. Divide called which created was?",
    content:
      "Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth nhath rule creepeth own lesser years itself so seed fifth for grass.",
  },
  {
    title: "5. Land had man doesn't the very a doesn't?",
    content:
      "Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth nhath rule creepeth own lesser years itself so seed fifth for grass.",
  },
];

const Faqs = () => {
  const [activeSections, setActiveSections] = useState([]);
  const [activeSections1, setActiveSections1] = useState([]);
  const [collapsed, setCollapsed] = useState(true);
  const [multipleSelect, setMultipleSelect] = useState(true);
  const [multipleSelect1, setMultipleSelect1] = useState(true);

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  const setSections = (sections) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };
  const setSections1 = (sections) => {
    setActiveSections1(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Icon name="chevron-down" type="ionicon" color={BlackColor} />
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  const renderContent = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.Text
          animation={isActive ? "bounceIn" : undefined}
          style={{ textAlign: "left" }}
        >
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  };

  return (
    <ImageBackground
      style={{ flex: 1, paddingTop: 20 }}
      source={require("../img/wb.jpg")}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Faqs</Text>
        <ScrollView>
          <Text style={styles.title2}>Orders:</Text>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT1}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={renderHeader}
            renderContent={renderContent}
            duration={400}
            onChange={setSections}
          />
          <Divider />
          <Text style={styles.title2}>Shipping & Returns:</Text>
          <Divider />
          <Accordion
            activeSections={activeSections1}
            sections={CONTENT2}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect1}
            renderHeader={renderHeader}
            renderContent={renderContent}
            duration={400}
            onChange={setSections1}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Faqs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  title: {
    textAlign: "center",
    fontSize: TitleSize / 2,
    fontFamily: "Roboto_700Bold",
    color: WhiteColor,
    marginBottom: 20,
  },
  title2: {
    textAlign: "left",
    fontSize: TitleSize / 2.5,
    fontFamily: "Roboto_500Medium",
    color: BlackColor,
    marginVertical: width / 20,
    marginLeft: width / 20,
  },
  header: {
    padding: 10,
    flexDirection: "row",
  },
  headerText: {
    textAlign: "left",
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    padding: 20,
    borderTopRightRadius: 50,
    marginHorizontal: width / 20,
    backgroundColor: "white",
  },
  active: {
    // backgroundColor: "rgba(255,255,255,1)",
  },
  inactive: {
    // backgroundColor: "rgba(245,252,255,1)",
  },
  selectors: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  activeSelector: {
    fontWeight: "bold",
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: "500",
    padding: 10,
    textAlign: "center",
  },
  multipleToggle: {
    flexDirection: "row",
    marginVertical: 30,
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
