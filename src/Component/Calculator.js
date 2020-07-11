import React from 'react';
import { Pane, Heading, Card, TextInputField } from 'evergreen-ui';
import { useDispatch } from 'react-redux';
import { setMenu } from '../Reducers/Action';

// Halaman menu kalkulator 

class Converter extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.valueChange(e.target.value)
    }

    render() {
        const value = this.props.value;
        const satuan = this.props.satuan;

        return (
            <TextInputField 
                label={`Jumlah ${satuan}`}
                value={value} 
                onChange={this.handleChange} />
        );
    }
}

class DisplayTime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: '',
            satuan: ''
        }
        this.menitChange = this.menitChange.bind(this)
        this.detikChange = this.detikChange.bind(this)
    }

    toDetik(time) {
        return time * 60;
    }
    toMenit(time) {
        return time / 60;
    }

    menitChange(time) {
        this.setState({ satuan: 'menit', time })
    }

    detikChange(time) {
        this.setState({ satuan: 'detik', time })
    }

    render() {
        const time = this.state.time;
        const satuan = this.state.satuan;
        const detik = satuan === 'menit' ? this.toDetik(time) : time;
        const menit = satuan === 'detik' ? this.toMenit(time) : time;
        return (
            <Pane>
                <Heading size={600} marginTop="default" marginBottom={20}>Time Converter</Heading>
                <Converter satuan="detik" value={detik} valueChange={this.detikChange} />
                <Converter satuan="menit" value={menit} valueChange={this.menitChange} />
            </Pane>
        )
    }
}

class DisplayWeight extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            berat: '',
            satuan: ''
        }
        this.gramChange = this.gramChange.bind(this)
        this.kiloGramChange = this.kiloGramChange.bind(this)
    }

    toGram(berat) {
        return berat * 1000;
    }
    toKiloGram(berat) {
        return berat / 1000;
    }

    gramChange(berat) {
        this.setState({ satuan: 'gram', berat })
    }

    kiloGramChange(berat) {
        this.setState({ satuan: 'kilogram', berat })
    }

    render() {
        const berat = this.state.berat;
        const satuan = this.state.satuan;
        const gram = satuan === 'kilogram' ? this.toGram(berat) : berat;
        const kiloGram = satuan === 'gram' ? this.toKiloGram(berat) : berat;
        return (
            <Pane>
                <Heading size={600} marginTop="default" marginBottom={20}>Weight Converter</Heading>
                <Converter satuan="gram" value={gram} valueChange={this.gramChange} />
                <Converter satuan="kilogram" value={kiloGram} valueChange={this.kiloGramChange} />
            </Pane>
        )
    }
}


export default ({ title }) => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(setMenu(title))
    })

    return (
        <Pane display='flex' justifyContent='center' >
            <Card display='flex' elevation={3} padding={20} margin={10} height={300} background='blueTint'>
                <DisplayWeight />
            </Card>
            <Card display='flex' elevation={3} padding={20} margin={10} height={300} background='blueTint'>
                <DisplayTime />
            </Card>
        </Pane>
    )
}
