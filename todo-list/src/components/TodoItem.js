import React, { Component } from 'react';
import './TodoItem.css'

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        /* 다를 경우에만 렌더링 하게 하는 최적화 */
        return this.props.checked !== nextProps.checked;
    }
    render() {
        const { text,checked,id,onToggle,onRemove} = this.props;
        return (
            <div className='todo-item' onClick={() =>onToggle(id)}>
                <div className='remove' onClick={(e) => {
                    e.stopPropagation();
                    onRemove(id)}
                }>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}> {/* 있으면 todo-text true 없으면 todo-false로 클래스명이 지정됨 */}
                <div>{text}</div>
                </div>
                {
                    checked && (<div className='check-mark'>✓</div>) /* checked값이 True일때만 체크마크가 나옴 */
                }
                
            </div>
        );
    }
}

export default TodoItem;