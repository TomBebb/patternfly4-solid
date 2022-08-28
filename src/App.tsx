import { Component, createEffect, createSignal } from 'solid-js';
import Hint from './Hint';
import HintBody from './HintBody';
import HintFooter from './HintFooter';
import HintTitle from './HintTitle';
import TextContent from './TextContent';

import Title from './Title';
import Tooltip from './Tooltip';
import Button from './Button';
import Label from './Label';
import Select from './Select';
import Wizard, { WizardHeader } from './Wizard';

const App: Component = () => {
  const [labelValue, setLabelValue] = createSignal("Hello, world of labels!");
  const [item, setItem] = createSignal(42);
  return (
    <div >
      <Wizard steps={[
        {name: 'Demo 1', component: <div>My Demo</div>},
        {name: 'Demo 2', component: <div>My SubDemo</div>,
      steps: [
        {name: 'Sub 1', component: <div>Sub 1</div>},
        {name: 'Sub 2', component: <div>SubTEEN</div>},
        {name: 'Sub 3', component: <div>Sub 3</div>},
      ]},
      {name: 'Demo 3'}
      ]}>
      </Wizard>
      <Select item={item()} onChange={(v) => {console.log('onSelect',v);setItem(v)}} options={[
        {value: 12, label: 'Hallo world!'},
        {value: 42, label: 'New world.'}
      ]}></Select>
    <Label isEditable editableProps={{  onSubmit: setLabelValue,value: labelValue()}}>{labelValue()}</Label>

      <Tooltip
        content={
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
          </div>
        }
      />
      <TextContent>
  <h1>Hello world</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius
    lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum
    mattis neque. Sub works as well!
  </p>
  <h2>Second level</h2>
  <p>
    Curabitur accumsan turpis pharetra
    <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel
    cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et
    neque nisl.
  </p>
  <ul>
    <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
    <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
    <li>
      Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
    </li>
    <li>Ut non enim metus.</li>

    </ul>

    <Button variant='primary'>Primary</Button>
    <Button variant='secondary'>Secondary</Button>
    <Button variant='tertiary'>tertiary</Button>
    <Hint actions={<div>Actions</div>}>
      <HintTitle>Do more with Find it Fix it capabilities</HintTitle>
      <HintBody>
        Upgrade to <Button variant='danger' isInline>Test</Button> Red Hat Smart Management to remediate all your systems across regions and geographies.
      </HintBody>
      <HintFooter>
          Try it for 90 days
      </HintFooter>
    </Hint>
    </TextContent>
        <Title headingLevel='h1'>
          Hello, world!
        </Title>
        <Title headingLevel='h2'>
          H2
        </Title>
    </div>
  );
};

export default App;
