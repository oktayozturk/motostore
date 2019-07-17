import React, { Component } from 'react'

export class PaginationButtons extends Component {

    get_page_numbers = () => {
        if (this.props.pageCount < 4){
            return [...Array(this.props.pageCount+1).keys()].slice(1)
        }
        else if (this.props.pageCount < 5){
            return [1, 2, 3, 4, 5]
        }
        else if (this.props.currentPage > this.props.pageCount - 4) {
            return [...Array(5).keys()].reverse().map((v) => 
                this.props.pageCount - v)
        }
        else {
            return [this.props.currentPage - 1, this.props.currentPage, this.props.currentPage + 1]
        }
        
    }

    render() {
        const current_page = this.props.currentPage
        const page_count = this.props.pageCount
        const navigate = this.props.navigate

        return <React.Fragment>
            <button onClick={() => navigate(current_page - 1)} disabled={current_page === 1}
                className="btn btn-secondary mx-1">
                Previous
            </button>
            
            {
                current_page > 4 && 
                <React.Fragment>
                    <button className="btn btn-secondary mx-1"
                        onClick={() => navigate(1)}>1
                        <span className="h2">...</span>
                    </button>
                </React.Fragment>
            }
            {
                this.get_page_numbers().map((page_num) => 
                    
                    <button className={"btn mx-1" + (page_num === current_page) ? 'btn-primary' : 'btn-secondary'}
                            onClick={() => navigate(page_num)} key={page_num}>
                        {page_num}        
                    </button>
                )
            }
            {
                current_page <= (page_count - 4) &&
                <React.Fragment>
                    <span className="h2">...</span>
                    <button className="btn btn-secondary mx-1"
                        onClick={() => navigate(page_count)}>
                        { page_count}
                    </button>
                </React.Fragment> 
            }
            <button onClick={() => navigate(current_page+1)} disabled={current_page === page_count}
                className="btn btn-secondary mx-1">
                    Next
                </button>
            
        </React.Fragment>
    }
} 