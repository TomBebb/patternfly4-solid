import { Component, createEffect, createSignal, For } from 'solid-js';

import {Toolbar, ToolbarContent, ToolbarItem,
  Masthead, MastheadBrand, MastheadContent, MastheadMain, MastheadToggle,

Page, PageToggleButton, PageSection, PageSectionVariants, Badge, Banner, Card, CardBody, Divider, CardFooter, Title, Checkbox} from '.';
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
  return (
    <Page header={header} sidebar={sidebar}>
      <PageSection variant='darker'>Section with darker background
      <Card>
        <CardTitle>
          <Title headingLevel="h4" size="xl">
            Details
          </Title>
        </CardTitle>
        <CardBody>My Body
        </CardBody>
        <Divider />
        <CardFooter>
          <a href="#">View Settings</a>
        </CardFooter>
      </Card>
      
      </PageSection>
      <PageSection variant='dark'>Section with dark background
      <Banner variant='danger'>
        Welcome!
      </Banner>
      </PageSection>
      <PageSection variant='light'>Section with light background <Badge isRead>Read</Badge> <Badge>Unread</Badge>
      
      <Checkbox
      description='Desc'
        label="Child CheckBox 2"
        checked={true}
      />
      </PageSection>
    </Page>
  );
};

export default App;
