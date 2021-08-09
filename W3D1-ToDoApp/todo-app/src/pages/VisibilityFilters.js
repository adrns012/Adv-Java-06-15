import React from 'react'
import cx from "classnames/bind";
import {VISIBILITY_FILTERS} from "../filters"
import {connect} from "react-redux"
import {setFilter} from "../redux/actions/actions"
const VisibilityFilters = ({activeFilter, setFilter}) => {
    return (
        <div>
            {Object.keys(VISIBILITY_FILTERS).map(filter =>{
                const currFilter = VISIBILITY_FILTERS[filter]
                return (
            <span 
                key={`visibility-filter-${currFilter}`}
                 className={cx(
                    "filter",
                     currFilter === activeFilter && "active--filter"
                    )}
                    onClick={()=> setFilter(currFilter)}
                    >
                  {currFilter}
                 </span>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {activeFilter: state.visibilityFilter}
}

export default connect(mapStateToProps, {setFilter})(VisibilityFilters)