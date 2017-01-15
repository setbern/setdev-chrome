import React from 'react';
import { Link } from 'react-router/lib';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';

import Base from './Base';
import { pushIssue } from '../actions/Issues';

class ContractItem extends Base {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 0
        }
    }
	componentDidMount() {
        setTimeout(() => {
            this.setState({
                opacity: 1
            });
        }, 1000);
    }
    catTiles() {
        return this.props.cat.map((item, index) => {
            console.log(item)
            return(
                <div key={index} className='catTile row'>
                    <p>{item}</p>
                </div>
            );
        });
    }
	render() {
        console.log('ContractItem')
        console.log(this.props)
        let style = {
            opacity: this.state.opacity
        };
        const imageStyle = {
            backgroundImage: `url('${this.props.pic}')`
        };        
        return (
            <Link 
                to={'/ContractSummary/'}
                style={style}
                className='ContractItem column'
            >
                <div className='top_sec row'>
                    <div 
                        className='avatar'
                        style={imageStyle}
                    />
                    <div className='links column'>
                        <h1>{this.props.title}</h1>
                        <a href={this.props.url}>{this.props.url}</a>
                    </div>
                    <div className='info column'>
                        <div className='row lit'>
                            <FontAwesome
                                name='calendar'
                                size={'lg'}
                                className='icon'
                            />
                            <p>{this.props.due}</p>
                        </div>
                        <div className='row lit'>
                            <FontAwesome
                                name='btc'
                                size={'lg'}
                                className='icon'
                            />
                            <p>{this.props.amount}</p>
                        </div>
                    </div>
                </div>
                <div className='bottom_sec row'>
                    <p>{this.props.shortSum}</p>
                    <div className='cats row'>
                        { 
                            this.catTiles()
                        }
                    </div>
                </div>   
            </Link>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        pushIssue: issue => dispatch(pushIssue(pushIssue))
    };
};

export default connect(null, mapDispatchToProps)(ContractItem);