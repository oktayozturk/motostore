import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ToggleLink } from '../ToggleLink'

export class CategoryNavigation extends Component {

    render() {
        return <React.Fragment>
            <ToggleLink exact={false} to={this.props.baseUrl + '/all'}>All</ToggleLink>
            
            { this.props.categories && this.props.categories.map((category) => 
                    <ToggleLink to={this.props.baseUrl + '/' + category.toLowerCase()} 
                        key={category}>
                            { category }
                    </ToggleLink>
                )}
            <Link className="btn btn-block btn-secondary fixed-bottom m-2 col-3" to="/admin">
                Administration
            </Link>
        </React.Fragment>
    }
}
