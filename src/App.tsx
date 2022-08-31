import { Component, createEffect, createSignal, For } from 'solid-js';

import {Toolbar, ToolbarContent, ToolbarItem,
  Masthead, MastheadBrand, MastheadContent, MastheadMain, MastheadToggle,

Page, PageToggleButton, PageSection, PageSectionVariants} from '.';

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
      <PageSection variant='darker'>Section with darker background</PageSection>
      <PageSection variant='dark'>Section with dark background</PageSection>
      <PageSection variant='light'>Section with light background</PageSection>
    </Page>
  );
};

export default App;
