import { createElement, render } from 'rax';
import DriverUniversal from 'driver-universal';
import MyComponent from 'tab-panel';

render(<MyComponent />, document.body, { driver: DriverUniversal });
