import * as React from 'react';
import '../assets/stylesheets/components/hello-component.css'

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

const getExclamationMarks = (numChars: number) => {
  return Array(numChars + 1).join('!');
}

class HelloComponent extends React.Component<Props, object> {
  public render() {
    const { name, enthusiasmLevel = 1 } = this.props

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>
    );
  }
}

export default HelloComponent
