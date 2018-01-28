import * as React from 'react';
import './Hello.scss';

class Hello extends React.Component {
    render() {
        return (
            <nav>
                <a><span>首页</span></a>
                <a><span>视频</span></a>
                <a><span>代码</span></a>
                <a><span>课程</span></a>
                <a className="sign sign_in"><span>登录</span></a>
                <a className="sign sign_up"><span>注册</span></a>
            </nav>
        );
    }
}

export default Hello;