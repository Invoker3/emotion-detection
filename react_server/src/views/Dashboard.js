import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { Line } from "react-chartjs-2";
import axios from 'axios';
import Chart from "react-apexcharts";
import "assets/scss/black-dashboard-react.scss";
import ReactWordcloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };

  const textBoxStyle = {
    width: '1300px',
    height: '100px',
  };

  const submitStyle = {
    width: '150px',
    height: '50px',
  };
  const dataRefAdmiration = useRef(null);
  const dataRefamusement = useRef(null);
  const dataRefanger = useRef(null);
  const dataRefannoyance = useRef(null);

  const dataRefapproval = useRef(null);
  const dataRefcaring = useRef(null);
  const dataRefconfusion = useRef(null);
  const dataRefcuriosity = useRef(null);

  const dataRefdesire = useRef(null);
  const dataRefdisapproval = useRef(null);
  const dataRefdisgust = useRef(null);
  const dataRefDisappointment = useRef(null);

  const dataRefembarrassment = useRef(null);
  const dataRefexcitement = useRef(null);
  const dataReffear = useRef(null);
  const dataRefgratitude = useRef(null);

  const dataRefgrief = useRef(null);
  const dataRefjoy = useRef(null);
  const dataReflove = useRef(null);
  const dataRefnervousness = useRef(null);

  // const dataRefneutral = useRef(null);
  const dataRefoptimism = useRef(null);
  const dataRefpride = useRef(null);
  const dataRefrealization = useRef(null);

  const dataRefrelief = useRef(null);
  const dataRefremorse = useRef(null);
  const dataRefsadness = useRef(null);

  const [emotionList, setEmotionList]= useState([]);
  const [currentEmotionList, setCurrentEmotionList]= useState([]);

  const [inputText, setInputText] = useState('');
  const [submitData, setSubmitData] = useState('');
  const [numberOfSentences, setNumberOfSentences]= useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitData(event.target.value)

    fetchData();
    axios.post('/emotion', { text: inputText })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
  };

  const emotionsWordCloud = [
    { text: 'Admiration', value: dataRefAdmiration.current },
    { text: 'Amusement', value: dataRefamusement.current },
    { text: 'Anger', value: dataRefanger.current },
    { text: 'Annoyance', value: dataRefannoyance.current },
    { text: 'Approval', value: dataRefapproval.current },
    { text: 'Caring', value: dataRefcaring.current },
    { text: 'Confusion', value: dataRefconfusion.current },
    { text: 'Curiosity', value: dataRefcuriosity.current },
    { text: 'Desire', value: dataRefdesire.current },
    { text: 'Disappointment', value: dataRefdisapproval.current },
    { text: 'Disapproval', value: dataRefdisapproval.current },
    { text: 'Disgust', value: dataRefdisgust.current },
    { text: 'Embarrassment', value: dataRefembarrassment.current },
    { text: 'Excitement', value: dataRefexcitement.current },
    { text: 'Fear', value: dataReffear.current },
    { text: 'Gratitude', value: dataRefgratitude.current },
    { text: 'Grief', value: dataRefgrief.current },
    { text: 'Joy', value: dataRefjoy.current },
    { text: 'Love', value: dataReflove.current },
    { text: 'Nervousness', value: dataRefnervousness.current },
    { text: 'Optimism', value: dataRefoptimism.current },
    { text: 'Pride', value: dataRefpride.current },
    { text: 'Realization', value: dataRefrealization.current },
    { text: 'Relief', value: dataRefrelief.current },
    { text: 'Remorse', value: dataRefremorse.current },
    { text: 'Sadness', value: dataRefsadness.current }
  ];


  const filteredEmotions = emotionsWordCloud.filter((emotion) => emotion.value !== 0);
  useEffect(() => {
  }, [submitData]);

  const [emotions, setEmotions] = useState({});

  const EmotionDisplay = ({ emotions }) => {

    const getEmotionColor = (emotion) => {
      switch (emotion) {
        case 'admiration':
          return '#FF5733';
        case 'amusement':
          return '#33FF57';
        case 'anger':
          return '#5733FF';
        case 'annoyance':
          return '#FFA500';
        case 'approval':
          return '#00FF00';
        case 'caring':
          return '#FFC0CB';
        case 'confusion':
          return '#FFFF00';
        case 'curiosity':
          return '#800080';
        case 'desire':
          return '#FFD700';
        case 'disappointment':
          return '#8B0000';
        case 'disapproval':
          return '#4B0082';
        case 'disgust':
          return '#A52A2A';
        case 'embarrassment':
          return '#D2691E';
        case 'excitement':
          return '#FF7F50';
        case 'fear':
          return '#FF4500';
        case 'gratitude':
          return '#00FFFF';
        case 'grief':
          return '#FFD700';
        case 'joy':
          return '#FF1493';
        case 'love':
          return '#FFC0CB';
        case 'nervousness':
          return '#ADFF2F';
        case 'optimism':
          return '#FF69B4';
        case 'pride':
          return '#1E90FF';
        case 'realization':
          return '#FF6347';
        case 'relief':
          return '#00FF7F';
        case 'remorse':
          return '#9400D3';
        case 'sadness':
          return '#FF8C00';
        default:
          return '#FFFFFF';
      }
    };
    
    return (
        <div>
          {Object.entries(emotions).map(([emotion, values], index) => (
              <span key={index} style={{ color: getEmotionColor(emotion) }} title={emotion}>
          {values.join(' ')}
        </span>
          ))}

        </div>
    );

  };


  const WordCloudComponent = ({ words }) => {
    const options = {
      colors: ['#FF5733', '#33FF57', '#5733FF', '#FFA500', '#00FF00', '#FFC0CB',
        '#FFFF00', '#800080', '#FFD700', '#8B0000', '#4B0082', '#A52A2A',
        '#D2691E', '#FF7F50', '#FF4500', '#00FFFF', '#FFD700', '#FF1493',
        '#FFC0CB', '#ADFF2F', '#FF69B4', '#1E90FF', '#FF6347', '#00FF7F',
        '#9400D3', '#FF8C00'],
      enableTooltip: true,
      deterministic: false,
      fontFamily: 'impact',
      fontSizes: [15, 60],
      fontStyle: 'normal',
      fontWeight: 'normal',
      padding: 1,
      rotations: 1,
      rotationAngles: [0, 90],
      scale: 'sqrt',
      spiral: 'archimedean',
      transitionDuration: 4000
    };

    return (
        <div style={{ width: '600px', height: '400px' }}>
          <ReactWordcloud words={filteredEmotions} options={options} />
        </div>
    );
  };




  const fetchData = async () => {

    const emotions = await axios.get('/emotion');
    const sentenceCount = await axios.get('/count');

    setEmotions(emotions.data.sentence_emotion_dictionary);

    dataRefAdmiration.current = emotions.data.emotions_list["admiration"]
    dataRefamusement.current = emotions.data.emotions_list["amusement"]
    dataRefanger.current = emotions.data.emotions_list["anger"]

    dataRefannoyance.current = emotions.data.emotions_list["annoyance"]
    dataRefapproval.current = emotions.data.emotions_list["approval"]
    dataRefcaring.current = emotions.data.emotions_list["caring"]

    dataRefconfusion.current = emotions.data.emotions_list["confusion"]
    dataRefcuriosity.current = emotions.data.emotions_list["curiosity"]
    dataRefdesire.current = emotions.data.emotions_list["desire"]

    dataRefdisapproval.current = emotions.data.emotions_list["disapproval"]
    dataRefdisgust.current = emotions.data.emotions_list["disgust"]
    dataRefDisappointment.current = emotions.data.emotions_list["disappointment"]

    dataRefembarrassment.current = emotions.data.emotions_list["embarrassment"]
    dataRefexcitement.current = emotions.data.emotions_list["excitement"]
    dataReffear.current = emotions.data.emotions_list["fear"]

    dataRefgratitude.current = emotions.data.emotions_list["gratitude"]
    dataRefgrief.current = emotions.data.emotions_list["grief"]
    dataRefjoy.current = emotions.data.emotions_list["joy"]

    dataReflove.current = emotions.data.emotions_list["love"]
    dataRefnervousness.current = emotions.data.emotions_list["nervousness"]
    // dataRefneutral.current = emotions.data.emotions_list["neutral"]
    dataRefoptimism.current = emotions.data.emotions_list["optimism"]

    dataRefpride.current = emotions.data.emotions_list["pride"]
    dataRefrealization.current = emotions.data.emotions_list["realization"]
    dataRefrelief.current = emotions.data.emotions_list["relief"]

    dataRefremorse.current = emotions.data.emotions_list["remorse"]
    dataRefsadness.current = emotions.data.emotions_list["sadness"]

    let sentences = []
    for(let i = 1; i<=sentenceCount.data; i++){
      sentences[i] = i;
    }
    setNumberOfSentences(sentences);

    const emotionList=[
      "Admiration", "Amusement", "Anger", "Annoyance", "Approval", "Caring", "Confusion", "Curiosity", "Desire", "Disappointment", "Disapproval", "Disgust", "Embarrassment", "Excitement", "Fear", "Gratitude", "Grief", "Joy", "Love", "Nervousness", "Optimism", "Pride", "Realization", "Relief", "Remorse", "Sadness"
    ];// "Neutral"
    const curretnEmotionList=[dataRefAdmiration.current, dataRefamusement.current, dataRefanger.current, dataRefannoyance.current, dataRefapproval.current,
      dataRefcaring.current, dataRefconfusion.current, dataRefcuriosity.current, dataRefdesire.current ,
      dataRefDisappointment.current, dataRefdisapproval.current, dataRefdisgust.current, dataRefembarrassment.current,
      dataRefexcitement.current, dataReffear.current, dataRefgratitude.current, dataRefgrief.current, dataRefjoy.current,
      dataReflove.current, dataRefnervousness.current, dataRefoptimism.current, dataRefpride.current,
      dataRefrealization.current, dataRefrelief.current, dataRefremorse.current, dataRefsadness.current]; //dataRefneutral.current
    const getEmotionData= async()=>{

      setEmotionList(emotionList);
      setCurrentEmotionList(curretnEmotionList);
    }
    getEmotionData();
  }
  
  let chart1_2_options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent",
        },
        ticks: {

          padding: 20,
          fontColor: "#9a9a9a",
        },
      },
      xAxes: {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 60,
          suggestedMax: 125,
          padding: 20,
          fontColor: "#9a9a9a",
        },
      },
    },
  };


  let chartExample1 = {
    data1: (canvas) => {
      let ctx = canvas.getContext("2d");

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      return {
        labels: [
          "Admiration", "Amusement", "Anger", "Annoyance", "Approval", "Caring", "Confusion", "Curiosity", "Desire", "Disappointment", "Disapproval", "Disgust", "Embarrassment", "Excitement", "Fear", "Gratitude", "Grief", "Joy", "Love", "Nervousness", "Optimism", "Pride", "Realization", "Relief", "Remorse", "Sadness"
        ], // "Neutral"
        datasets: [
          {
            label: "Frequency",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [dataRefAdmiration.current, dataRefamusement.current, dataRefanger.current, dataRefannoyance.current, dataRefapproval.current,
              dataRefcaring.current, dataRefconfusion.current, dataRefcuriosity.current, dataRefdesire.current ,
              dataRefDisappointment.current, dataRefdisapproval.current, dataRefdisgust.current, dataRefembarrassment.current,
              dataRefexcitement.current, dataReffear.current, dataRefgratitude.current, dataRefgrief.current, dataRefjoy.current,
              dataReflove.current, dataRefnervousness.current, dataRefoptimism.current, dataRefpride.current,
              dataRefrealization.current, dataRefrelief.current, dataRefremorse.current, dataRefsadness.current], // dataRefneutral.current
          },
        ],
      };
    },
    options: chart1_2_options,
  };

  let chart2_options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    responsive: true,
    scales: {
      yAxes: {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent",
        },

        ticks: {
          padding: 20,
          fontColor: "#9a9a9a",
          stepSize: 18,
        },
        type: 'category',
        labels: ["Admiration", "Amusement", "Anger", "Annoyance", "Approval", "Caring", "Confusion", "Curiosity", "Desire", "Disappointment", "Disapproval", "Disgust", "Embarrassment", "Excitement", "Fear", "Gratitude", "Grief", "Joy", "Love", "Nervousness", "Optimism", "Pride", "Realization", "Relief", "Remorse", "Sadness"],
      },
      xAxes: {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9a9a9a",
        },
        type: 'category'
      },
    },
  };

  let chartExample2 = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      return {
        labels: numberOfSentences,
        datasets: [
          {
            label: "Data",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: [1],
          },
        ],
      };
    },
    options: chart2_options,
  };

  return (
      <>
        <div className="content">
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <CardTitle tag="h2">Emotions</CardTitle>
                    </Col>
                    <Col sm="6">
                      <ButtonGroup
                          className="btn-group-toggle float-right"
                          data-toggle="buttons"
                      >
                        <Button
                            tag="label"
                            className={classNames("btn-simple", {
                              active: bigChartData === "data1",
                            })}
                            color="info"
                            id="0"
                            size="sm"
                            onClick={() => setBgChartData("data1")}
                        >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Count
                        </span>
                          <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                        </Button>

                      </ButtonGroup>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                        data={chartExample1[bigChartData]}
                        options={chartExample1.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <div>
            <Row>
              <Col md="12">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h2">Enter Text</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <div className="places-buttons">
                      <Row>
                        <Col>
                          <p>Enter text in the below box</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <textarea style={textBoxStyle} value={inputText} onChange={handleInputChange} />
                        </Col>
                        <Col>
                          <Button md="4"
                                  style={submitStyle}
                                  block
                                  color="primary"
                                  onClick= {handleSubmit}>
                            Submit
                          </Button>

                        </Col>
                      </Row>

                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
          <div className="content">
            <Row>
              <Col xs = "5">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h2">Text</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <EmotionDisplay emotions={emotions} />
                  </CardBody>
                </Card>

              </Col>
              <Col xs = "7">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h2">Emotion Pie Chart</CardTitle>
                  </CardHeader>
                  <div>

                    <Chart
                        type="pie"
                        width={1000}
                        height={400}

                        series={ currentEmotionList }

                        options={{
                          title:{ text:""
                          } ,
                          noData:{text:"Empty Data"},
                          colors: ['#FF5733', '#33FF57', '#5733FF', '#FFA500', '#00FF00', '#FFC0CB',
                            '#FFFF00', '#800080', '#FFD700', '#8B0000', '#4B0082', '#A52A2A',
                            '#D2691E', '#FF7F50', '#FF4500', '#00FFFF', '#FFD700', '#FF1493',
                            '#FFC0CB', '#ADFF2F', '#FF69B4', '#1E90FF', '#FF6347', '#00FF7F',
                            '#9400D3', '#FF8C00'],
                          labels:emotionList,
                          legend: {
                            position: 'left',
                            labels: {
                              colors: '#FFFFFF', // Change the legend text color here
                            },
                          },
                        }}
                    >
                    </Chart>
                  </div>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle tag="h2">Emotion Word Cloud</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <div className="places-buttons" >
                        <WordCloudComponent words={emotionsWordCloud} style={{ marginLeft: '650px' }}/>
                      </div>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col md="12">

              </Col>
            </Row>
          </div>
        </div>
      </>
  );
}

export default Dashboard;
