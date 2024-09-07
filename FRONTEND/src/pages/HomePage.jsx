import React from 'react';
import styles from './HomePage.module.css';
import NavBar from '../components/NavBar';
import Slider from '../components/Slider';

const HomePage = () => {
    return (
        <div className={styles.container}>
        <NavBar />
        <Slider />
        </div>
    );
};

export default HomePage;
