import React from 'react';
import BlogList from './BlogList'
import {connect} from 'react-redux';
import {fetch} from '../../actions/blog'
//实际上这是一个容器组件（smart/container component）
class Blog extends React.Component{
    componentDidMount(){
        this.props.fetch()
    }
    render(){
        console.log(this.props);
        const isErr =Boolean(this.props.errMsg);
        return(
            this.props.isLoading?
                <div>loading...</div>
                :
                isErr? <h1>{this.props.errMsg}</h1>
                    :
                    <ul>
                        {this.props.lists.map(item=>
                            <BlogList key={item.id} {...item}/>)
                        }
                    </ul>
        )
    }
}
const mapStateToProps=state=>{
    return{
        lists:state.blog.lists,
        isLoading:state.blog.isLoading,
        errMsg:state.blog.errMsg
    }
}
export default connect(mapStateToProps,{fetch})(Blog);