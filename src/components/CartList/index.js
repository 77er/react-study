import React,{Component} from 'react';
import {increacement,decreacement,increacementAsync} from '../../actions/cartAction'
import {connect} from 'react-redux';
class CartList extends Component{
    render(){
        console.log(this.props);
        return(
            <>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                            <th>number</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.CartList.map(item=>{
                       return (
                           <tr key={item.id}>
                               <td>{item.id}</td>
                               <td>{item.name}</td>
                               <td>{item.price}</td>
                               <td>
                                   <button onClick={()=>this.props.decreacement(item.id)}>-</button>
                                   {item.num}
                                   <button onClick={()=>this.props.increacement(item.id)}>+</button>
                                   <button onClick={()=>this.props.increacementAsync(item.id)}>一会儿+</button>
                               </td>
                           </tr>
                       )
                    })}
                    </tbody>
                </table>
            </>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        CartList:state.Cart
    }
}
// const mapDispatchToProps=(dispatch)=>{
// //     return{
// //         decreace:(id)=>{dispatch(decreacement(id))},
// //         increace:(id)=>{dispatch(increacement(id))},
// //     }
// // }
export default connect(mapStateToProps,{increacement,decreacement,increacementAsync})(CartList);