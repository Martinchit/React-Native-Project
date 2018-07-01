<ScrollView style={styles.cardContainer}>
        {this.props.favoritedExercises.map((e, idx) => {
                let swipeoutBtns = [
                    {
                      text: 'delete',
                      onPress: () => this.handlePress(),
                      type: 'delete',
                      key:0,
                    },
                    {
                    
                      onPress: function () { alert('item 2') },
                      component: [
                        <Image
                          style={{ width: 50, height: 50 }}
                          source={require('../img/Fats.png')}
                        />],
                        key:1,
                    },
                  ]
              return (
                    <Swipeout right={swipeoutBtns}
                        autoClose={true}
                        key={idx}
                        onOpen={() => {
                            this.setState({exerciseId: idx});
                        }}
                    >
                        <View style={styles.cardHolder}  >

                            <View style={styles.bigGrid}>
                                <Text style={styles.gridText}> {e.exercise} </Text>
                            </View>

                            <View style={styles.smallGrid}>
                                <View><Text style={styles.gridText}> {e.weight} </Text></View>
                                <View><Text style={styles.gridText}> {e.repetition} </Text></View>
                                <View><Text style={styles.gridText}> {e.set} </Text></View>
                            </View>
                        </View>
                    </Swipeout>
              )
            })}
        </ScrollView>