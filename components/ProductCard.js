import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as React from "react";
import { AntDesign } from "@expo/vector-icons"
import { useColorScheme } from 'nativewind';


export default function ProductCard({
    image,
    category,
    title,
    price,
    description }) {
    const [count, setCount] = React.useState(1);
    const { ColorScheme } = useColorScheme();

    return (
        <View className="w-full bg-white dark:bg--50/10 rounded-3xl p-5 my-5">
            <View className="bg-white rounded-xl">

                <Image
                    source={{ uri: image }}
                    style={{ width: '100%', height: 200, resizeMode: "contain" }}
                />
            </View>
            <View className="mt-5">
                <Text className="text-sm text-black/60 dark:text-white/70">
                    {category}</Text>
                <Text className="text-lg font-semibold dark:text-black">{title}</Text>

                <View className="flex-0.5 justify-between my-4">

                    <View className="flex-row justify-center gap-2 items-center">
                        <AntDesign
                            name='minuscircleo'
                            size={24}
                            color={ColorScheme === "dark" ? "white" : "black"}
                            onPress={() => setCount(count - 1)}
                        />
                        <Text className="text-xl light:text-white">{count}</Text>
                        <AntDesign
                            name='pluscircleo'
                            size={24}
                            color={ColorScheme === "dark" ? "white" : "black"}
                            onPress={() => setCount(count + 1)}
                        />
                        <View className="flew-row justify-between">
                            <Text className=" text-2xl font-extrabold light:text-white">{price * count}€</Text>
                        </View>

                    </View>
                </View>
                <View>
                    <Text numberOfLines={2} className="text-sm text-black/60 dark:text-white/70">
                        {description}
                    </Text>
                    <TouchableOpacity className="flex-row justify-center w-10/12 self-center mt-5 bg-black dark:bg-white p-3 rounded-full">
                        <Text className="text-white dark:text-black fontbold">Add to Card</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


