import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';


class Markdown extends React.Component {
  compileMarkdown(md) {
    return {__html: marked(md)};
  }
  render() {
    return (
      <div
        className="md-render"
        dangerouslySetInnerHTML={this.compileMarkdown(this.props.text)}>
      </div>
    );
  }
}

class MarkdownInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.setState({value: ev.target.value});
  }

  render() {
    return (
      <div className="md-wrapper">
        <textarea
          className="md-input"
          onChange={this.handleChange}/>
        <Markdown text={this.state.value}/>
      </div>

    );
  }
}

ReactDOM.render(
  <MarkdownInput/>,
  document.getElementById('root')
);
