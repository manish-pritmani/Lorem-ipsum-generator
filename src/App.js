import './App.css';
import React, {useState, useEffect} from 'react';
import Container from './components/Container';
import Title from './components/Title';
import Options from './components/Options';
import Output from './components/Output';

const App = () => {
//  Defined all the states we needed in the project.
    const [paragraphs, setParagraphs] = useState([]);
    const [tag, setTag] = useState("p");
    const [inputValue, setInputValue] = useState(1);
    const [includeHtml, setIncludeHtml] = useState("Yes");
    const [copiedCode, setCopiedCode] = useState(false);

//  Fires only once when the page loads due to empty array. First Render only load
    useEffect(()=>{
        const url ='https://baconipsum.com/api/?type=all-meat&paras='+inputValue+'&start-with-lorem=1';
        fetch(url)
        .then(response => response.json())
        .then(data => setParagraphs(data));
    },[inputValue]);
//  Note that the Components are inside Container below.
    return (
        <div className="App">
            <Container>
                <Title />
                <Options
                    paragraphs = {paragraphs}
                    copiedCode = {copiedCode}
                    setCopiedCode = {setCopiedCode}
                    tag = {tag}
                    setTag = {setTag}
                    setInputValue = {setInputValue}
                    includeHtml = {includeHtml}
                    setIncludeHtml = {setIncludeHtml}
                />
                <Output
                    paragraphs = {paragraphs}
                    includeHtml = {includeHtml}
                    tag = {tag}
                />
            </Container>
        </div>
    )
}

export default App;

//            While making container component we have made a parameter passing, which is title here and will be rendered like this
//            <div className="container">
//            <div className="title">
//                <h1>Lorem Ipsum Generator</h1>
//            </div>
//            </div>


//Single component is render with <component /> whereas parameterised/nested component is rendered as <component></component>

//1. React Copy to Clipboard. - text (What is to be copied), onCopy(State changes)
//  2. Hooks used - useState, use Effect
//  3. Bacon Ipsum API - https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1
