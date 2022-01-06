import React, {Component} from "react";
import { hot } from "react-hot-loader";




        import {SortableContainer, SortableElement} from 'react-sortable-hoc';
        import {arrayMoveImmutable} from 'array-move';


    const SortableItem = SortableElement(({value}) => <li className="itp" pid={value.id}>{(value.type_name)? value.type_name : value.gia_sn }</li>);

    const SortableList = SortableContainer(({items}) => {
        return (
            <ul>

            {(items)? items.map((value, index) => (
                <SortableItem key={`item-${value}`} index={index} value={value} />
            )) : ''}
            </ul>
        );
    });









    class OrderPanel extends React.Component {
        constructor(props) {   
            super(props); 
            this.state = {
                items: []
            };

           // const pdata = this.props.pdata;             
        }




        onSortEnd = ({oldIndex, newIndex}) => {                                      
            const pdata = this.props.pdata;
            let obj1  = arrayMoveImmutable(pdata, oldIndex, newIndex);
            this.props.updateOrder(obj1);                            
        };


        
        render() {

            const pdata = this.props.pdata;
     


            return <><SortableList items={pdata} onSortEnd={this.onSortEnd} /></>;
        }
    }

export default hot(module)(OrderPanel);