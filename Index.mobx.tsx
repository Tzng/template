/**
 * @author {{author}}
 * @date {{date}}
 * @descriptions: {{descriptions}}
 */
import { ComponentType } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx'
import './Index.less';

/**
 * 定义页面的Props
 */
interface Props {

}
/**
 * 定义页面的State
 */
interface State {

}
/**
 * @descriptions: {{descriptions}}
 */
@inject({{namespace}})
@observer
class Index extends Component < Props, State > {

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }


  render() {
    const { counterStore: { counter } } = this.props;
    return (
      <View className='{{template}}'>
        <Text>欢迎来到{{template}}页面</Text>
      </View>
    )
  }
}

export default Index as ComponentType