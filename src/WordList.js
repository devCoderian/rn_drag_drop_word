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
    const [randomWords, setRandomWords] = useState([...wordList].sort(()=> Math.random() -0.5));
    // const words = word.split(' ');
    // console.log(words);
    const [num, setNum] = useState(0);
    
    const isOrder = (idx) => {
        
        //idx 올리기
        console.log(num);
        console.log(randomWords[idx],words[num])
        
        if(randomWords[idx] === words[num]){
       
            // setWords(words.filter((item, idx) => 
            //     words[num] !== randomWords[idx]
            // ));
            //console.log(randomWords[idx], words[num]);
            //console.log(randomWords.splice(idx, 1));
       
            //자르기
            setRandomWords(randomWords.filter((item, idx) => 
                words[num] !== randomWords[idx]
            ));
            console.log('+');
            setNum((prev) => prev+1);
            console.log('num', num);
            //setRandomWords(randomWords);
        }else{
            console.warn('다시');
        }

        console.warn(idx);
        /*
        if(idx === num){
            //words.slice(-1);
            //정답일 경우 체크하기
            setWords(words.filter((item, idx) => 
            // num !== idx
                words[num] !== randomWords[idx]
            ));
            //setWords(words[idx] === idx)
            num++; 
        }else{
            //modal 창 만들기
            console.warn('다시');
            
        setWords(words.filter((item, idx) => 
        // num !== idx
            words[num] !== randomWords[idx]      
        ));

        }
        // if(num===23){
        //     console.warn('통과');
        // }
        */
    }

    useEffect(() => {
        //통과 여부 체크하기
        words.length === 0  && console.warn('통과');
    }, [words]);

    const WordComponent = randomWords.map((item, idx) => {         
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
