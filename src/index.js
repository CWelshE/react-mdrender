import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

// This is CSS Modules plus SCSS.
import styles from '../styles/md.scss';

// Renders markdown from passed props.
class Markdown extends React.Component {
  compileMarkdown(md) {
    return {__html: marked(md)};
  }
  render() {
    return (
      <div
        className={styles['md-render']}
        dangerouslySetInnerHTML={this.compileMarkdown(this.props.text)}>
      </div>
    );
  }
}

// Takes user input, and sends it over to a Markdown component.
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
      <div className={styles['md-container']}>
        <textarea
          className={styles['md-input']}
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
