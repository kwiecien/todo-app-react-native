import React from "react";
import { SearchBar } from 'react-native-elements';
import TodoModel from '../models/TodoModel';
import * as Utils from '../utils/Utils';

interface Props {
    data: TodoModel[];
    updateDataList: (list: TodoModel[]) => void;
}

interface State {
    newValue: string;
}

export default class OmniBox extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);
        this.state = {
            newValue: ''
        };
    }

    public componentWillMount(): void {
        console.log(this.props);
        this.setState({
            newValue: ''
        });
        console.log(this.state);
    }

    public render(): React.ReactNode {
        return (
            <SearchBar
                placeholder={"Add a Todo"}
                value={this.state.newValue}
                onChangeText={this.updateSearch}
                onEndEditing={this.onKeyPress}
            />
        );
    }

    private updateSearch = (search: string) => {
        console.log(search);
        // const dataList = this.props.data.filter((item) => item.task.match(new RegExp('.*' + search + '.*', 'gi')));
        this.setState({
            newValue: search
        });
        // this.props.updateDataList(dataList);
        this.props.updateDataList(this.props.data);
    };

    private onKeyPress = (event: any): void => {
        console.log(this.state.newValue);
        console.log(this.props.data);
        const dataList = this.props.data;
        if (this.state.newValue) {
            const newDataItem = new TodoModel(this.state.newValue);
            const dataItem = Utils.findTodo(newDataItem, dataList);
            if (dataItem) {
                Utils.move(dataList, (dataList.indexOf(dataItem)), 0);

                this.setState({
                    newValue: ''
                });
                this.props.updateDataList(dataList);
                return;
            }
            dataList.unshift(newDataItem);
        }

        this.setState({
            newValue: ''
        });
        this.props.updateDataList(dataList);
    }
}