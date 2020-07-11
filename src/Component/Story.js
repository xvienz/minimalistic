import React from 'react';
import { useDispatch } from 'react-redux';
import { setMenu } from '../Reducers/Action';
import { Pane, Card, Paragraph } from 'evergreen-ui';

// halaman menu story

export default ({ title }) => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(setMenu(title))
    })
    
    return (
        <Pane display='flex'>
            <Card display='flex' padding={10} height={300} width={500}>
                <img alt='' width='100%' src='/images/story.png' height='100%'/>
            </Card>
            <Pane padding={10} width={400}>
                <Paragraph size={100} marginTop={20}>
                    Kita tidak pernah tahu apa yang bakal terjadi dihidup ini
                    dan sebuah pemikiran tentang makna hidup selalu menjadi
                    menarik untuk dibahas dan diresapi dengan sepenuh hati. 
                </Paragraph>
                <Paragraph size={100} marginTop={40}>
                    Percayalah hidup ini selalu punya cara tersendiri untuk 
                    membuatnya menjadi lebih indah...
                </Paragraph>
                <Paragraph size={100} marginTop={50}>
                    <i>Kevin</i>
                </Paragraph>
            </Pane>
        </Pane>
    )
}