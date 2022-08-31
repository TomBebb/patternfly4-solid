import { Component, createSignal } from 'solid-js';

import {
  Toolbar, ToolbarContent, ToolbarItem,
  Masthead, MastheadBrand, MastheadContent, MastheadMain, MastheadToggle,

  Page, PageToggleButton, Title, Checkbox, Tabs, Label, Input, TextArea, List, ListItem, OrderType
} from '.';
import { HelperText } from './HelperText/HelperText';
import { HelperTextItem } from './HelperText/HelperTextItem';

const App: Component = () => {

  const [isNavOpen, setIsNavOpen] = createSignal(true);

  const onNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };


  const headerToolbar = (
    <Toolbar>
      <ToolbarContent>
        <ToolbarItem>header-tools</ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );
  const sidebar = <div>Sidebar</div>


  const header = (
    <Masthead>
      <MastheadToggle>
        <PageToggleButton
          variant="plain"
          aria-label="Global navigation"
          isNavOpen={isNavOpen()}
          onNavToggle={onNavToggle}
        >
          Bars
        </PageToggleButton>
      </MastheadToggle>
      <MastheadMain>
        <MastheadBrand href="https://patternfly.org" target="_blank">
          Logo
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>{headerToolbar}</MastheadContent>
    </Masthead>
  );
  const [currentTab, setCurrentTab] = createSignal(0);
  const [email, setEmail] = createSignal('top');
  return (
    <Page header={header} sidebar={sidebar}>
      <Tabs
        activeKey={currentTab()}
        onSelect={setCurrentTab}
        tabs={[
          {
            title: 'Form',
            content: <div>

              <Checkbox
                description='Desc'
                label="Child CheckBox 2"
                checked={true}
              />

              <Input placeholder='Email' value={email()} onChange={setEmail} />
              <TextArea placeholder='Email' value={email()} onChange={setEmail} canResizeVertical />
            </div>
          },
          {
            title: 'Typography',
            content: <div>
              <Title headingLevel='h1' >H1</Title>
              <Title headingLevel='h2' >H2</Title>
              <Title headingLevel='h3' >H3</Title>

              <Label>Label</Label>
              <Label isCompact>Label (compact)  </Label>
            </div>
          },
          {
            title: 'Helpers',
            content: <div>
              <HelperText >
                <HelperTextItem hasIcon>Default</HelperTextItem>
                <HelperTextItem variant='error' hasIcon>Error</HelperTextItem>
                <HelperTextItem variant='warning' hasIcon>Warning</HelperTextItem>
                <HelperTextItem variant='indeterminate' hasIcon>Indeterminate</HelperTextItem>
                <HelperTextItem variant='success' hasIcon>Success</HelperTextItem>
              </HelperText>
            </div>
          },
          {
            title: 'Lists',
            content:   <List type={OrderType.Number}  isBordered>
            <ListItem>First</ListItem>
            <ListItem>Second</ListItem>
            <ListItem>Third</ListItem>
          </List>
          }
        ]}
      />
    </Page>
  );
};

export default App;
