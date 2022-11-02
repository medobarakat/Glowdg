import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { width, height, smallSize, secSmallSize } from "../constants/Sized";
import { BlackColor, GrayColor } from "../constants/Colors";
import { Divider, Button } from "@rneui/themed";
import { useTranslation } from "react-i18next";

const ProductDetail = ({ navigation, route }) => {
  const { t } = useTranslation();
  const { type, name, price, image } = route.params;
  const [number, setNumber] = useState(0);
  const increment = () => {
    setNumber(number + 1);
  };
  const decrement = () => {
    setNumber(number - 1);
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.imgcontainer}>
          <Image source={{ uri: image }} style={styles.img} />
        </View>
        <View style={styles.txtcontainer}>
          <Text style={styles.typetxt}>{type}</Text>
          <Text style={styles.nametxt}>{name}</Text>
          <Text style={styles.nametxt}>
            {price} {t("dinar")} (In Stock)
          </Text>
          <Divider style={{ marginVertical: height / 60 }} />
          <View>
            <Text style={styles.categorytxt}>
              Category : <Text style={styles.categorytxt1}>{type}</Text>
            </Text>
          </View>
          <View style={styles.numbercontainer}>
            <TouchableOpacity
              style={styles.numbercontainernumber}
              onPress={() => increment()}
            >
              <Text style={styles.numbercontainernumbertxt}>+</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.thenumberofcount}>{number}</Text>
            </View>
            <TouchableOpacity
              style={styles.numbercontainernumber}
              onPress={() => decrement()}
            >
              <Text style={styles.numbercontainernumbertxt}>-</Text>
            </TouchableOpacity>
          </View>
          <Divider style={{ marginVertical: height / 90 }} />

          <View style={styles.btncontainer}>
            <Button
              onPress={() => navigation.goBack()}
              title="Order"
              color={"warning"}
              buttonStyle={{ borderRadius: width / 40, width: width / 2 }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: width / 20,
  },
  imgcontainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: height / 20,
  },
  img: {
    borderRadius: height / 20,
    borderColor: BlackColor,
    borderWidth: 1,
    width: width / 1.4,
    height: height / 2,
  },
  txtcontainer: {
    marginTop: height / 50,
    marginLeft: width / 50,
  },
  typetxt: {
    fontFamily: "Roboto_700Bold",
    fontSize: smallSize,
    color: GrayColor,
    textTransform: "capitalize",
  },

  nametxt: {
    fontFamily: "Roboto_700Bold",
    fontSize: secSmallSize,
    color: BlackColor,
    textTransform: "capitalize",
    marginTop: height / 60,
  },
  categorytxt: {
    fontFamily: "Roboto_700Bold",
    fontSize: smallSize,
    color: BlackColor,
  },
  categorytxt1: {
    textTransform: "capitalize",
    color: GrayColor,
  },
  btncontainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: height / 40,
  },
  numbercontainer: {
    flexDirection: "row",
    width: width / 1.2,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: height / 50,
  },
  numbercontainernumber: {
    borderWidth: 1,
    borderColor: BlackColor,
    paddingHorizontal: width / 30,
    paddingVertical: height / 490,
  },
  numbercontainernumbertxt: {
    fontSize: secSmallSize * 1.5,
  },
  thenumberofcount: {
    marginHorizontal: width / 50,
    fontFamily: "Roboto_700Bold",
  },
});
