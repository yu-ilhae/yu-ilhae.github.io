import { useState, useRef } from 'react';
import { ScrollArea, Card, TextInput, Badge } from '@mantine/core';



const fublications = [
    {
        'type':'journal',
        'title':'G-RMOS: GPU-accelerated Riemannian Metric Optimization on Surfaces', 
        'authors':'Jeong Won Jo, Jin Kyu Gahm',
        'link':'https://linkinghub.elsevier.com/retrieve/pii/S0010482522008757',
        'pdf':'https://www.sciencedirect.com/science/article/pii/S0010482522008757/pdfft?isDTMRedir=true&amp;download=true',
        'academy':'Computers in Biology and Medicine',
        'volume_issue_page':'Vol. 150, pp. 106167',
        'date':'2022',
    },    
    {
        'type':'journal',
        'title':'Automated Differentiation of Atypical Parkinsonian Syndromes Using Brain Iron Patterns in Susceptibility Weighted Imaging', 
        'authors':'Yun Soo Kim, Jae-Hyeok Lee, Jin Kyu Gahm',
        'link':'https://doi.org/10.3390/diagnostics12030637',
        'pdf':'https://www.mdpi.com/2075-4418/12/3/637/pdf?version=1646978215',
        'academy':'Diagnostics',
        'volume_issue_page':'Vol. 12(3), pp. 637',
        'date':'2022',
    }, 
    {
        'type':'journal',
        'title':'Super-Resolution of 3D Brain MRI with Filter Learning Using Tensor Feature Clustering', 
        'authors':'Seongsu Park, and Jin Kyu Gahm',
        'link':'https://doi.org/10.3390/diagnostics12030637',
        'pdf':'https://www.mdpi.com/2075-4418/12/3/637/pdf?version=1646978215',
        'academy':'IEEE Access',
        'volume_issue_page':'Vol. 10',
        'date':'2022',
    }, 

    {
        'type':'journal',
        'title':'아리랑 5호 위성 영상에서 수계의 의미론적 분할을 위한 딥러닝 모델의 비교 연구', 
        'authors':'김민지, 김승규, 이도훈, 감진규',
        'link':'https://doi.org/10.3390/diagnostics12030637',
        'pdf':'https://www.mdpi.com/2075-4418/12/3/637/pdf?version=1646978215',
        'academy':'멀티미디어학회논문집',
        'volume_issue_page':'Vol. 25, No. 2, pp. 206-214',
        'date':'2022',
    }, 
    {
        'type':'journal',
        'title':'홈 트레이닝을 위한 운동 동작 분류 및 교정 시스템', 
        'authors':'강재민, 박성수, 김윤수, 감진규',
        'link':'https://doi.org/10.3390/diagnostics12030637',
        'pdf':'https://www.mdpi.com/2075-4418/12/3/637/pdf?version=1646978215',
        'academy':'한국정보통신학회지',
        'volume_issue_page':'Vol. 25, No. 9. pp. 1183-1189',
        'date':'2021. 9',
    }, 
    {
        'type':'journal',
        'title':'3D 오토인코더 기반의 뇌 자기공명영상에서 다발성 경화증 병변 검출', 
        'authors':'최원준, 박성수, 김윤수, 감진규',
        'link':'https://doi.org/10.3390/diagnostics12030637',
        'pdf':'https://www.mdpi.com/2075-4418/12/3/637/pdf?version=1646978215',
        'academy':'멀티미디어학회논문집',
        'volume_issue_page':'Vol. 24, No. 8. pp. 979-987',
        'date':'2021. 8',
    }, 



    {
        'type':'conference',
        'title':'Multimodal Cortical-based Analysis with Vision Transformer for Alzheimer’s Disease Diagnosis', 
        'authors':'Quan Duong, Seung Kyu Kim, Jin Kyu Gahm',
        'academy':'The Organization for Human Brain Mapping (OHBM)',
        'date':'2023',
    }, 
    {
        'type':'conference',
        'title':'Multimodal Deep Learning Model for Early Diagnosis of Alzheimer’s Disease using ROI', 
        'authors':'Seung Kyu Kim, Quan Duong, Jin Kyu Gahm',
        'academy':'The Organization for Human Brain Mapping (OHBM)',
        'date':'2023',
    }, 
    {
        'type':'conference',
        'title':'Few-Shot Learning Approach of Atypical Parkinsonian Syndromes Using Brain Iron Patterns in SWI', 
        'authors':'Won June Choi, Quan Duong, Jae-Hyeok Lee, Jin Kyu Gahm',
        'academy':'The Organization for Human Brain Mapping (OHBM)',
        'date':'2023',
    },
    {
        'type':'journal',
        'title':'G-RMOS: GPU-accelerated Riemannian Metric Optimization on Surfaces', 
        'authors':'Jeong Won Jo, Jin Kyu Gahm',
        'link':'https://linkinghub.elsevier.com/retrieve/pii/S0010482522008757',
        'pdf':'https://www.sciencedirect.com/science/article/pii/S0010482522008757/pdfft?isDTMRedir=true&amp;download=true',
        'academy':'Computers in Biology and Medicine',
        'volume_issue_page':'Vol. 150, pp. 106167',
        'date':'2022',
    },    
    {
        'type':'journal',
        'title':'Automated Differentiation of Atypical Parkinsonian Syndromes Using Brain Iron Patterns in Susceptibility Weighted Imaging', 
        'authors':'Yun Soo Kim, Jae-Hyeok Lee, Jin Kyu Gahm',
        'link':'https://doi.org/10.3390/diagnostics12030637',
        'pdf':'https://www.mdpi.com/2075-4418/12/3/637/pdf?version=1646978215',
        'academy':'Diagnostics',
        'volume_issue_page':'Vol. 12(3), pp. 637',
        'date':'2022',
    }, 
    {
        'type':'journal',
        'title':'Super-Resolution of 3D Brain MRI with Filter Learning Using Tensor Feature Clustering', 
        'authors':'Seongsu Park, and Jin Kyu Gahm',
        'link':'https://doi.org/10.3390/diagnostics12030637',
        'pdf':'https://www.mdpi.com/2075-4418/12/3/637/pdf?version=1646978215',
        'academy':'IEEE Access',
        'volume_issue_page':'Vol. 10',
        'date':'2022',
    }, 

    {
        'type':'journal',
        'title':'아리랑 5호 위성 영상에서 수계의 의미론적 분할을 위한 딥러닝 모델의 비교 연구', 
        'authors':'김민지, 김승규, 이도훈, 감진규',
        'link':'https://doi.org/10.3390/diagnostics12030637',
        'pdf':'https://www.mdpi.com/2075-4418/12/3/637/pdf?version=1646978215',
        'academy':'멀티미디어학회논문집',
        'volume_issue_page':'Vol. 25, No. 2, pp. 206-214',
        'date':'2022',
    }, 
    {
        'type':'journal',
        'title':'홈 트레이닝을 위한 운동 동작 분류 및 교정 시스템', 
        'authors':'강재민, 박성수, 김윤수, 감진규',
        'link':'https://doi.org/10.3390/diagnostics12030637',
        'pdf':'https://www.mdpi.com/2075-4418/12/3/637/pdf?version=1646978215',
        'academy':'한국정보통신학회지',
        'volume_issue_page':'Vol. 25, No. 9. pp. 1183-1189',
        'date':'2021. 9',
    }, 
    {
        'type':'journal',
        'title':'3D 오토인코더 기반의 뇌 자기공명영상에서 다발성 경화증 병변 검출', 
        'authors':'최원준, 박성수, 김윤수, 감진규',
        'link':'https://doi.org/10.3390/diagnostics12030637',
        'pdf':'https://www.mdpi.com/2075-4418/12/3/637/pdf?version=1646978215',
        'academy':'멀티미디어학회논문집',
        'volume_issue_page':'Vol. 24, No. 8. pp. 979-987',
        'date':'2021. 8',
    }, 



    {
        'type':'conference',
        'title':'Multimodal Cortical-based Analysis with Vision Transformer for Alzheimer’s Disease Diagnosis', 
        'authors':'Quan Duong, Seung Kyu Kim, Jin Kyu Gahm',
        'academy':'The Organization for Human Brain Mapping (OHBM)',
        'date':'2023',
    }, 
    {
        'type':'conference',
        'title':'Multimodal Deep Learning Model for Early Diagnosis of Alzheimer’s Disease using ROI', 
        'authors':'Seung Kyu Kim, Quan Duong, Jin Kyu Gahm',
        'academy':'The Organization for Human Brain Mapping (OHBM)',
        'date':'2023',
    }, 
    {
        'type':'conference',
        'title':'Few-Shot Learning Approach of Atypical Parkinsonian Syndromes Using Brain Iron Patterns in SWI', 
        'authors':'Won June Choi, Quan Duong, Jae-Hyeok Lee, Jin Kyu Gahm',
        'academy':'The Organization for Human Brain Mapping (OHBM)',
        'date':'2023',
    },
    {
        'type':'journal',
        'title':'G-RMOS: GPU-accelerated Riemannian Metric Optimization on Surfaces', 
        'authors':'Jeong Won Jo, Jin Kyu Gahm',
        'link':'https://linkinghub.elsevier.com/retrieve/pii/S0010482522008757',
        'pdf':'https://www.sciencedirect.com/science/article/pii/S0010482522008757/pdfft?isDTMRedir=true&amp;download=true',
        'academy':'Computers in Biology and Medicine',
        'volume_issue_page':'Vol. 150, pp. 106167',
        'date':'2022',
    },    
    {
        'type':'journal',
        'title':'Automated Differentiation of Atypical Parkinsonian Syndromes Using Brain Iron Patterns in Susceptibility Weighted Imaging', 
        'authors':'Yun Soo Kim, Jae-Hyeok Lee, Jin Kyu Gahm',
        'link':'https://doi.org/10.3390/diagnostics12030637',
        'pdf':'https://www.mdpi.com/2075-4418/12/3/637/pdf?version=1646978215',
        'academy':'Diagnostics',
        'volume_issue_page':'Vol. 12(3), pp. 637',
        'date':'2022',
    }, 
    {
        'type':'journal',
        'title':'Super-Resolution of 3D Brain MRI with Filter Learning Using Tensor Feature Clustering', 
        'authors':'Seongsu Park, and Jin Kyu Gahm',
        'link':'https://doi.org/10.3390/diagnostics12030637',
        'pdf':'https://www.mdpi.com/2075-4418/12/3/637/pdf?version=1646978215',
        'academy':'IEEE Access',
        'volume_issue_page':'Vol. 10',
        'date':'2022',
    }, 

    {
        'type':'journal',
        'title':'아리랑 5호 위성 영상에서 수계의 의미론적 분할을 위한 딥러닝 모델의 비교 연구', 
        'authors':'김민지, 김승규, 이도훈, 감진규',
        'link':'https://doi.org/10.3390/diagnostics12030637',
        'pdf':'https://www.mdpi.com/2075-4418/12/3/637/pdf?version=1646978215',
        'academy':'멀티미디어학회논문집',
        'volume_issue_page':'Vol. 25, No. 2, pp. 206-214',
        'date':'2022',
    }, 
    {
        'type':'journal',
        'title':'홈 트레이닝을 위한 운동 동작 분류 및 교정 시스템', 
        'authors':'강재민, 박성수, 김윤수, 감진규',
        'link':'https://doi.org/10.3390/diagnostics12030637',
        'pdf':'https://www.mdpi.com/2075-4418/12/3/637/pdf?version=1646978215',
        'academy':'한국정보통신학회지',
        'volume_issue_page':'Vol. 25, No. 9. pp. 1183-1189',
        'date':'2021. 9',
    }, 
    {
        'type':'journal',
        'title':'3D 오토인코더 기반의 뇌 자기공명영상에서 다발성 경화증 병변 검출', 
        'authors':'최원준, 박성수, 김윤수, 감진규',
        'link':'https://doi.org/10.3390/diagnostics12030637',
        'pdf':'https://www.mdpi.com/2075-4418/12/3/637/pdf?version=1646978215',
        'academy':'멀티미디어학회논문집',
        'volume_issue_page':'Vol. 24, No. 8. pp. 979-987',
        'date':'2021. 8',
    }, 



    {
        'type':'conference',
        'title':'Multimodal Cortical-based Analysis with Vision Transformer for Alzheimer’s Disease Diagnosis', 
        'authors':'Quan Duong, Seung Kyu Kim, Jin Kyu Gahm',
        'academy':'The Organization for Human Brain Mapping (OHBM)',
        'date':'2023',
    }, 
    {
        'type':'conference',
        'title':'Multimodal Deep Learning Model for Early Diagnosis of Alzheimer’s Disease using ROI', 
        'authors':'Seung Kyu Kim, Quan Duong, Jin Kyu Gahm',
        'academy':'The Organization for Human Brain Mapping (OHBM)',
        'date':'2023',
    }, 
    {
        'type':'conference',
        'title':'Few-Shot Learning Approach of Atypical Parkinsonian Syndromes Using Brain Iron Patterns in SWI', 
        'authors':'Won June Choi, Quan Duong, Jae-Hyeok Lee, Jin Kyu Gahm',
        'academy':'The Organization for Human Brain Mapping (OHBM)',
        'date':'2023',
    },


    ];

const PublicationSection = () => {

    const viewportRef = useRef<HTMLDivElement>(null);
    const [query, setQuery] = useState('');
    const filtered = fublications.filter((item) => item['title'].toLowerCase().includes(query.toLowerCase()));
    const items = filtered.map((item, index) => {
        if (item['type'] == 'journal'){
            return (
                <Card className='card' shadow='sm' radius='md' withBorder mb='5px'>
                    <div>
                    <Badge size='xl' color='blue'> {item['type']} </Badge>
                        <text className='title'> {item['title']} </text>
                        <a href={item['link']} target='_blank'>[Link]</a> <a href={item['pdf']} target='_blank'>[preprint]</a> 
                    </div>
                        <text> {item['authors']}. <i>{item['academy']}</i>, {item['volume_issue_page']}, {item['date']}</text>
                </Card>
            );
        } else if (item['type'] == 'conference'){
            return (
                <Card className='card' shadow='sm' radius='md' withBorder mb='5px'>
                    <div>
                    <Badge size='xl' color='green'> {item['type']} </Badge>
                        <text className='title'> {item['title']} </text>
                    </div>
                    <text> {item['authors']}. <i>{item['academy']}</i>, {item['date']}</text>
                </Card>
            );
        } else {
            return
        }
        
        
});

    return (
        <section id="publication-section">
            <TextInput
                size='xl'
                value={query}
                onChange={(event) => {
                    setQuery(event.currentTarget.value);
                }}
                placeholder="Search for Publications with title!"
            />

            <ScrollArea className='scroll-area' type="always" mt="md" viewportRef={viewportRef}>
                {items}
            </ScrollArea>
        </section>
    );
};

export default PublicationSection;