import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";

const Caps = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t("Caps")}</Text>
    </View>
  );
};

export default Caps;

const styles = StyleSheet.create({});
