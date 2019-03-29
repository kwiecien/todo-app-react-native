import React from "react";
import TodoModel from '../models/TodoModel';
import { CheckBox, ListItem } from 'react-native-elements';

interface Props {
    data: TodoModel,
    dataIndex: number,
    onCompletedChange: (data: TodoModel, dataIndex: number) => void
}

interface State {
    data: TodoModel
}

export default class ListViewItem extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);
        this.state = {
            data: props.data
        }
    }

    public componentWillReceiveProps(nextProps: Readonly<Props>): void {
        this.setState({
            data: nextProps.data
        });
    }

    public render(): React.ReactNode {
        const todo = this.state.data;
        return (
            <ListItem
                title={todo.task}
                leftElement={<CheckBox checked={todo.status} onPress={this.onCheckBoxPress} />}
            />
        );
    }

    private onCheckBoxPress = (): void => {
        let data = this.state.data;
        data.status = !data.status;
        this.setState({
            data: data
        });
        this.props.onCompletedChange(data, this.props.dataIndex);
    }

};