import React from 'react';
import './App.css';
import SimpleSlider from './SimpleSlider'
import BarChart from "./Charts/BarChart";
import LineChart from "./Charts/LineChart";
import DoughnutChart from "./Charts/DoughnutChart";
import './Charts/Chart.css';


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: this.getData()
        };
    }

    componentDidMount() {
        window.setInterval(() => {
            this.setState({
                data: this.getData()
            })
        }, 5000)
    }

    getRandomArray(numItems) {
        // Create random array of objects
        let names = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let data = [];
        for (var i = 0; i < numItems; i++) {
            data.push({
                label: names[i],
                value: Math.round(20 + 80 * Math.random())
            });
        }
        return data;
    }

    getRandomDateArray(numItems) {
        // Create random array of objects (with date)
        let data = [];
        let baseTime = new Date('2018-05-01T00:00:00').getTime();
        let dayMs = 24 * 60 * 60 * 1000;
        for (var i = 0; i < numItems; i++) {
            data.push({
                time: new Date(baseTime + i * dayMs),
                value: Math.round(20 + 80 * Math.random())
            });
        }
        return data;
    }

    getData() {
        let data = [];

        data.push({
            title: 'Visits',
            data: this.getRandomDateArray(150)
        });

        data.push({
            title: 'Categories',
            data: this.getRandomArray(20)
        });

        data.push({
            title: 'Categories',
            data: this.getRandomArray(10)
        });

        data.push({
            title: 'Data 4',
            data: this.getRandomArray(6)
        });

        return data;
    }

    render() {

        return (
            <div className="App">
                <div className="main chart-wrapper">
                    <LineChart
                        data={this.state.data[0].data}
                        title={this.state.data[0].title}
                        color="#70CAD1"
                    />
                </div>
                <div className="sub chart-wrapper">
                    <BarChart
                        data={this.state.data[1].data}
                        title={this.state.data[1].title}
                        color="#70CAD1"
                    />
                </div>
              <div className="sub chart-wrapper">
                <BarChart
                    data={this.state.data[2].data}
                    title={this.state.data[2].title}
                    color="#B08EA2"
                />
              </div>
                <div className="sub chart-wrapper">
                    <DoughnutChart
                        data={this.state.data[3].data}
                        title={this.state.data[3].title}
                        colors={['#a8e0ff', '#8ee3f5', '#70cad1', '#3e517a', '#b08ea2', '#BBB6DF']}
                    />
                </div>
            </div>
        );
    }

}

export default App;
