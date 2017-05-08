JavaScript ����

��������

const �� let

��Ҫ�� var�������� const �� let���ֱ��ʾ�����ͱ�������ͬ�� var �ĺ���������const �� let ���ǿ鼶������

const DELAY = 1000;

let count = 0;
count = count + 1;
ģ���ַ���

ģ���ַ����ṩ����һ�����ַ�����ϵķ�����

const user = 'world';
console.log(`hello ${user}`);  // hello world

// ����
const content = `
  Hello ${firstName},
  Thanks for ordering ${qty} tickets to ${event}.
`;
Ĭ�ϲ���

function logActivity(activity = 'skiing') {
  console.log(activity);
}

logActivity();  // skiing
��ͷ����

�����Ŀ��д��������Ҫͨ�� function �ؼ��ִ������������һ�����ʡ�� return �ؼ��֡�

ͬʱ����ͷ��������̳е�ǰ�����ĵ� this �ؼ��֡�

���磺

[1, 2, 3].map(x => x + 1);  // [2, 3, 4]
��ͬ�ڣ�

[1, 2, 3].map((function(x) {
  return x + 1;
}).bind(this));
ģ��� Import �� Export

import ��������ģ�飬export ���ڵ���ģ�顣

���磺

// ����ȫ��
import dva from 'dva';

// ���벿��
import { connect } from 'dva';
import { Link, Route } from 'dva/router';

// ����ȫ������Ϊ github ����
import * as github from './services/github';

// ����Ĭ��
export default App;
// ���ֵ������� import { App } from './file'; ����
export class App extend Component {};
ES6 ���������

������ֵ

������ֵ�����Ǵ� Object �� Array ��ȡ�������ݴ�Ϊ������

// ����
const user = { name: 'guanguan', age: 2 };
const { name, age } = user;
console.log(`${name} : ${age}`);  // guanguan : 2

// ����
const arr = [1, 2];
const [foo, bar] = arr;
console.log(foo);  // 1
����Ҳ������������ĺ���������

const add = (state, { payload }) => {
  return state.concat(payload);
};
����ʱ�������� alias���ô�����������塣

const add = (state, { payload: todo }) => {
  return state.concat(todo);
};
�����������Ľ�

���������ķ������������������֯һ�� Object ��

const name = 'duoduo';
const age = 8;

const user = { name, age };  // { name: 'duoduo', age: 8 }
������󷽷�ʱ��������ʡȥ function �ؼ��֡�

app.model({
  reducers: {
    add() {}  // ��ͬ�� add: function() {}
  },
  effects: {
    *addRemote() {}  // ��ͬ�� addRemote: function*() {}
  },
});
Spread Operator

Spread Operator �� 3 ���� ...���м��ֲ�ͬ��ʹ�÷�����

��������װ���顣

const todos = ['Learn dva'];
[...todos, 'Learn antd'];  // ['Learn dva', 'Learn antd']
Ҳ�����ڻ�ȡ����Ĳ����

const arr = ['a', 'b', 'c'];
const [first, ...rest] = arr;
rest;  // ['b', 'c']

// With ignore
const [first, , ...rest] = arr;
rest;  // ['c']
�����ռ���������Ϊ���顣

function directions(first, ...rest) {
  console.log(rest);
}
directions('a', 'b', 'c');  // ['b', 'c'];
���� apply��

function foo(x, y, z) {}
const args = [1,2,3];

// ��������Ч����ͬ
foo.apply(null, args);
foo(...args);
���� Object ���ԣ�������ϳ��µ� Object ��(ES2017 stage-2 proposal)

const foo = {
  a: 1,
  b: 2,
};
const bar = {
  b: 3,
  c: 2,
};
const d = 4;

const ret = { ...foo, ...bar, d };  // { a:1, b:3, c:2, d:4 }
���⣬�� JSX �� Spread Operator ����������չ props����� Spread Attributes��

Promises

Promise ���ڸ����ŵش����첽���󡣱��緢���첽����

fetch('/api/todos')
  .then(res => res.json())
  .then(data => ({ data }))
  .catch(err => ({ err }));
���� Promise ��

const delay = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

delay(1000).then(_ => {
  console.log('executed');
});
Generators

dva �� effects ��ͨ�� generator ��֯�ġ�Generator ���ص��ǵ�������ͨ�� yield �ؼ���ʵ����ͣ���ܡ�

����һ�����͵� dva effect��ͨ�� yield ���첽�߼�ͨ��ͬ���ķ�ʽ��֯������

app.model({
  namespace: 'todos',
  effects: {
    *addRemote({ payload: todo }, { put, call }) {
      yield call(addTodo, todo);
      yield put({ type: 'add', payload: todo });
    },
  },
});
React Component

Stateless Functional Components

React Component �� 3 �ֶ��巽ʽ���ֱ��� React.createClass, class �� Stateless Functional Component���Ƽ�����ʹ�����һ�֣����ּ�����״̬�����Ǻ��������� Object��û�� this �������� pure function��

���綨�� App Component ��

function App(props) {
  function handleClick() {
    props.dispatch({ type: 'app/create' });
  }
  return <div onClick={handleClick}>${props.name}</div>
}
��ͬ�ڣ�

class App extends React.Componnet {
  handleClick() {
    this.props.dispatch({ type: 'app/create' });
  }
  render() {
    return <div onClick={this.handleClick.bind(this)}>${this.props.name}</div>
  }
}
JSX

Component Ƕ��

���� HTML��JSX ����Ը��������������

<App>
  <Header />
  <MainContent />
  <Footer />
</App>
className

class �Ǳ����ʣ����������ʽʱ������ className ���� class ��

<h1 className="fancy">Hello dva</h1>
JavaScript ���ʽ

JavaScript ���ʽ��Ҫ�� {} ����������ִ�в����ؽ����

���磺

<h1>{ this.props.title }</h1>
Mapping Arrays to JSX

���԰�����ӳ��Ϊ JSX Ԫ���б�

<ul>
  { this.props.todos.map((todo, i) => <li key={i}>{todo}</li>) }
</ul>
ע��

�������� // ������ע�͡�

<h1>
  {/* multiline comment */}
  {/*
    multi
    line
    comment
    */}
  {
    // single line
  }
  Hello
</h1>
Spread Attributes

���� JSX �� ECMAScript6 ��������ĺ����õ����ԣ������������ props ��

���磺

const attrs = {
  href: 'http://example.org',
  target: '_blank',
};
<a {...attrs}>Hello</a>
��ͬ��

const attrs = {
  href: 'http://example.org',
  target: '_blank',
};
<a href={attrs.href} target={attrs.target}>Hello</a>
Props

���ݴ����� React ���Ƿǳ���Ҫ�ĸ���֮һ���ֱ����ͨ�� props, state �� context ���������ݡ����� dva Ӧ�����ֻ����� props ��

propTypes

JavaScript �����������ԣ������뾡������ propTypes �� props ����У�飬�Լ��ٲ���Ҫ�����⡣

function App(props) {
  return <div>{props.name}</div>;
}
App.propTypes = {
  name: React.PropTypes.string.isRequired,
};
���õ� prop type �У�

PropTypes.array
PropTypes.bool
PropTypes.func
PropTypes.number
PropTypes.object
PropTypes.string
���´�����



���ϴ�����



CSS Modules



��� CSS Modules

һ��ͼ��� CSS Modules �Ĺ���ԭ��



button class �ڹ���֮��ᱻ������Ϊ ProductList_button_1FU0u ��button �� local name���� ProductList_button_1FU0u �� global name ��������ü�̵����������֣�������Ҫ����������ͻ���⡣

Ȼ����Ҫ����ȫ����������� css/less �ļ���д .button {...}�����������ͨ�� styles.button ����������

����ȫ�� CSS

CSS Modules Ĭ���Ǿֲ�������ģ���Ҫ����һ��ȫ�ֹ��򣬿��� :global �﷨��

���磺

.title {
  color: red;
}
:global(.title) {
  color: green;
}
Ȼ�������õ�ʱ��

<App className={styles.title} /> // red
<App className="title" />        // green
classnames Package

��һЩ���ӵĳ����У�һ��Ԫ�ؿ��ܶ�Ӧ��� className����ÿ�� className �ֻ���һЩ�����������Ƿ���֡���ʱ��classnames �����ͷǳ����á�

import classnames from 'classnames';
const App = (props) => {
  const cls = classnames({
    btn: true,
    btnLarge: props.type === 'submit',
    btnSmall: props.type === 'edit',
  });
  return <div className={ cls } />;
}
���������벻ͬ�� type �� App ������ͻ᷵�ز�ͬ�� className ��ϣ�

<App type="submit" /> // btn btnLarge
<App type="edit" />   // btn btnSmall
Reducer

reducer ��һ������������ state �� action�������ϵĻ��µ� state ������(state, action) => state

��ɾ��

�� todos Ϊ����

app.model({
  namespace: 'todos',
  state: [],
  reducers: {
    add(state, { payload: todo }) {
      return state.concat(todo);
    },
    remove(state, { payload: id }) {
      return state.filter(todo => todo.id !== id);
    },
    update(state, { payload: updatedTodo }) {
      return state.map(todo => {
        if (todo.id === updatedTodo.id) {
          return { ...todo, ...updatedTodo };
        } else {
          return todo;
        }
      });
    },
  },
};
Ƕ�����ݵ���ɾ��

�������һ��Ƕ�ף��Ա��� state �ı�ƽ�������Ƕ�׻��� reducer ����д������ά����

app.model({
  namespace: 'app',
  state: {
    todos: [],
    loading: false,
  },
  reducers: {
    add(state, { payload: todo }) {
      const todos = state.todos.concat(todo);
      return { ...state, todos };
    },
  },
});
���������Ƕ�׵����ӣ�Ӧ�������⡣

app.model({
  namespace: 'app',
  state: {
    a: {
      b: {
        todos: [],
        loading: false,
      },
    },
  },
  reducers: {
    add(state, { payload: todo }) {
      const todos = state.a.b.todos.concat(todo);
      const b = { ...state.a.b, todos };
      const a = { ...state.a, b };
      return { ...state, a };
    },
  },
});
Effect

ʾ����

app.model({
  namespace: 'todos',
  effects: {
    *addRemote({ payload: todo }, { put, call }) {
      yield call(addTodo, todo);
      yield put({ type: 'add', payload: todo });
    },
  },
});
Effects

put

���ڴ��� action ��

yield put({ type: 'todos/add', payload: 'Learn Dva' });
call

���ڵ����첽�߼���֧�� promise ��

const result = yield call(fetch, '/todos');
select

���ڴ� state ���ȡ���ݡ�

const todos = yield select(state => state.todos);
������

ȫ�ִ�����

dva �effects �� subscriptions ���״�ȫ������ onError hook�����Կ����� onError ��ͳһ�������

const app = dva({
  onError(e, dispatch) {
    console.log(e.message);
  },
});
Ȼ�� effects ����״�� reject �� promise �Ͷ��ᱻ�����ˡ�

���ش�����

�����Ҫ��ĳЩ effects �Ĵ���������⴦����Ҫ�� effect �ڲ��� try catch ��

app.model({
  effects: {
    *addRemote() {
      try {
        // Your Code Here
      } catch(e) {
        console.log(e.message);
      }
    },
  },
});
�첽����

�첽������� whatwg-fetch��API �����https://github.com/github/fetch

GET �� POST

import request from '../util/request';

// GET
request('/api/todos');

// POST
request('/api/todos', {
  method: 'POST',
  body: JSON.stringify({ a: 1 }),
});
ͳһ������

����Լ����̨�������¸�ʽʱ����ͳһ�Ĵ�����

{
  status: 'error',
  message: '',
}
�༭ utils/request.js�����������м����

function parseErrorMessage({ data }) {
  const { status, message } = data;
  if (status === 'error') {
    throw new Error(message);
  }
  return { data };
}
Ȼ���������ͻ��ߵ� onError hook �

Subscription

subscriptions �Ƕ��ģ����ڶ���һ������Դ��Ȼ�������Ҫ dispatch ��Ӧ�� action������Դ�����ǵ�ǰ��ʱ�䡢�������� websocket ���ӡ�keyboard ���롢geolocation �仯��history ·�ɱ仯�ȵȡ���ʽΪ ({ dispatch, history }) => unsubscribe ��

�첽���ݳ�ʼ��

���磺���û����� /users ҳ��ʱ������ action users/fetch �����û����ݡ�

app.model({
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/users') {
          dispatch({
            type: 'users/fetch',
          });
        }
      });
    },
  },
});
path-to-regexp Package

��� url ����Ƚϸ��ӣ����� /users/:userId/search����ôƥ��� userId �Ļ�ȡ����Ƚ��鷳�������Ƽ��� path-to-regexp ���ⲿ���߼���

import pathToRegexp from 'path-to-regexp';

// in subscription
const match = pathToRegexp('/users/:userId/search').exec(pathname);
if (match) {
  const userId = match[1];
  // dispatch action with userId
}
Router

Config with JSX Element (router.js)

<Route path="/" component={App}>
  <Route path="accounts" component={Accounts}/>
  <Route path="statements" component={Statements}/>
</Route>
�����react-router

Route Components

Route Components ��ָ ./src/routes/ Ŀ¼�µ��ļ��������� ./src/router.js ��ƥ��� Component��

ͨ�� connect ������

���磺

import { connect } from 'dva';
function App() {}

function mapStateToProps(state, ownProps) {
  return {
    users: state.users,
  };
}
export default connect(mapStateToProps)(App);
Ȼ���� App ������� dispatch �� users �������ԡ�

Injected Props (e.g. location)

Route Component ���ж���� props ���Ի�ȡ·����Ϣ��

location
params
children
���������react-router

���� action ����ҳ����ת

import { routerRedux } from 'dva/router';

// Inside Effects
yield put(routerRedux.push('/logout'));

// Outside Effects
dispatch(routerRedux.push('/logout'));

// With query
routerRedux.push({
  pathname: '/logout',
  query: {
    page: 2,
  },
});
�� push(location) �⻹�и��෽������� react-router-redux

dva ����

Redux Middleware

����Ҫ��� redux-logger �м����

import createLogger from 'redux-logger';
const app = dva({
  onAction: createLogger(),
});
ע��onAction ֧�����飬��ͬʱ�������м����

history

�л� history Ϊ browserHistory

import { browserHistory } from 'dva/router';
const app = dva({
  history: browserHistory,
});
ȥ�� hashHistory �µ� _k ��ѯ����

import { useRouterHistory } from 'dva/router';
import { createHashHistory } from 'history';
const app = dva({
  history: useRouterHistory(createHashHistory)({ queryKey: false }),
});