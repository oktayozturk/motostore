import React, { Component} from 'react'
import { PaginationButtons } from './PaginationButtons'

export class PaginationControls extends Component{
    constructor(props){
        super(props)
        this.pageSizes = this.props.sizes || [5, 10, 25, 100]
        this.sortKeys = this.props.keys || ['Name', 'Price']
    }

    handle_page_size_change = (event) => {
        this.props.setPageSize(event.target.value)
    }

    handle_sort_key_change = (event) => {
        this.props.setSortProperty(event.target.value)
    }

    render = () => {
        return <div className="m-2">
            <div className="text-center m-1">
                <PaginationButtons currentPage={this.props.currentPage}
                        pageCount={this.props.pageCount} 
                        navigate={this.props.navigateToPage}>        
                </PaginationButtons>
            </div>
            <div className="form-inline justify-content-center">
                <select className="form-control" 
                    onChange={this.handle_page_size_change} 
                    value={this.props.pageSize || this.pageSizes[0]}>
                    
                    {this.pageSizes.map((size) => 
                        <option value={size} key={size}>{size} per page</option>
                    )}
                
                </select>

                <select className="form-control" 
                        onChange={this.handle_sort_key_change}
                        value={this.props.sortKey || this.sortKeys[0]}>

                    {this.sortKeys.map((sort_key) => 
                        <option value={sort_key.toLowerCase()} key={sort_key}>
                            Sort by: {sort_key}
                        </option>
                        )}

                </select>
            </div> 

        </div>
    }
}