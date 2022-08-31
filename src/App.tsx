import { Component, createEffect, createSignal, For } from 'solid-js';

import {
  Toolbar, ToolbarContent, ToolbarItem,
  Masthead, MastheadBrand, MastheadContent, MastheadMain, MastheadToggle,

  Page, PageToggleButton, PageSection, PageSectionVariants, Badge, Banner, Card, CardBody, Divider, CardFooter, Title, Checkbox, Tabs
} from '.';
import { CardTitle } from './Card/CardTitle';

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
            </div>
          },
          {
            title: 'Typography',
            content: <div>
              <Title headingLevel='h1' >H1</Title>
            </div>
          }
        ]}
      />
    </Page>
  );
};

export default App;
