

    ע�⣺

    ��ƪ�����ǽ���θ� DOM Ԫ�ذ� React δ�ṩ���¼� (check here for more info�� ����������������� jQuery һ��ʹ�õ�ʱ����Ҫ֪����Щ��

Try to resize the window:

var Box = React.createClass({
  getInitialState: function() {
    return {windowWidth: window.innerWidth};
  },

  handleResize: function(e) {
    this.setState({windowWidth: window.innerWidth});
  },

  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },

  render: function() {
    return <div>Current window width: {this.state.windowWidth}</div>;
  }
});

React.render(<Box />, mountNode);

componentDidMount ���� component ��Ⱦ������Ѿ����� DOM �ṹ��ʱ�򱻵��á�ͨ������£�������������ͨ�� DOM �¼���

ע�⣬�¼��Ļص��������� react ����ϣ�������ԭʼ��Ԫ���ϡ�React ͨ��һ�� autobinding �����Զ��������󶨵���ǰ�����ʵ���ϡ�