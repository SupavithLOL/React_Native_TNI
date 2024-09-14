import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
// import AppLogo from "../components/AppLogo";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import { findAllProduct } from "../services/product-service";
import { FlatList } from "react-native-gesture-handler";
import { ListRenderItem } from "react-native";
import { ListItem, Avatar } from "@rneui/themed";
import { Badge } from "@rneui/base";
import DetailScreen from "./DetailScreen";

const MaterialHeaderButton = (
  props: any // the `props` here come from <Item ... /> // you may access them and pass something else to `HeaderButton` if you like
) => <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />;

const ProductScreen = () => {
  const navigation = useNavigation<any>();

  //กำหนด state
  const [product, setProduct] = useState<any[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "สินค้า",
      //   headerTitle: () => <AppLogo />,
      headerTitleAlign: "center",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const getProduct = async () => {
    try {
      const response = await findAllProduct();
      setProduct(response.data.data);
      setLoading(true);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getProduct();
    }, [])
  );

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const _renderItem: ListRenderItem<any> = ({ item }) => {
    return (
      <>
        <ListItem
          bottomDivider
          onPress={() => {
            navigation.navigate("Details", {
              id: item.id,
              title: item.title,
            });
          }}
        >
          <Avatar source={{ uri: item.picture }} size={50} rounded />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            <ListItem.Subtitle>{item.detail}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
          <Badge value={item.view} status="success" />
        </ListItem>
      </>
    );
  };

  return (
    <View>
      <FlatList
        data={product}
        renderItem={_renderItem}
        keyExtractor={(item: any) => item.id.toString()}
        onRefresh={async () => {
          await getProduct();
        }}
        refreshing={loading}
      />
      {/* <Text>{JSON.stringify(product)}</Text> */}
    </View>
  );
};

export default ProductScreen;
