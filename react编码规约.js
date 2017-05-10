React �����Լ

����

1.1

ÿ���ļ�ֻдһ����������Ƕ����״̬������Է��ڵ����ļ��С�

���

2.1

��ǿ�ơ����ڲ�״̬������������Ҫ���Ⱪ¶ref�������ʹ��ES6 Classд����

// bad
const Listing = React.createClass({
  // ...
  render() {
    return <div>{this.state.hello}</div>;
  }
});

// good
class Listing extends React.Component {
  // ...
  render() {
    return <div>{this.state.hello}</div>;
  }
}
2.2

û���ڲ�״̬������������������Ⱪ¶ref�������ʹ�ú���д����

// bad
class Listing extends React.Component {
  render() {
    return <div>{this.props.hello}</div>;
  }
}

// good
const Listing = ({ hello }) => (
  <div>{hello}</div>
);
PropTypes/DefaultProps

3.1

���ڲ�״̬������������Ҫ���Ⱪ¶ref�������ʹ��ES7�ྲ̬�����᰸д����

class Button extends Component {
  static propTypes = {
    size: React.PropTypes.oneOf(['large', 'normal', 'small']),
    shape: React.PropTypes.oneOf(['default', 'primary', 'ghost'])
    disabled: React.PropTypes.bool
  };

  static defaultProps = {
    size: 'normal',
    shape: 'default',
    disabled: false
  };

  render() {
    // ....
  }
}
3.2

û���ڲ�״̬����������������Ⱪ¶ref�������ʹ���ྲ̬����д����

const HelloMessage = ({ name }) => {
  return <div>Hello {name}</div>;
};

HelloMessage.propTypes = {
  name: React.PropTypes.string
};

HelloMessage.defaultProps = {
  name: 'vic'
};
3.3

PropTypes���롣

State

4.1

ʹ��ES7ʵ�������᰸����д�����߹��캯������д���������ʺ���Ҫ����һ���������ܳ�ʼ��state�������

class Some extends Component {
  state = {
    foo: 'bar'
  };

  // ....
}

class Some extends Component {
  constructor(props) {
    super(props);
      this.state = {
        foo: 'bar'
      };
  }

  // ....
}
4.2

�����顿�������this.state���и�ֵ��

// bad
this.state.name = this.props.name.toUpperCase();

// good
this.setState({
  name: this.props.name.toUpperCase();
});
DisplayName

�����顿Ϊ�˵��Է��㣬���������������дdisplayName��

// good
class Some extends Component {
  static displayName = 'Some';

  // ....
}
����

5.1

��ǿ�ơ���չ��: React����ļ�ʹ��.jsx��չ����

5.2

�ļ���: �ļ���ʹ���շ�ʽ����������ĸ��д����ReservationCard.jsx��

5.3

��������: React�����ʹ���շ�ʽ����������ĸ��д��ʵ����Ҳʹ���շ�ʽ������������ĸСд��

// bad
import reservationCard from './ReservationCard';

// good
import ReservationCard from './ReservationCard';

// bad
const ReservationItem = <ReservationCard />;

// good
const reservationItem = <ReservationCard />;
����

6.1

����JSX����ֵ����ʹ��˫����", ������ʹ�õ�����'��

// bad
<Foo bar='bar' />

// good
<Foo bar="bar" />

// bad
<Foo style={{ left: "20px" }} />

// good
<Foo style={{ left: '20px' }} />
�ո�

7.1

�����顿�������Ապϵı�ǩ/>ǰ��һ���ո�

// bad
<Foo/>

// very bad
<Foo                 />

// good
<Foo />
7.2

�����顿��Ҫ��JSX{}�������������߼ӿո�

// bad
<Foo bar={ baz } />

// good
<Foo bar={baz} />
7.3

�����顿��Ҫ��JSX props����=���߼ӿո�

// bad
<Hello name = {firstname} />;

// good
<Hello name={firstname} />;
����

8.1

��ǿ�ơ�JSX����������ʹ���շ�ʽ���

// bad
<Foo UserName="hello" phone_number={12345678} />

// good
<Foo userName="hello" phoneNumber={12345678} />
8.2

�����顿�������ֵΪtrue, ����ֱ��ʡ�ԡ�

// bad
<Foo hidden={true} />

// good
<Foo hidden />
8.3

��ǿ�ơ������л��߱����������ͬ��React���������key���衣

// bad
[<Hello />, <Hello />, <Hello />];

data.map(x => <Hello>x</Hello>);

// good
[<Hello key="first" />, <Hello key="second" />, <Hello key="third" />];

data.map((x, i) => <Hello key={i}>x</Hello>);
8.4

��ǿ�ơ�class�Լ�for�ȹؼ��ֲ�������Ϊ��������

// bad
<div class="hello">Hello World</div>;

// good
<div className="hello">Hello World</div>;
8.5

��ǿ�ơ��������������ظ�������

// bad
<Hello name="John" name="John" />;

// good
<Hello firstname="John" lastname="Doe" />;
Refs

9.1

��ǿ�ơ�������Refs��ʹ�ûص�������

// bad
<Foo
  ref="myRef"
/>

// good
<Foo
  ref={ref => { this.myRef = ref; }}
/>
����

10.1

�����顿�����е�JSX��ǩд��()����п���ʡ��()��

// bad
render() {
  return <MyComponent className="long body" foo="bar">
     <MyChild />
  </MyComponent>;
}

// good
render() {
  return (
    <MyComponent className="long body" foo="bar">
      <MyChild />
    </MyComponent>
  );
}

// good
render() {
  const body = <div>hello</div>;
  return <MyComponent>{body}</MyComponent>;
}
��ǩ

11.1

����û����Ԫ�صı�ǩ��˵���Ǳպϵġ�

// bad
<Foo className="stuff"></Foo>

// good
<Foo className="stuff" />
����

12.1

render����������ֵ���ء�

// bad
render() {
  (<div />);
}

// good
render() {
  return (<div />);
}
12.2

�����顿��������˳�������ڲ�������

1. static methods and properties
2. lifecycle methods: displayName, propTypes, contextTypes, childContextTypes, mixins, statics,defaultProps, constructor, getDefaultProps, getInitialState, state, getChildContext, componentWillMount, componentDidMount, componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, componentDidUpdate, componentWillUnmount (in this order).
3. custom methods
4. render method`
12.3

�����顿��Ҫ��componentDidMount�Լ�componentDidUpdate�е���setState���������ڰ󶨵Ļص�����������State��

// bad
class Hello extends Component {
  componentDidMount() {
    this.setState({
      name: this.props.name.toUpperCase()
    });
  }
  render() {
    return <div>Hello {this.state.name}</div>;
  }
}

// good
class Hello extends Component {
  componentDidMount() {
    this.onMount(newName => {
      this.setState({
        name: newName
      });
    });
  }
  render() {
    return <div>Hello {this.state.name}</div>;
  }
}
12.4

�����顿ʹ�ü�ͷ��������ȡ���ر�����

function ItemList(props) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <Item
          key={item.key}
          onClick={() => doSomethingWith(item.name, index)}
        />
      ))}
    </ul>
  );
}
12.5

�����顿����render()��ʹ���¼�������ʱ����ǰ�ڹ��캯�����this����ȥ��

���ͣ�Ϊʲô?��ÿ��render�����У� �ٵ���bind�����½�һ���µĺ������˷���Դ��
// bad
class extends React.Component {
  onClickDiv() {
    // do stuff
  }

  render() {
    return <div onClick={this.onClickDiv.bind(this)} />
  }
}

// good
class extends React.Component {
  constructor(props) {
    super(props);

    this.onClickDiv = this.onClickDiv.bind(this);
  }

  onClickDiv() {
    // do stuff
  }

  render() {
    return <div onClick={this.onClickDiv} />
  }
}
12.6

�����顿��Reactģ���У���Ҫ����ν��˽�к������_ǰ׺����������������˽�еġ�

���ͣ�_�»���ǰ׺��ĳЩ������ͨ����������ʾ˽�б������ߺ��������ǲ���������һЩ���ԣ���JS��û��ԭ��֧����ν��˽�б��������еı����������ǹ��еġ����������ͼ��ʹ��˽�л�����֮ǰ�����»��߲�����ʹ��Щ����˽�л����������е����ԣ��������»���ǰ׺��û��ǰ׺�ģ���Ӧ�ñ���Ϊ�ǹ��еġ��˽����������鿴Issue #1024����#490��
// bad
React.createClass({
  _onClickSubmit() {
    // do stuff
  },

  // other stuff
});

// good
class extends React.Component {
  onClickSubmit() {
    // do stuff
  }

  // other stuff
}