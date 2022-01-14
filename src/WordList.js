import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    wordContainer: {
        width: '80%',
        flexDirection: "row",
        flexWrap: 'wrap'
    },
    txtBox:{
        margin: 10
    },
    checkword: {
        color: 'black',
        fontSize: 18
    }
})

const WordList = () => {
 
    const [valid, setValid] = useState('inline');
    const word = "swear buyer security impulse public stereo peasant correct cross tornado bid discover anchor float venture deal patch property cool wreck eight dwarf december surface";
    const wordList = word.split(' ');

    // const [words, setWords] = useState({...wordList});
    const [words, setWords] = useState(wordList);
    const [randomWords, setRandomWords] = useState(wordList.sort(()=> Math.random() -0.5));
    // const words = word.split(' ');
    // console.log(words);
 
    let num = 0;

    const isOrder = (idx) => {

        console.warn(idx);
        // idx === num ? num++ : console.warn('다시');
        if(idx === num){
            //words.slice(-1);
            // setValid('none')

            //정답일 경우 체크하기
            setWords(words.filter((item, idx) => num !== idx));
            //setWords(words[idx] === idx)
            num++; 
        }else{
            //modal 창 만들기
            console.warn('다시');
        }
        // if(num===23){
        //     console.warn('통과');
        // }
    }

    useEffect(() => {
        //통과 여부 체크하기
        words.length === 0  && console.warn('통과');
    }, [words]);

    const WordComponent = words.map((item, idx) => {         
        return(

                <TouchableOpacity style={styles.txtBox} onPress={()=> isOrder(idx)} key={item+idx}>
                    <Text style ={styles.checkword}>{item}</Text>
                        {/* <Text style={valid ? {color:colors.blue} : {color:colors.red}> */}
                </TouchableOpacity>
        )
      });

    return (
        // <View style={styles.wordList}> 
        <View style={styles.wordContainer}> 
            {WordComponent}
        </View>
    )
}

export default WordList
