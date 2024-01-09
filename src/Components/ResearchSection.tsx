import { Carousel, Embla } from '@mantine/carousel';
import { Text, useMantineTheme, Timeline, Spoiler } from '@mantine/core';
import {useState, useCallback, useEffect } from 'react';

const ResearchSection = () => {



    function areClose(a: number, b: number, tolerance: number = Number.EPSILON): boolean {
        return Math.abs(a - b) < tolerance;
      }

    const theme = useMantineTheme();

    const [scrollProgress, setScrollProgress] = useState(0);
    const [embla, setEmbla] = useState<Embla | null>(null);
    const interval = 100.0/4;
    var previous_progress = 0.0;
    const project_title_dic: { [key: string]: string} = {
        '0': 'MRI 영상개선을 위한 텐서 기반 학습',
        '1': '라디오믹스 기반 비정형 파킨슨병 진단',
        '2': '치매진단을 위한 서피스정합 가속화',
        '3': '서피스 기반의 뇌장애 진단',
    }
    const project_content_dic: { [key: string]: string} = {
        '0': '뇌의 자기공명영상(MRI) 데이터의 표면 기반 분석은 임상 및 연구 응용 분야에서 중요한 역할을 합니다. 정확한 3차원(3D) 표면 재구성을 달성하려면 고해상도(HR) MR 영상 획득이 필요합니다. 그러나 HR 영상 획득은 긴 획득 시간과 낮은 공간 적용 범위를 초래하는 하드웨어 제한으로 인해 방해를 받습니다. 단일 영상 초해상도(SISR)는 저해상도(LR) 영상을 HR 영상으로 변환하여 이러한 문제를 완화할 수 있습니다. 그러나 2D SISR 방법과 달리 기존의 3D 방법은 많은 계산 비용이 발생하고 풍부한 데이터가 필요합니다.',
        '1': 'project2 description',
        '2': 'project3 description',
        '3': 'project4 description',
        '4': 'project5 description',
        '5': 'project6 description',
    }

    const handleScroll = useCallback(() => {
      if (!embla) return;
      if (areClose(previous_progress, embla.scrollProgress())){
        previous_progress = embla.scrollProgress()
        return
      }
      const progress = Math.max(0, Math.min(1, embla.scrollProgress() )) * 100;
      if (progress != 0){
        var n = Math.round(progress/interval)
        if (n==4){
            n=0
        }
        setScrollProgress(n);
      }
      else {
        setScrollProgress(0);
      }

    }, [embla, setScrollProgress]);
  
    useEffect(() => {
      if (embla) {
        embla.on('scroll', handleScroll);
        handleScroll();
      }
    }, [embla]);


    const carouselContent = {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column' as 'column',
        backgroundColor: theme.colors.blue[2],
        gap: 15
    };

    return (
        <section id="research-section">
            <div className='container'>
                <Text className="title" align="center" mb="15px">
                    Our Research
                </Text>

                <Text className="content" align="center" mb="25px">
                In the three-dimensional environment we live in, there exist numerous natural (such as humans and animals) as well as artificial (such as cars and computers) structures. The visual representations of these structures can be acquired as two-dimensional or three-dimensional digital data through commonly used devices like mobile phones, cameras, or specialized scanning equipment. Technologies for separating these structures from digital images and analyzing/calculating the extracted structural data have been actively developed, particularly in recent years, with a focus on techniques utilizing machine learning, including deep learning, for classification and recognition of structures. Our research lab is dedicated to representing diverse and complex structures through surface modeling and developing algorithms for computing matching between structures of the same category but with different shapes. These shape modeling and matching techniques are utilized as core technologies in various industries relying on image-based applications, including animation, entertainment, security surveillance, robotics, and autonomous driving. In the field of healthcare, in particular, three-dimensional images obtained through techniques like magnetic resonance imaging (MRI) and computed tomography (CT) are used to model/match internal structures (such as the cerebral cortex and hippocampus in the brain) and develop systems for tracking structural changes caused by diseases and diagnosing them.
                </Text>
            </div>

                <div className='project-div'>
                    <Carousel
                        className='carousel'
                        getEmblaApi={setEmbla}
                        controlSize={40}
                        slideSize="33.333%"
                        slideGap="lg"
                        loop
                        align="center"
                        pr="6%"
                        pl="6%"
                    >
                        <Carousel.Slide>
                            <div style={carouselContent}>
                                <img src='pj1.png'/>
                            </div>
                        </Carousel.Slide>
                        
                        <Carousel.Slide>
                            <div style={carouselContent}>
                                <img src='pj2.png'/>
                            </div>
                        </Carousel.Slide>

                        <Carousel.Slide>
                            <div style={carouselContent}>
                                <img src='pj3.png'/>
                            </div>
                        </Carousel.Slide>

                        <Carousel.Slide>
                            <div style={carouselContent}>
                                <img src='pj4.png'/>
                            </div>
                        </Carousel.Slide>
                        
                        
                    </Carousel>

                    <div className='description'>
                        
                        <Text className="title" align="center" mt="30px" mb="15px">
                            {project_title_dic[String(scrollProgress)]}
                        </Text>
                        <Text className="content">
                            {project_content_dic[String(scrollProgress)]}
                        </Text>


                        {/* <Spoiler className='spoiler' maxHeight={120} showLabel="Show more" hideLabel="Hide"> */}
                            <Timeline className='timeline' active={190000}>
                                <Timeline.Item title="3D Brain MRI Super-Resolution with Image Gradient Tensor Feature Clustering">
                                    <text className='timeline-item-content'>Seongsu Park, Jin Kyu Gahm, The Organization for Human Brain Mapping (OHBM), 2021</text>
                                </Timeline.Item>

                                <Timeline.Item className='timeline-item'  title="Super-Resolution of 3D Brain MRI with Filter Learning Using Tensor Feature Clustering">
                                    <Text  className='timeline-item-content'>Seongsu Park, and Jin Kyu Gahm, IEEE Access, Vol. 10,  2022 
                                    <a href="https://www.example.com" target="_blank"> [Link]</a> 
                                    <a href="https://www.example.com" target="_blank"> [preprint]</a>
                                    </Text>
                                </Timeline.Item>
                            </Timeline>
                        {/* </Spoiler> */}
                    </div>
                </div>
        </section>
    );
};

export default ResearchSection;