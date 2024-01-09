import { Grid, Text, Badge, Paper, Button } from '@mantine/core';
import { Carousel} from '@mantine/carousel';
import { Accordion, useMantineTheme, Card, AspectRatio, Group } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import {useRef} from 'react';
import { ScrollArea } from '@mantine/core';
import { IconArrowBarToDown, IconArrowBarToUp } from '@tabler/icons-react';

const NewsSection = () => {
    const theme = useMantineTheme();

    const autoplay = useRef(Autoplay({delay:3000}));
    const viewport = useRef<HTMLDivElement>(null);
    const scrollToBottom = () => viewport.current!.scrollTo({ top: viewport.current!.scrollHeight, behavior: 'smooth' });
    const scrollToTop = () => viewport.current!.scrollTo({ top: 0, behavior: 'smooth' });

    const question_list = [
        {
          emoji: '👻',
          value: 'q1?',
          description:
            'q1content',
        },
        {
          emoji: '✨',
          value: '어떤 혜택이 있나요?',
          description:
            'scholarship, internship blah blah',
        },
        {
          emoji: '🎖️',
          value: '진학? 진로?',
          description:
            'researcher blah blah',
        },
      ];

    const items = question_list.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
          <Accordion.Panel>{item.description}</Accordion.Panel>
        </Accordion.Item>
      ));

    return (
        <section id="news-section">
            <Text className='title' align="center">NEWS</Text>
            <div className='line-news-container'>
                <div className='line-news-list-container'>
                    <ScrollArea h={206} type="always" offsetScrollbars viewportRef={viewport}>
                        <div className='line-news'>
                            <Badge className='line-news-date' color='blue' size='xl'>2024.01.01</Badge>
                            <Paper className='line-news-content' shadow='sm' radius='sm' p='xl'> 
                            <b>🎉 CONGRATURATION!</b> Hongbin continuing hs study as a M. S. student. Congrats on his graduation!
                            </Paper>
                        </div>
                        <div className='line-news'>
                            <Badge className='line-news-date' color='blue' size='xl'>2023.12.01</Badge>
                            <Paper className='line-news-content' shadow='sm' radius='sm' p='xl'> 
                            <b>🤗 WELCOME!</b> Dat joined ICML lab as a M.S. student. Welcome!
                            </Paper>
                        </div>
                        <div className='line-news'>
                            <Badge className='line-news-date' color='blue' size='xl'>2023.11.01</Badge>
                            <Paper className='line-news-content' shadow='sm' radius='sm' p='xl'> 
                            <b>🤗 WELCOME!</b> Ilhae joined our lab as an undergraduate student. A big welcome!! 
                            </Paper>
                        </div>
                        <div className='line-news'>
                            <Badge className='line-news-date' color='blue' size='xl'>2023.10.01</Badge>
                            <Paper className='line-news-content' shadow='sm' radius='sm' p='xl'> 
                            <b>ℹ️ Example!</b> This is Line-news example
                            </Paper>
                        </div>
                        <div className='line-news'>
                            <Badge className='line-news-date' color='blue' size='xl'>2023.09.01</Badge>
                            <Paper className='line-news-content' shadow='sm' radius='sm' p='xl'> 
                            <b>ℹ️ Example!</b> This is Line-news example
                            </Paper>
                        </div>
                        <div className='line-news'>
                            <Badge className='line-news-date' color='blue' size='xl'>2023.08.01</Badge>
                            <Paper className='line-news-content' shadow='sm' radius='sm' p='xl'> 
                            <b>ℹ️ Example!</b> This is Line-news example
                            </Paper>
                        </div>
                        <div className='line-news'>
                            <Badge className='line-news-date' color='blue' size='xl'>2023.07.01</Badge>
                            <Paper className='line-news-content' shadow='sm' radius='sm' p='xl'> 
                            <b>ℹ️ Example!</b> This is Line-news example
                            </Paper>
                        </div>
                        <div className='line-news'>
                            <Badge className='line-news-date' color='blue' size='xl'>2023.06.01</Badge>
                            <Paper className='line-news-content' shadow='sm' radius='sm' p='xl'> 
                            <b>ℹ️ Example!</b> This is Line-news example
                            </Paper>
                        </div>
                        <div className='line-news'>
                            <Badge className='line-news-date' color='blue' size='xl'>2023.05.01</Badge>
                            <Paper className='line-news-content' shadow='sm' radius='sm' p='xl'> 
                            <b>ℹ️ Example!</b> This is Line-news example
                            </Paper>
                        </div>
                        <div className='line-news'>
                            <Badge className='line-news-date' color='blue' size='xl'>2023.04.01</Badge>
                            <Paper className='line-news-content' shadow='sm' radius='sm' p='xl'> 
                            <b>ℹ️ Example!</b> This is Line-news example
                            </Paper>
                        </div>
                        <div className='line-news'>
                            <Badge className='line-news-date' color='blue' size='xl'>2023.03.01</Badge>
                            <Paper className='line-news-content' shadow='sm' radius='sm' p='xl'> 
                            <b>ℹ️ Example!</b> This is Line-news example
                            </Paper>
                        </div>
                        <div className='line-news'>
                            <Badge className='line-news-date' color='blue' size='xl'>2023.02.01</Badge>
                            <Paper className='line-news-content' shadow='sm' radius='sm' p='xl'> 
                            <b>ℹ️ Example!</b> This is Line-news example
                            </Paper>
                        </div>
                        <div className='line-news'>
                            <Badge className='line-news-date' color='blue' size='xl'>2023.01.01</Badge>
                            <Paper className='line-news-content' shadow='sm' radius='sm' p='xl'> 
                            <b>ℹ️ Example!</b> This is Line-news example
                            </Paper>
                        </div>
                    </ScrollArea>
                </div>
                <div className='line-news-button-container'>
                    <Button className='line-news-button' onClick={scrollToTop} mb='5px'>
                        <IconArrowBarToUp size={24} strokeWidth={4}/>
                    </Button>
                    <Button className='line-news-button' onClick={scrollToBottom}>
                        <IconArrowBarToDown size={24} strokeWidth={4}/>
                    </Button>
                </div>
            </div>
            <Grid className='news-top' mb='0.5%'>
                <Grid.Col xs={12} sm={8} md={8} lg={8}>
                    <div className='featured-container'>
                        <Card className='featured-news-card' shadow="sm" p="lg" style={{ height: '100%'}}>
                            <Card.Section className='news-card-image'>
                                <AspectRatio ratio={16/3} >
                                    <img src='news_featured.jpg'/>
                                </AspectRatio>
                            </Card.Section>
                                <div className='news-card-contents'>
                                    <Text className='featured-title'> We Are Looking For Talented Students!</Text>
                                    <Text className='content'>
                                        ICML 연구실에서 함께 해요. ICML 연구실에서 함께 해요. ICML 연구실에서 함께 해요. 
                                        ICML 연구실에서 함께 해요. ICML 연구실에서 함께 해요. ICML 연구실에서 함께 해요. 
                                        ICML 연구실에서 함께 해요. ICML 연구실에서 함께 해요. ICML 연구실에서 함께 해요. 
                                        ICML 연구실에서 함께 해요. ICML 연구실에서 함께 해요. ICML 연구실에서 함께 해요. 
                                        ICML 연구실에서 함께 해요. ICML 연구실에서 함께 해요. ICML 연구실에서 함께 해요. 
                                        ICML 연구실에서 함께 해요. ICML 연구실에서 함께 해요. ICML 연구실에서 함께 해요. 
                                    </Text>
                                    <Accordion className='accordion'>
                                        {items}
                                    </Accordion>
                                    <Text className='content'>
                                        ICML 연구실에서 함께 해요. ICML 연구실에서 함께 해요. ICML 연구실에서 함께 해요. 
                                        ICML 연구실에서 함께 해요. ICML 연구실에서 함께 해요. ICML 연구실에서 함께 해요. 
                                        ICML 연구실에서 함께 해요. ICML 연구실에서 함께 해요. ICML 연구실에서 함께 해요. 
                                        ICML 연구실에서 함께 해요. ICML 연구실에서 함께 해요. ICML 연구실에서 함께 해요. 
                                        ICML 연구실에서 함께 해요. ICML 연구실에서 함께 해요. ICML 연구실에서 함께 해요. 
                                        ICML 연구실에서 함께 해요. ICML 연구실에서 함께 해요. ICML 연구실에서 함께 해요. 
                                    </Text>
                                </div>
                            </Card>
                        </div>
                </Grid.Col>

                <Grid.Col xs={12} sm={4} md={4} lg={4} style={{display:'flex'}}>
                            
                        <Carousel
                            className='carousel'
                            plugins={[autoplay.current]}
                            onMouseEnter={autoplay.current.stop}
                            onMouseLeave={autoplay.current.reset}
                            withIndicators
                            controlSize={40}
                            loop
                            height="100%"
                            align="center"
                            includeGapInSize={false}
                            style={{flex:1}}
                            slideGap='sm'
                            controlsOffset="xl">
                       
                       <Carousel.Slide>
                            <div className='slide-container'>
                                <Card className='main-news-card' shadow="sm" p="lg" style={{ height: '100%'}}>
                                    <Card.Section className='news-card-image'>
                                        <AspectRatio ratio={4/3} >
                                            <img src='news_main1.jpg'/>
                                        </AspectRatio>
                                    </Card.Section>

                                    <div className='news-card-contents'>
                                        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                            
                                            <text className='title'>강재민 학생, 2023 학생주도 연구프로젝트 성과발표회 최우수상</text>                                    
                                        </Group>

                                        <text className="excerpt">
                                        지난 2023년 12월 8일 AI대학원은 학생주도 연구프로젝트 성과발표회를 대학본부 3층 대회의실에서 개최했다. 35개의 연구프로젝트 중 내부 심사를 거쳐 우수 프로젝트로 선정된 AI대학원생 5명 강재민·김기범·이시열·김장현·정선근(22학번)이 구두 발표를 진행했다. 강재민 학생이 최우수상을, 김기범 학생이 우수상을, 이시열·김장현·정선근 학생이 장려상을 각각 수상했다. 학생주도 연구프로젝트는 AI대학원 비교과 프로그램 중 하나로, 학생 스스로 산업 현장의...
                                        </text>
                                    </div>
                                </Card> 
                            </div>
                        </Carousel.Slide>

                        <Carousel.Slide>
                            <div className='slide-container'>
                                <Card className='main-news-card' shadow="sm" p="lg" style={{ height: '100%'}}>
                                    <Card.Section className='news-card-image'>
                                        <AspectRatio ratio={4/3} >
                                            <img src='news_main2.jpg'/>
                                        </AspectRatio>
                                    </Card.Section>

                                    <div className='news-card-contents'>
                                        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                            
                                            <text className='title'>영상계산 및 머신러닝(ICML) 연구실 - 2022 대한의료인공지능학회 추계 학술대회 최우수상</text>                                    
                                        </Group>

                                        <text className="excerpt">
                                        22년 10월 13-14일 대한의료인공지능학회에서는 'KoSAIM 2022'를 코엑스 인터컨티넨탈 호텔에서 개최하였다. 본 행사에서는 의료 분야와 접목된 인공지능 사례 발표와 함께 AI 기반 솔루션 및 의료 인공지능이 나아갈 방향 등에 대한 관련 병원, 대학, 연구소, 기업, 정부에서 참가하였다. 이틀에 걸친 학회는 구연발표, 포스터발표 및 포스터 전시 세션이 사전에 제출한 연구 내용을 바탕으로 총 45개의 연구가 채택 되었으며, 포스터 발표 세션에서 영상계산 및 머신러닝 연구실 최원준(21학번, 지도교수 감진규 교수) 석사과정 학생이 최우수상(1등) ...더보기
                                        </text>

                                    </div>
                                </Card> 
                            </div>
                        </Carousel.Slide>
                        


                    </Carousel>
                </Grid.Col>
            </Grid>


        </section>
    );

};

export default NewsSection;