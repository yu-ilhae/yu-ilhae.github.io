import { Text, MediaQuery, Button, useMantineTheme } from '@mantine/core';
import { MdOutlineArrowDownward } from "react-icons/md";
import { Link } from 'react-scroll';

const About = () => {
    const theme = useMantineTheme();
    return (
        <section id="about" style={{backgroundImage:'url("about_bg.jpg")'}}>
            <div className="about-bg-container">
            </div>
            <div className="about-content">

                <div style={{ marginBottom: 5 }}>
                    <Text className="title-top"> 
                        at Pusan National University
                    </Text>
                </div>

                <div style={{ marginBottom: 15 }}>
                    <Text>
                        <MediaQuery query="(max-width: 768px)" styles={{ fontSize: '2.8rem !important' }}>
                            <h1 className="title">Image Computing & Machine Learning Lab</h1>
                        </MediaQuery>
                    </Text>
                </div>

                <div style={{ marginBottom: 10 }}>
                    <Text className="text" size="xl" color="black">
                        Welcome to Image Computing & Machine Learning(ICML) Lab at Computer Science and Enginnering at Pusan National University.<br/>
                        Our research focuses on developing artificial intelligence technologies for healthcare and biomedical applications, with a focus on computer vision and machine learning and deep learning techniques for automatically interpreting biomedical images.
                    </Text>
                </div>
            </div>

            <div className="buttons">
                <Link to="research-section" smooth duration={500}>
                    <Button style={{ backgroundColor: theme.colors.blue[9]}} rightIcon={<MdOutlineArrowDownward size={24} />} radius="lg" size="xl">About more</Button>
                </Link>

                <Link to="news-section" smooth duration={500}>
                    <Button style={{ backgroundColor: theme.colors.blue[9]}} rightIcon={<MdOutlineArrowDownward size={24} />} radius="lg" size="xl">News</Button>
                </Link>

                <Button variant="default" radius="lg" size="xl">Contact</Button>
            </div>


        </section>
    );
};

export default About;