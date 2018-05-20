import React, {Component} from 'react'
import styled from 'styled-components';
import { withRouter } from 'react-router'

const StyledButton = styled.button`
    padding: 5px;
    border-radius: 5px;
`

const Wrapper = styled.div`
    display: block;
    padding: 10px;
`

const StyledForm = styled.form`
    grid-template-columns: 5fr 2fr;
    width: 100%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
    background: #fff;
    margin: 0 auto;
    margin-bottom: 16px;
    box-sizing: border-box;
    border-radius: 2px;
    cursor: pointer;
    transition: all .2s ease-in-out;
    max-width: 600px;
    padding: 10px 20px;
`

class SearchView extends Component {
    state = {
        from: 'WAW',
        to: 'JFK',
        departDate: '2018-05-21',
        returnDate: '2018-05-28',
        airports: []
    }

    // isLower = (value) => {
    //     return value < ;
    //   }


    async componentDidMount() {
        const result = await fetch('https://warsawjs-flights-api.herokuapp.com/airports')

        const airports = await result.json()

        this.setState({airports})
        console.log(airports)
    }

    // onFormChange = (propertyToUpdateName, e) => {
    //     this.setState({
    //         [propertyToUpdateName]: e.target.value
    //     })
    // }

    onFormChange = propertyToUpdateName => e => {
        this.setState({
            [propertyToUpdateName]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        // this.props.onSearch(this.state)
        this.props.history.push({
            pathname: '/flights',
            state: {
                searchData: this.state
            }
        })

    }

    render() {
        const {from, to, departDate, returnDate, airports} = this.state

        return (
            <StyledForm onSubmit={this.onSubmit}>
            <Wrapper>
                <label>Maximum price</label>
                <input type="text" />
            </Wrapper>
            <Wrapper>
                <label>From</label>
                {/* <select value={this.state.from} onChange={e => this.onFormChange('from', e)}> */}
                <select value={from} onChange={this.onFormChange('from')}>
                    {airports.map((airport) => (
                        <option key={airport.id}>{airport.code}</option>
                    ))}
                </select>
            </Wrapper>
            <Wrapper>
                <label>To</label>
                <select value={to} onChange={this.onFormChange('to')}>
                    {airports.map((airport) => (
                        <option key={airport.id}>{airport.code}</option>
                    ))}
                </select>
            </Wrapper>
            <Wrapper>
                <label>Depart Date</label>
                <input type="date" value={departDate} onChange={this.onFormChange('departDate')} />
            </Wrapper>
            <Wrapper>
                <label>Return Date</label>
                <input type="date" value={returnDate} onChange={this.onFormChange('returnDate')} />
            </Wrapper>
            <Wrapper>
                <StyledButton type="submit">Search</StyledButton>
            </Wrapper>
            </StyledForm>
        )
    }
}

export default withRouter(SearchView)

