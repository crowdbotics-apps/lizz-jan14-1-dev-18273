import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_10416_212}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4302/20c6/8a82778360676eb22b8cce53ccfd1503"
          }}
          style={styles.ImageBackground_10416_213}
        />
        <View style={styles.View_10416_214} />
        <View style={styles.View_10416_215} />
        <View style={styles.View_10416_216}>
          <Text style={styles.Text_10416_216}>INGREDIENTS</Text>
        </View>
        <View style={styles.View_10416_217}>
          <Text style={styles.Text_10416_217}>DIRECTIONS</Text>
        </View>
        <View style={styles.View_10416_218}>
          <Text style={styles.Text_10416_218}>
            8 1/2 cup 1 tsp 1/4 cup 1/4 tsp
          </Text>
        </View>
        <View style={styles.View_10416_219}>
          <Text style={styles.Text_10416_219}>4</Text>
        </View>
        <View style={styles.View_10416_220}>
          <Text style={styles.Text_10416_220}>
            eggs mayo yellow mustard chopped green onion paprika salt &amp;
            pepper to taste
          </Text>
        </View>
        <View style={styles.View_10416_221}>
          <Text style={styles.Text_10416_221}>
            1. Place egg in a saucepan and cover with cold water. Bring water to
            a boil and immediately remove from heat. Cover and let eggs stand in
            hot water for 10 to 12 minutes. 2. Remove from hot water, cool, peel
            and chop. Place the chopped eggs in a bowl, and stir in the
            mayonnaise, mustard and green onion. Season with salt, pepper and
            paprika. 3. Stir and serve on your favorite bread with avocado and
            spinach.
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e9f/e266/bda3eee633eed5f0b728cc9428074fbd"
          }}
          style={styles.ImageBackground_10416_222}
        />
        <View style={styles.View_10416_223}>
          <Text style={styles.Text_10416_223}>Gourmet Egg Salad Sandwich</Text>
        </View>
        <View style={styles.View_10416_224}>
          <Text style={styles.Text_10416_224}>
            Check out the easy version of this recipe
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/440d/0e30/942709752c449dcd477c567bead7e433"
          }}
          style={styles.ImageBackground_10416_225}
        />
        <View style={styles.View_10416_226}>
          <Text style={styles.Text_10416_226}>Super gourmet egg sandwich</Text>
        </View>
        <View style={styles.View_10416_227}>
          <Text style={styles.Text_10416_227}>Time</Text>
        </View>
        <View style={styles.View_10416_228}>
          <Text style={styles.Text_10416_228}>15 min</Text>
        </View>
        <View style={styles.View_10416_229}>
          <Text style={styles.Text_10416_229}>Level</Text>
        </View>
        <View style={styles.View_10416_230}>
          <Text style={styles.Text_10416_230}>Expert</Text>
        </View>
        <View style={styles.View_10416_231}>
          <Text style={styles.Text_10416_231}>Calories</Text>
        </View>
        <View style={styles.View_10416_232}>
          <Text style={styles.Text_10416_232}>435</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71eb/2e0d/52e660af06f79bb8dde3deca5bcf6e7f"
          }}
          style={styles.ImageBackground_10416_233}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/109c/eac7/883c1748d867a18c68d8a0aad3960bf3"
          }}
          style={styles.ImageBackground_10416_236}
        />
        <View style={styles.View_10416_240}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/700e/679b/40ba332803882eb06f0cbd8097b7629b"
            }}
            style={styles.ImageBackground_10416_241}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_10416_212: {
    width: 375,
    minWidth: 375,
    height: 1252,
    minHeight: 1252,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10416_213: {
    width: 375,
    minWidth: 375,
    height: 784,
    minHeight: 784,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_10416_214: {
    width: 375,
    minWidth: 375,
    height: 515,
    minHeight: 515,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_10416_215: {
    width: 325,
    minWidth: 325,
    height: 215,
    minHeight: 215,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 569,
    backgroundColor: "rgba(121, 202, 232, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_10416_216: {
    width: 248,
    minWidth: 248,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 47,
    top: 589
  },
  Text_10416_216: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10416_217: {
    width: 248,
    minWidth: 248,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 824
  },
  Text_10416_217: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10416_218: {
    width: 60,
    minWidth: 60,
    minHeight: 113,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 47,
    top: 621
  },
  Text_10416_218: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10416_219: {
    width: 135,
    minWidth: 135,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 194,
    top: 590
  },
  Text_10416_219: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10416_220: {
    width: 204,
    minWidth: 204,
    minHeight: 151,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 134,
    top: 621
  },
  Text_10416_220: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10416_221: {
    width: 325,
    minWidth: 325,
    minHeight: 293,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 861
  },
  Text_10416_221: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10416_222: {
    width: 15,
    minWidth: 15,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 299,
    top: 590,
    resizeMode: "cover"
  },
  View_10416_223: {
    width: 268,
    minWidth: 268,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 1193
  },
  Text_10416_223: {
    color: "rgba(121, 202, 232, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10416_224: {
    width: 325,
    minWidth: 325,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 1154
  },
  Text_10416_224: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10416_225: {
    width: 13.00000286102295,
    minWidth: 13.00000286102295,
    height: 13.000000953674316,
    minHeight: 13.000000953674316,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 240,
    top: 1203
  },
  View_10416_226: {
    width: 269,
    minWidth: 269,
    minHeight: 82,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 77
  },
  Text_10416_226: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10416_227: {
    width: 51,
    minWidth: 51,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 171
  },
  Text_10416_227: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10416_228: {
    width: 51,
    minWidth: 51,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 191
  },
  Text_10416_228: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10416_229: {
    width: 51,
    minWidth: 51,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 107,
    top: 171
  },
  Text_10416_229: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10416_230: {
    width: 62,
    minWidth: 62,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 107,
    top: 191
  },
  Text_10416_230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10416_231: {
    width: 76,
    minWidth: 76,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 171
  },
  Text_10416_231: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10416_232: {
    width: 62,
    minWidth: 62,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 191
  },
  Text_10416_232: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10416_233: {
    width: 73,
    height: 73,
    top: 319,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 152
  },
  ImageBackground_10416_236: {
    width: 48,
    height: 48,
    top: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 317
  },
  View_10416_240: {
    width: 60,
    minWidth: 60,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 16,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10416_241: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 17
  },
  View_2: { height: 1252 }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
