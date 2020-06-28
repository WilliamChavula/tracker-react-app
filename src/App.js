import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { fetchdata } from './api';

import styles from './App.module.css';
import imageHeader from './images/image.png'


class App extends Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchdata()
        
        this.setState(
            { data: fetchedData }
        );
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchdata(country)

        this.setState({ data: fetchedData, country: country });
    }

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image}  src={imageHeader} alt="logo" />
                <Cards data={data} />
                <CountryPicker handleCountryChange = {this.handleCountryChange}/>
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;
