// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
// import Plot from 'plotly.js'
// import Highlighter from "react-highlight-words";
 

function App() {
    const [sentenceData, setSentencedata] = useState(null);
    const [emotionData, setEmotionData] = useState(null);
    const [extractedEmotionValues, setEmotionValues] = useState(null);
 

    useEffect(() => {
        const fetchData = async () => {
          try {
            const sentences = await axios.get('/data');
            const emotions = await axios.get('/emotion');
            setSentencedata(sentences.data);
            setEmotionData(emotions.data);
            for (let key in extractedEmotionValues.data) {
              if (extractedEmotionValues.data.hasOwnProperty(key)) {
                setEmotionValues(extractedEmotionValues.push(extractedEmotionValues.data[key]));
              }
            }
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
    }, []);

    


    
    return (
      <div className="App">
          <header className="App-header">
          

              <h1>React and flask</h1>
              {/* Calling a data from setdata for showing */}

              {/* <ul>
                {data.sentences.map(item => (
                  <p>{item}</p> 
                ))}
              </ul>

              <ul>
                {data.emotion.map(emo => (
                  <p>{emo}</p> 
                ))}
              </ul> */}
              

              <div>
                <h2>Data from Sentences:</h2>
                {sentenceData && <pre>{JSON.stringify(sentenceData, null, 2)}</pre>}

                <h2>Data from Emotions:</h2>
                {emotionData && <pre>{JSON.stringify(emotionData, null, 2)}</pre>}

                <h2>Map from Emotions:</h2>
                {extractedEmotionValues && <pre>{JSON.stringify(extractedEmotionValues, null, 2)}</pre>}
              </div>

              {/* <div>
              {extractedEmotionValues.map((value, index) => (
                <h2 key={index}>{value}</h2>
              ))}
              </div> */}

                {/* <Plot
                data={[
                  {
                    x: [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10],
                    y: [2, 6, 3],
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'red'},
                  },
                  {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                ]}
                layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
              /> */}
              {/* <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords= {["I ", "at"]}
                autoEscape={true}
                textToHighlight={data.corpus}
              /> */}
          </header>
      </div>
      
  );
}
export default App;