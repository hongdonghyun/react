import React, { Children } from 'react';
import './TodoListTemplate.css';

// 스타일링을 위한 컴포넌트 ()
const TodoListTemplate = ({palette,form,children}) => {
    return (
        <main className='todo-list-template'>
        <div className='title'>
            오늘 할 일
        </div>
        <section className='palette-wrapper'>
            {palette}
        </section>
        <section className='form-wrapper'>
        {form}
        </section>
        <section className='todos-wrapper'>
        {children}
        </section>
        </main>
    );
};

export default TodoListTemplate;