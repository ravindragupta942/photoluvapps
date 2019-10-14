import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import { Container, Header, DeckSwiper, Content, View, Button, Footer, FooterTab, Card, Title, Right, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
const photosList = [
    {
        text: 'You',
        name: 'Luv',
        message: 'You were my first my last.There shall never be another you. You are a lifetime you are my life. ',
        image: require('./img/pic2.jpg'),
    },
    {
        text: 'You',
        name: 'Luv',
        message: 'The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.',
        image: require('./img/myphoto.jpg'),
    },
    {
        text: 'You',
        name: 'Luv',
        message: 'The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.',
        image: require('./img/pic4.jpg'),
    }
];

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    engine: {
        position: 'absolute',
        right: 0,
    },

    centerText: {
        height: 70,
        fontSize: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        backgroundColor: '#ED4A6A'
    },
    messageTxt: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20
    },
    messageFont: {
        fontSize: 20
    },
    headerText: {
        fontSize: 20
    },
    content: {
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#ED4A6A',
    },
    thumbnail: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    manualPos: {
        position: "absolute",
        bottom: 0
    }
});
export class DeckSwiperAdvancedExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataSource: []
        };
    }

    componentDidMount() {
        // fetch("https://picsum.photos/v2/list")
        //     .then(response => response.json())
        //     .then((responseJson) => {
        //         this.setState({
        //             loading: false,
        //             dataSource: responseJson
        //         })
        //     })
        //     .catch(error => console.log(error)) //to catch the errors if any
    }

    render() {
        return (
            <Container>
                <Header style={styles.centerText}>
                    <Left />
                    <Body>
                        <Title style={styles.headerText}>Photo Luv</Title>
                    </Body>
                    <Right />
                </Header>
                <View>
                    <DeckSwiper
                        dataSource={photosList}
                        renderItem={item =>
                            <Card style={{ elevation: 3 }}>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={item.image} />
                                        <Body>
                                            <Text>{item.text}</Text>
                                            <Text note>Love f</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image style={{ height: 300, flex: 1 }} source={item.image} />
                                </CardItem>
                                <CardItem>
                                    <Icon name="heart" style={{ color: '#ED4A6A' }} />
                                    <Text>{item.name}</Text>
                                </CardItem>
                                <CardItem>
                                    <Text>{item.message}</Text>
                                </CardItem>
                            </Card>
                        }
                    />
                </View>
                <Footer style={styles.manualPos}>
                    <FooterTab style={styles.bg}>
                        <Button active style={styles.button}>
                            <Icon active name="photos" />
                        </Button>
                        <Button style={styles.button}>
                            <Icon name="camera" />
                        </Button>
                        <Button style={styles.button}>
                            <Icon name="save" />
                        </Button>
                        <Button style={styles.button}>
                            <Icon name="person" />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}