import React from "react";
import { SearchBar } from 'react-native-elements';
import { NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';
import TodoModel from '../models/TodoModel';

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
                placeholder={"Add a todo or Search"}
                value={this.state.newValue}
                onChangeText={this.updateSearch}
            />
        );
    }

    private updateSearch = (search: string) => {
        const dataList = this.props.data.filter((item) => item.task.match(new RegExp('.*' + search + '.*', 'gi')));
        this.setState({
            newValue: search
        });
        this.props.updateDataList(dataList);
    };

    private onKeyPress(event: NativeSyntheticEvent<TextInputKeyPressEventData>) {
        // TODO
    }
}