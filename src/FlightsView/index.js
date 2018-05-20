import React, {Component, Fragment} from 'react'
import Flight from '../Flight'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled.button`
    border-radius: 5px;
`

class FlightsView extends Component {
    state = {
        flights: []
    }

    async componentDidMount() {
        const {from, to, departDate, returnDate} = this.props.location.state.searchData

        console.log(this.props.location)

        const url = 'https://warsawjs-flights-api.herokuapp.com/flights'
        const result = await fetch(`${url}/${departDate}/${returnDate}/${from}/${to}`)

        const flights = await result.json()

        this.setState({flights})
        console.log(flights)
    }

    render() {
        return (
            <Fragment>
            <ul>
            {this.state.flights.map(flight => <Flight key={flight.id} flight={flight} />)}
            </ul>
            <Link to="/"><StyledButton>Back</StyledButton></Link>
            </Fragment>
        )   
    }
}

export default FlightsView