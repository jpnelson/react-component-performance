import * as React from "react";
import { ComponentTiming } from "../../component-timing";
import { Block } from "./block";

interface OwnState {
  loaded: boolean;
}

interface OwnProps {
  delay: number;
  color: string;
  id: string;
}

export class DelayedBlock extends React.Component<OwnProps, OwnState> {
  constructor(props: OwnProps) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  private isLoaded = (childLoadingStates: { [key: string]: boolean }) => {
    return this.state.loaded;
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true
      });
    }, this.props.delay);
  }

  render() {
    return (
      <ComponentTiming id={this.props.id} isLoaded={this.isLoaded}>
        <Block color={this.state.loaded ? this.props.color : "transparent"}>
          {this.props.children}
        </Block>
      </ComponentTiming>
    );
  }
}
