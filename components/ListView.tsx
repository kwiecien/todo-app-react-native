import TodoModel from '../models/TodoModel';
import React from 'react';
import { FlatList } from 'react-native';
import ListViewItem from './ListViewItem';
import * as Utils from '../utils/Utils';
import { SearchBar } from 'react-native-elements';

const dataList = [
    new TodoModel('Hello World'),
    new TodoModel('Make a Todo App with React Native'),
    new TodoModel('Check to complete a todo'),
    new TodoModel('Long press, drag and drop a todo to sort'),
    new TodoModel('Save data with Realm'),
    new TodoModel('Sync data with Firebase')
];

const dataListOrder = getOrder(dataList);

function getOrder(list: TodoModel[]) {
    return Object.keys(list);
}

function moveOrderItem(listView: ListView, fromIndex: number, toIndex: number) {
    Utils.move(dataListOrder, fromIndex, toIndex);
    if (listView.forceUpdate) {
        listView.forceUpdate();
    }
}

interface Props {
}

interface State {
    dataList: TodoModel[]
}

export default class ListView extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);
        this.state = {
            dataList: dataList
        }
    }


    public render(): React.ReactNode {
        return (
            <FlatList // TODO Sortable List View
                data={dataList}
                renderItem={({ item }) =>
                    <ListViewItem data={item} dataIndex={dataListOrder.indexOf(item.task)} onCompletedChange={this.onCompletedChange} />}
                keyExtractor={this.keyExtractor}
            />
        );
    }

    private keyExtractor = (item: TodoModel, index: number): string => index.toString();

    private onCompletedChange(item: TodoModel, index: number) {
        const fromIndex = dataListOrder.indexOf(index.toString());
        const toIndex = item.status ? dataListOrder.length - 1 : 0;
        moveOrderItem(this, fromIndex, toIndex)
    }
}