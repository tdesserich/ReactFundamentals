import React from 'react';

const LifeCycleCodePen = () => {
    return (
        <div className='main'>
            <div className='mainDiv'>
                <h1 className='section-title'>Life Cycles</h1>
                <hr />
                <dl>
                    <dt>Birth Phase of a Component</dt>
                    <dd>Birth, or the mounting of the component, is where the component starts initializing, and the component's props and state are defined and configured.</dd>
                    <dt>Growth/Update Phase of the Component</dt>
                    <dd>This is where a majority of the action happens, and the phase can, and usually does, repeat many times. This is where users are interacting with the app and the component is changing things in response to those actions.</dd>
                    <dt>Death/Unmounting Phase of a Component</dt>
                    <dd>This is the last phase of the react component life cycle. This occurs when the user navigates away, the UI page changes, a component is hidden, etc. Unmounting occurs only once and readies the component for garbage collection.</dd>
                </dl>
                <hr />
                <dl>
                    <dt>Common Mounting Methods</dt>
                    <dd>- componentWillMount(): This is the best place to set state based on props, since our render has yet to be called. This gives us a chance to make calculations before calling render so they will be rendered correctly.</dd> 
                    <dd>- render(): The render method starts in the mounting phase and continues to exist in the update phase. All the render method should be doing is rendering, so do not have any calculations that will change the state or props.</dd>                
                    <dd>- componentDidMount(): The last step in the mounting phase is componentDidMount(). This method is called once all of the component's children are mounted. Unlike other mount methods, componentDidMount() works from the bottom up, not the top down. Useful things to do in this life cycle include: Making API calls, initializing 3rd party libraries, and setting up listeners/subscriptions.</dd>
                    <dt>Common Update Methods</dt>
                    <dd>- componentWillReceiveProps(): This method is invoked before a mounted component receives new props. React will only call this method if some of the components props may update. If you need to update the state in response to prop changes (for example, to reset it), you may compare this.props and nextProps and perform state transitions using this.setState() in this method.</dd>
                    <dt>Common Unmount Methods</dt>
                    <dd>- componentWillUnmount(): This method is called right before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, etc. If we don't take the time to remove events we can create memory leaks in our system which will slow down your application and make performance terrible.</dd>
                    <dt>Life Cycle Diagram</dt>
                    <dd><a href="https://codepen.io/eduardoboucas/pen/jqWbdb">See the CodePen diagram here</a></dd>              
                </dl>
            </div>
        </div>
    )
}


export default LifeCycleCodePen;